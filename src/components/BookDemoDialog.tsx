import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface BookDemoDialogProps {
  children: React.ReactNode;
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
  "05:00 PM",
];

const BookDemoDialog = ({ children }: BookDemoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [preferredDate, setPreferredDate] = useState<Date>();
  const [preferredTime, setPreferredTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    const dateStr = preferredDate ? format(preferredDate, "PPP") : "Not specified";
    const timeStr = preferredTime || "Not specified";

    const subject = encodeURIComponent(`Demo Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nPreferred Date: ${dateStr}\nPreferred Time: ${timeStr}\n\nMessage:\n${formData.message}`
    );

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@dftconsult.com&su=${subject}&body=${body}`, "_blank");
    toast.success("Redirecting to Gmail to send your demo request!");
    setOpen(false);
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setPreferredDate(undefined);
    setPreferredTime("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[520px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Book a Demo</DialogTitle>
          <p className="text-sm text-muted-foreground">Fill in the details below and we'll get back to you.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="demo-name">Full Name *</Label>
              <Input id="demo-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-email">Email *</Label>
              <Input id="demo-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Your Email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="demo-company">Company</Label>
              <Input id="demo-company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-phone">Phone</Label>
              <Input id="demo-phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+254..." />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !preferredDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {preferredDate ? format(preferredDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={preferredDate}
                    onSelect={setPreferredDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-1.5">
              <Label>Preferred Time</Label>
              <Select value={preferredTime} onValueChange={setPreferredTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="demo-message">Message</Label>
            <Textarea id="demo-message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your needs..." rows={3} />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full">
            Submit & Send via Gmail
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoDialog;
