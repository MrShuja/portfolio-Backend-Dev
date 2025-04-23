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
  import { animateBottomBorder } from "./animations/AnimateBottomBorder.js";
import { useEffect, useRef } from "react";
  
  const iconMap = {
    LinkedIn: <Linkedin />,
    GitHub: <Github />,
    Twitter: <Twitter />,
    Facebook: <Facebook />,
    Instagram: <Instagram />,
  };
  
  export default function Contact() {
     const headingRef = useRef(null);
      const scrollRef = useRef(null);
    
      useEffect(() => {
        if (headingRef.current) animateBottomBorder(headingRef.current);
        const interval = setInterval(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollLeft += 320;
            if (
              scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
              scrollRef.current.scrollWidth
            ) {
              scrollRef.current.scrollLeft = 0;
            }
          }
        }, 4000);
    
        return () => clearInterval(interval);
      }, []);
    return (
      <section id="contact" className="bg-background py-16 text-textPrimary min-h-[60vh] border-b border-border">
        <div className="container mx-auto px-4 text-center" ref={scrollRef}>
          <h2 className="text-4xl font-bold mb-12 relative inline-block" ref={headingRef}>
            <span className="relative z-10">Get In Touch</span>
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
  