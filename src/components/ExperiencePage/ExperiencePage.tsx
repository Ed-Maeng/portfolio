import ContainerTitle from "@/components/Common/ContainerTitle.js";

const experiences = [
  {
    period: "2024 — Present",
    role: "Software Engineer",
    company: "Microsoft",
    summary:
      "Building large-scale ML infrastructure and distributed data systems for AI, analytics, and real-time decision-making.",
    points: [
      "Designed and owned high-throughput telemetry and data platforms powering model training and evaluation workflows.",
      "Built resilient near-real-time pipelines with strong focus on scalability, observability, and data quality.",
      "Worked across ML, platform, and engineering teams to turn ambiguous problems into reliable production systems.",
    ],
    tech: ["Java", "Python", "C#", "Azure", "Spark", "Kafka", "Redis", "CI/CD"],
  },
  {
    period: "2022 — 2024",
    role: "Software Engineer",
    company: "VMware",
    summary:
      "Built core data infrastructure for large-scale cloud and cost analytics.",
    points: [
      "Developed and maintained production data pipelines processing billions of records per day.",
      "Worked on distributed systems with emphasis on scale, performance, and reliability.",
      "Supported analytics and business-critical data workflows used across cloud products.",
    ],
    tech: ["Java", "Python", "Ruby", "AWS", "Kafka", "Kubernetes", "CI/CD"],
  },
];

const ExperienceItem = ({ experience }) => {
  return (
    <div className="relative grid grid-cols-[90px_1fr] gap-4 md:grid-cols-[140px_1fr] md:gap-8">
      <div className="pt-1 text-xs md:text-sm text-gray-400">
        {experience.period}
      </div>

      <div className="relative pb-8">
        <div className="absolute left-[-23px] top-2 h-full w-px bg-gray-800 md:left-[-33px]" />
        <div className="absolute left-[-27px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-black md:left-[-37px]" />

        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5 md:p-6 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-semibold text-white">
              {experience.role}
            </h2>

            <p className="text-sm md:text-base text-gray-400">
              {experience.company}
            </p>

            <p className="text-sm md:text-[16px] leading-7 text-gray-300">
              {experience.summary}
            </p>
          </div>

          <ul className="mt-4 space-y-2 text-sm md:text-[16px] leading-7 text-gray-300">
            {experience.points.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {experience.tech.map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-gray-700 bg-black px-3 py-1 text-xs text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <ContainerTitle title={"Experience"} />

      <p className="max-w-2xl text-sm md:text-base leading-7 text-gray-400">
        My journey building large-scale distributed systems, ML infrastructure,
        and reliable production platforms.
      </p>

      <div className="space-y-2">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;