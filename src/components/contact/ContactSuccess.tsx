import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ContactSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-xs sm:max-w-md p-6 sm:p-8 bg-background rounded-lg shadow-lg text-center space-y-4 sm:space-y-6">
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto" />
        <h2 className="text-xl sm:text-2xl font-bold">Thank You!</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          We've received your message and will get back to you soon.
        </p>
        <Button asChild className="w-full text-sm sm:text-base py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-muted/30">
    //   <div className="max-w-md w-full p-8 bg-background rounded-lg shadow-lg">
    //     <div className="text-center space-y-6">
    //       <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
    //       <h2 className="text-2xl font-bold">Thank You!</h2>
    //       <p className="text-muted-foreground">
    //         We've received your message and will get back to you soon.
    //       </p>
    //       <Button asChild className="w-full">
    //         <Link to="/">Return to Homepage</Link>
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ContactSuccess;