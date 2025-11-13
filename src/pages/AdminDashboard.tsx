import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Plus, Pencil, Trash2, X } from "lucide-react";
import { format } from "date-fns";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type PostCategory = "industry_insights" | "events" | "company_updates";

interface Post {
  id: string;
  title: string;
  description: string;
  content: string | null;
  category: PostCategory;
  image_url: string | null;
  images: string[] | null;
  created_at: string;
  updated_at: string;
}

const categoryLabels: Record<PostCategory, string> = {
  industry_insights: "Industry Insights",
  events: "Events",
  company_updates: "Company Updates",
};

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    category: "industry_insights" as PostCategory,
  });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchPosts();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/admin/login");
        return;
      }

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        toast({
          title: "Access Denied",
          description: "You do not have admin privileges.",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setUser(user);
    } catch (error) {
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleAdditionalImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAdditionalImageFiles((prev) => [...prev, ...files]);
  };

  const removeAdditionalImage = (index: number) => {
    setAdditionalImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("post-images")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from("post-images")
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let thumbnailUrl = editingPost?.image_url || null;
      let additionalImageUrls: string[] = editingPost?.images || [];

      if (thumbnailFile) {
        thumbnailUrl = await uploadImage(thumbnailFile);
      }

      if (additionalImageFiles.length > 0) {
        const uploadPromises = additionalImageFiles.map((file) => uploadImage(file));
        const newImageUrls = await Promise.all(uploadPromises);
        additionalImageUrls = [...additionalImageUrls, ...newImageUrls];
      }

      const postData = {
        title: formData.title,
        description: formData.description,
        content: formData.content,
        category: formData.category,
        image_url: thumbnailUrl,
        images: additionalImageUrls,
        created_by: user.id,
      };

      if (editingPost) {
        const { error } = await supabase
          .from("posts")
          .update(postData)
          .eq("id", editingPost.id);

        if (error) throw error;
        toast({ title: "Post updated successfully!" });
      } else {
        const { error } = await supabase
          .from("posts")
          .insert([postData]);

        if (error) throw error;
        toast({ title: "Post created successfully!" });
      }

      setFormData({ title: "", description: "", content: "", category: "industry_insights" });
      setThumbnailFile(null);
      setAdditionalImageFiles([]);
      setEditingPost(null);
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      description: post.description,
      content: post.content || "",
      category: post.category,
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
      toast({ title: "Post deleted successfully!" });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container-max py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container-max section-padding">
        <Tabs defaultValue="create" className="space-y-6">
          <TabsList>
            <TabsTrigger value="create">
              <Plus className="w-4 h-4 mr-2" />
              {editingPost ? "Edit Post" : "Create Post"}
            </TabsTrigger>
            <TabsTrigger value="manage">Manage Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
                <CardDescription>
                  {editingPost ? "Update the post details" : "Add a new post to Events & Updates"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      maxLength={200}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description (max 500 characters)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      maxLength={500}
                      rows={3}
                      className="resize-none"
                      placeholder="This will appear on the post card"
                    />
                    <p className="text-sm text-muted-foreground text-right">
                      {formData.description.length}/500
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Full Article Content (Rich Text)</Label>
                    <div className="border rounded-md">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={(value) => setFormData({ ...formData, content: value })}
                        modules={quillModules}
                        className="bg-background"
                        placeholder="Write your full article here. You can add links, formatting, and more..."
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Use the toolbar to format text and add links to external websites
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value as PostCategory })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categoryLabels).map(([value, label]) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Thumbnail Image (Main Card Image)</Label>
                    <Input
                      id="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                    />
                    {thumbnailFile && (
                      <p className="text-sm text-muted-foreground">
                        Selected: {thumbnailFile.name}
                      </p>
                    )}
                    {editingPost?.image_url && !thumbnailFile && (
                      <div className="mt-2">
                        <img
                          src={editingPost.image_url}
                          alt="Current thumbnail"
                          className="w-32 h-32 object-cover rounded-md"
                        />
                        <p className="text-sm text-muted-foreground mt-1">Current thumbnail</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalImages">Additional Images (Multiple)</Label>
                    <Input
                      id="additionalImages"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleAdditionalImagesUpload}
                    />
                    {additionalImageFiles.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-2">
                          New images to upload: {additionalImageFiles.length}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {additionalImageFiles.map((file, index) => (
                            <div key={index} className="relative">
                              <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
                                <p className="text-xs text-center px-1 break-all">
                                  {file.name}
                                </p>
                              </div>
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                                onClick={() => removeAdditionalImage(index)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {editingPost?.images && editingPost.images.length > 0 && (
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground mb-2">
                          Existing images: {editingPost.images.length}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {editingPost.images.map((url, index) => (
                            <img
                              key={index}
                              src={url}
                              alt={`Additional ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-md"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" disabled={submitting}>
                      {submitting ? "Saving..." : editingPost ? "Update Post" : "Create Post"}
                    </Button>
                    {editingPost && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditingPost(null);
                          setFormData({ title: "", description: "", content: "", category: "industry_insights" });
                          setThumbnailFile(null);
                          setAdditionalImageFiles([]);
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">All Posts ({posts.length})</h2>
              {posts.length === 0 ? (
                <Card>
                  <CardContent className="py-8 text-center">
                    <p className="text-muted-foreground">No posts yet. Create your first post!</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {posts.map((post) => (
                    <Card key={post.id}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          {post.image_url && (
                            <img
                              src={post.image_url}
                              alt={post.title}
                              className="w-32 h-32 object-cover rounded-md"
                            />
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {categoryLabels[post.category]} • {format(new Date(post.created_at), "MMM dd, yyyy")}
                                </p>
                                {post.images && post.images.length > 0 && (
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {post.images.length} additional image{post.images.length > 1 ? 's' : ''}
                                  </p>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleEdit(post)}
                                >
                                  <Pencil className="w-4 h-4" />
                                </Button>
                                <Button
                                  variant="destructive"
                                  size="sm"
                                  onClick={() => handleDelete(post.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
