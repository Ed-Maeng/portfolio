import { Button } from "@/components/ui/button.js";

const ResumeButton = () => {
  return (
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      <Button>
        Resume
      </Button>
    </a>
  );
};

export default ResumeButton;