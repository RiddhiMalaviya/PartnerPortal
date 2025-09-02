import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveContactForm } from "@/lib/storage";

const ContactForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        saveContactForm(formData);
        navigate("/contact/success");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-full sm:max-w-2xl mx-auto px-4 sm:px-0">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
                <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-sm sm:text-base py-2 sm:py-2.5"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-sm sm:text-base py-2 sm:py-2.5"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="company" className="text-sm sm:text-base">Company</Label>
                <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="text-sm sm:text-base py-2 sm:py-2.5"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
                <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-sm sm:text-base py-2 sm:py-2.5"
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button type="submit" className="flex-1 text-sm sm:text-base py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700">
                    Submit
                </Button>
                <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => navigate("/")}
                    className="flex-1 text-sm sm:text-base py-2 sm:py-2.5"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;