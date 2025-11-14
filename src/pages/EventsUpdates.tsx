import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, TrendingUp, Users, Award } from "lucide-react";
import { format } from "date-fns";

type PostCategory = "industry_insights" | "events" | "company_updates";

interface Post {
  id: string;
  title: string;
  description: string;
  category: PostCategory;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

const categoryConfig = {
  industry_insights: {
    label: "Industry Insights",
    icon: TrendingUp,
    color: "bg-primary/10 text-primary",
  },
  events: {
    label: "Events",
    icon: Calendar,
    color: "bg-accent/10 text-accent",
  },
  company_updates: {
    label: "Company Updates",
    icon: Award,
    color: "bg-secondary text-secondary-foreground",
  },
};

const EventsUpdates = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<PostCategory | "all">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery, selectedCategory]);

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
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const PostCard = ({ post }: { post: Post }) => {
    const config = categoryConfig[post.category];
    const Icon = config.icon;

    return (
      <Card 
        className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in cursor-pointer"
        onClick={() => navigate(`/events/${post.id}`)}
      >
        {post.image_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className={`absolute top-4 left-4 ${config.color}`}>
              <Icon className="w-3 h-3 mr-1" />
              {config.label}
            </Badge>
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4" />
            {format(new Date(post.created_at), "MMMM dd, yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.description}</p>
          <Button variant="link" className="mt-2 p-0 h-auto">
            Read more →
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070"
            alt="Events and Updates" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-accent/20"></div>
        </div>
        <div className="container-max relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Events & Updates
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest trends, events, and updates from DFT Consult.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Tabs
              value={selectedCategory}
              onValueChange={(value) => setSelectedCategory(value as PostCategory | "all")}
              className="w-full md:w-auto"
            >
              <TabsList className="grid grid-cols-4 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="industry_insights">Insights</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="company_updates">Updates</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">
                {searchQuery || selectedCategory !== "all"
                  ? "Try adjusting your filters"
                  : "Check back soon for updates"}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsUpdates;
