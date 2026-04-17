import { Typewriter } from "react-simple-typewriter";
import ContactButton from "@/components/Common/ContactButton.js";
import ResumeButton from "@/components/Common/ResumeButton.tsx";
import ContainerTitle from "@/components/Common/ContainerTitle.js";

const skillGroups = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["Python", "Java", "Scala", "C#", "C++", "Ruby"],
  },
  {
    title: "Data & Infra",
    icon: "⚙️",
    skills: ["Spark", "Kafka", "Redis", "SQL", "NoSQL"],
  },
  {
    title: "Cloud & Platform",
    icon: "☁️",
    skills: ["AWS", "Azure", "Kubernetes", "Docker"],
  },
  {
    title: "Tools",
    icon: "✨",
    skills: ["Git", "Azure DevOps", "Jenkins", "Terraform"],
  }
];

const HomePage = () => {
  return (
    <div className="space-y-8">
      <ContainerTitle title="Hello, I'm Edward" />

      <h2 className="text-3xl font-medium">
        I love to{" "}
        <span className="text-gray-500">
          <Typewriter
            words={["Code", "Design", "Build", "Innovate"]}
            cursor
          />
        </span>
      </h2>

      <div className="text-md tracking-wider font-light space-y-3 md:space-y-5">
        <p>
          👋 Hi, I'm Edward — a Software Engineer focused on ML infrastructure and 
          large-scale data systems, building high-throughput platforms at massive scale.
        </p>

        <p>
          🌟 I enjoy turning complex problems into reliable, production-ready systems.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <ContactButton />
        <ResumeButton />
      </div>

      <div className="space-y-4 pt-2">
        <h3 className="text-lg font-medium text-white">Core Skills</h3>

        <div className="grid gap-3 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-800 bg-[#111111] p-4 transition-all duration-200 hover:border-gray-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">{group.icon}</span>
                <h4 className="text-sm font-medium text-white">{group.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full border border-gray-700 bg-black px-3 py-1 text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;