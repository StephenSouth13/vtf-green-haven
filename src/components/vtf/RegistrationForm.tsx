import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in real app, integrate with email service)
    try {
      // Here you would integrate with EmailJS, Netlify Forms, or your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Đăng ký thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
      });
      
      setFormData({ name: "", phone: "", email: "", requirements: "" });
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration-form" className="vtf-section bg-muted/30">
      <div className="vtf-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in-up animate">
            <h2 className="vtf-heading">Đăng Ký Trải Nghiệm</h2>
            <p className="vtf-subheading">
              Hãy để lại thông tin để chúng tôi tư vấn và thiết kế trải nghiệm phù hợp nhất cho bạn.
            </p>
          </div>

          <Card className="vtf-card border-0 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary">
                Bắt Đầu Hành Trình Cùng VTF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Họ và tên *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 text-lg border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Số điện thoại *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 text-lg border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-12 py-6 text-lg border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Textarea
                    name="requirements"
                    placeholder="Nhu cầu và mong muốn của bạn..."
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="pl-12 pt-12 text-lg border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="vtf-btn-primary w-full py-6 text-lg"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi Đăng Ký"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Thông tin sẽ được gửi về: <strong>baochauevent@gmail.com</strong>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;