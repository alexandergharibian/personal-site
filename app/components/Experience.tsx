import Section from "./Section";
import { ExperienceProps } from "@/config";

interface ExperienceComponentProps {
  experience: ExperienceProps[];
}

export default function Experience({ experience }: ExperienceComponentProps) {
  return (
    <Section text="Work Experience" href="experience">
      {experience.map(({ company, position, startDate, endDate, summary }, index) => (
        <div key={index} className="mb-10">
          <h3 className="mb-1.5 font-serif text-2xl font-semibold text-white">
            {company}
          </h3>
          <div className="flex flex-col items-start pb-5">
            <h4 className="mb-0.5 font-serif text-2xl font-medium text-primary">
              {position}
            </h4>
            <span className="pb-[2px] text-sm text-white/70">
              {startDate} — {endDate}
            </span>
          </div>
          {Array.isArray(summary) ? (
            <ul className="list-none">
              {summary.map((log, logIndex) => (
                <li
                  key={logIndex}
                  className="relative mb-3 pl-8 text-base text-neutral before:absolute before:top-1 before:left-0 before:content-[url(/check.svg)]"
                >
                  {log}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-neutral">{summary}</p>
          )}
        </div>
      ))}
    </Section>
  );
}

