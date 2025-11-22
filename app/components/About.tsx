import Section from "./Section";
import Image from "next/image";
import { AboutProps, HeroProps } from "@/config";

interface AboutComponentProps extends AboutProps {
  name: string;
}

export default function About({ description, image, name }: AboutComponentProps) {
  return (
    <Section text="About Me" href="about">
      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-8">
        <p className="w-auto text-base text-neutral md:pr-5 whitespace-pre-line">
          {description}
        </p>
        <div className="h-80 w-64 flex-shrink-0 rotate-[5deg] bg-white p-4 md:rotate-[7deg]">
          <Image
            className="object-cover"
            src={image}
            width={260}
            height={260}
            alt={name}
          />
        </div>
      </div>
    </Section>
  );
}

