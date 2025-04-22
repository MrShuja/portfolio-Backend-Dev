import {
    Mail,
    Phone,
    Linkedin,
    Github,
    Twitter,
    Facebook,
    Instagram,
    Send,
  } from "lucide-react";
  import { contactContent } from "../data/contents.js";
  
  const iconMap = {
    LinkedIn: <Linkedin />,
    GitHub: <Github />,
    Twitter: <Twitter />,
    Facebook: <Facebook />,
    Instagram: <Instagram />,
  };
  
  export default function Contact() {
    return (
      <section id="contact" className="bg-background py-16 text-textPrimary min-h-[60vh]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">Get In Touch</span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-accent rounded-full z-0"></span>
          </h2>
  
          <div className="max-w-2xl mx-auto space-y-6 text-left">
            {/* Email */}
            <div className="flex items-center gap-4">
              <Mail className="text-accent" />
              <a href={`mailto:${contactContent.email}`} className="hover:text-accent transition">
                {contactContent.email}
              </a>
            </div>
  
            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <Phone className="text-green-500" />
              <a
                href={`https://wa.me/${contactContent.whatsappNumber.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                Chat on WhatsApp <Send className="w-4 h-4" />
              </a>
            </div>
  
            {/* Social Media */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-accent">Follow Me</h4>
              <div className="flex justify-center gap-6 text-xl">
                {contactContent.socialLinks.map(({ name, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    {iconMap[name]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  