import {
  FaLinkedin, FaGithub
} from 'react-icons/fa'

const SocialButtons = () => {

  const socialLinks = [
    {
      icon: <FaLinkedin/>,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/edward-maeng/"
    },
    {
      icon: <FaGithub/>,
      title: "GitHub",
      link: "https://github.com/Ed-Maeng"
    }
  ]

  return (
    <div
      className="space-x-2 py-5"
    >
      <span
        className="text-sm"
      >
        Follow
      </span>
      <div>
        {
          socialLinks.map((socialLink, index) => {
            return (
              <a
                className={
                  `flex items-center justify-start gap-2 cursor-pointer py-1.5 hover:text-white rounded-md text-sm ` +
                  `text-gray-400 `
                }
                href={socialLink.link}
                key={index}
                target={"_blank"}
              >
              <span>
                {socialLink.icon}
              </span>
                <span>
                {socialLink.title}
              </span>
              </a>
            )
          })
        }
      </div>
    </div>
  );
};

export default SocialButtons;
