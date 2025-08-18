import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";

const EventsUpdates = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Construction className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-4 gradient-text">Events & Updates</h1>
        <p className="text-muted-foreground mb-6">
          This page is currently under development. Stay tuned for exciting updates about our events and milestones.
        </p>
        <Button variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default EventsUpdates;