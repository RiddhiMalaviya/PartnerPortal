import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
    return (
        <div className="min-h-screen py-20 px-4 bg-muted/30">
            <div className="max-w-xl mx-auto w-full p-8 bg-background rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-2">Contact Partner Team</h1>
                <p className="text-muted-foreground text-center mb-12">
                    Get in touch with our partner team to learn more about partnership opportunities.
                </p>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;