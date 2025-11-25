"use client";

import { useState, useRef, useEffect } from "react";
import { HeroProps } from "@/config";

interface SocialLink {
  text: string;
  href: string;
}

interface HeroComponentProps extends HeroProps {
  socialLinks?: SocialLink[];
}

export default function Hero({ name, specialty, summary, email, socialLinks = [] }: HeroComponentProps) {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailContainerRef = useRef<HTMLDivElement>(null);

  const handleShowEmail = () => {
    setShowEmail(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showEmail &&
        emailContainerRef.current &&
        !emailContainerRef.current.contains(event.target as Node)
      ) {
        setShowEmail(false);
        setCopied(false);
      }
    };

    if (showEmail) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmail]);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const CopyIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block ml-2"
    >
      <path
        d="M5.5 3.5H3.5C2.94772 3.5 2.5 3.94772 2.5 4.5V12.5C2.5 13.0523 2.94772 13.5 3.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V3.5C14.5 2.94772 14.0523 2.5 13.5 2.5H7.5C6.94772 2.5 6.5 2.94772 6.5 3.5V9.5C6.5 10.0523 6.94772 10.5 7.5 10.5H5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section className="py-24 md:py-32" id="hero">
      <h1 className="mb-1.5 font-serif text-7xl font-bold tracking-tightest text-white sm:text-8xl md:mb-0 md:text-9xl">
        {name}
      </h1>
      <p className="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl">
        {specialty}
      </p>
      <p className="mb-16 text-base font-normal text-neutral md:text-lg">
        {summary}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {!showEmail ? (
          <button
            onClick={handleShowEmail}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff] cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Show email"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </button>
        ) : (
          <div
            ref={emailContainerRef}
            className="inline-flex items-center rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff]"
          >
            <span>{email}</span>
            <button
              onClick={handleCopyEmail}
              className="ml-3 p-1 hover:opacity-80 transition-opacity"
              aria-label="Copy email"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block"
                >
                  <path
                    d="M13.5 4.5L6 12L2.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <CopyIcon />
              )}
            </button>
          </div>
        )}

        {socialLinks.map((link) => {
          const isLinkedIn = link.text.toLowerCase() === "linkedin";
          const isGithub = link.text.toLowerCase() === "github";

          if (!isLinkedIn && !isGithub) return null;

          return (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-5 text-sm leading-5 font-medium text-[#fff] cursor-pointer hover:opacity-90 transition-opacity"
            >
              {isLinkedIn ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ) : isGithub ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ) : null}
            </a>
          );
        })}
      </div>
    </section>
  );
}

