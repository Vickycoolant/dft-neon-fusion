import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, TrendingUp, Award } from "lucide-react";
import { format } from "date-fns";

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

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={() => navigate("/events")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Button>
        </div>
      </div>
    );
  }

  const config = categoryConfig[post.category];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Featured Image */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-6 container-max"
          onClick={() => navigate("/events")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events & Updates
        </Button>

        <div className="container-max">
          {post.image_url && (
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 left-4 ${config.color}`}>
                <Icon className="w-3 h-3 mr-1" />
                {config.label}
              </Badge>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.created_at), "MMMM dd, yyyy")}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {post.description}
            </p>

            {/* Rich Text Content */}
            {post.content && (
              <div
                className="prose prose-lg max-w-none mb-8 
                prose-headings:text-foreground 
                prose-p:text-muted-foreground
                prose-a:text-primary hover:prose-a:text-primary/80
                prose-strong:text-foreground
                prose-ul:text-muted-foreground
                prose-ol:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}

            {/* Additional Images Gallery */}
            {post.images && post.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {post.images.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden"
                  >
                    <img
                      src={imageUrl}
                      alt={`${post.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
