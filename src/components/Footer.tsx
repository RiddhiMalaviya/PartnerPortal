import { Mail } from "lucide-react";
import { FaLinkedin, FaYoutube  } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-[#2155CD] text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center justify-items-center">
                    {/* Certificates */}
                    <div className="flex items-center justify-center md:justify-start">
                        <img src='/src/assets/GDPR-1.png' alt="GDPR Certification" className="h-50 mx-auto md:mx-0" />
                    </div>

                    {/* UK Address */}
                    <div>
                        <h3 className="font-bold mb-2">Payroll Cloud Limited (UK)</h3>
                        <p>Registered in England and Wales</p>
                        <p className="mt-2">Address:</p>
                        <p>International House,</p>
                        <p>12 Constance Street,</p>
                        <p>London, E16 2DQ, UK</p>
                    </div>

                    {/* US Address */}
                    <div>
                        <h3 className="font-bold mb-2">Payroll Cloud Corp (USA)</h3>
                        <p>Registered in Texas</p>
                        <p className="mt-2">Address:</p>
                        <p>1314 W McDermott</p>
                        <p>Dr, Ste 106 #910,</p>
                        <p>Allen, TX 75013, US</p>
                    </div>
                    
                    {/* Social Links & Contact */}
                    <div className="flex space-x-6 justify-center md:justify-start">
                        <a href="http://www.linkedin.com/company/nxaienterprisehcm" className="transform transition-transform duration-200 hover:scale-110">
                            <FaLinkedin size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                        <a href="http://www.youtube.com/@pclnXAI" className="transform transition-transform duration-200 hover:scale-110">
                            <FaYoutube size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                        <a href="mailto:mailto:%20info@pclnxai.com" className="transform transition-transform duration-200 hover:scale-110">
                            <Mail size={28} className="transition-opacity duration-200 hover:opacity-80" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center space-y-4">
                    <div>
                        <strong>Email us at </strong>
                        <a href="mailto:info@pclnxai.com" className="hover:underline" target="_blank" rel="noreferrer noopener">info@pclnxai.com</a>
                    </div>
                    <a href="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" data-type="link" data-id="https://pclnxai.com/wp-content/uploads/2025/03/Privacy-Policy-for-PCLnXAI.pdf" className="hover:underline">Click here to see our Privacy Policy</a>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-sm">
                    <p>
                        PCLnXAI is operated globally by Payroll Cloud Corp (US) and Payroll Cloud Limited (UK).
                        All product offerings, support, and contracts will clearly indicate the responsible legal entity based on your region.
                        © 2023 PCLnXAI. All rights reserved. All trademarks and registered trademarks are the property of their respective owners.
                    </p>
                    {/* <p className="mt-2">
                        
                    </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;