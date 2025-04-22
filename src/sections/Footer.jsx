import { footerContent } from "../data/contents.js";

export default function Footer() {
  return (
    <footer className="bg-card text-textPrimary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Brand/Logo Section */}
        <div>
          <h3 className="text-xl font-bold text-accent mb-4">Shuja</h3>
          <p className="text-sm text-textPrimary">
            I'm a backend developer passionate about clean code and scalable systems. Let's build something awesome.
          </p>
        </div>

        {/* Footer Links Section */}
        {footerContent.sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-3 text-accent">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border mt-12 pt-6 text-center text-sm text-textPrimary">
        {footerContent.text}
      </div>
    </footer>
  );
}
