import { SiteConfig } from "@/config";

interface FooterProps {
  author: string;
  socialLinks: { text: string; href: string }[];
}

export default function Footer({ author, socialLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral/20 px-5 pt-5 pb-8 text-center text-white">
      <ul className="mb-5 flex flex-wrap justify-center gap-x-5 text-xs">
        {socialLinks.map(({ text, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-3 after:relative after:bottom-[-4px] after:content-[url(/external.svg)] hover:text-primary"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-xs">
        {author} © {currentYear}.{" "}
        <span className="text-neutral">Designed & Developed by</span> Moisés
        Machuca
      </p>
    </footer>
  );
}

