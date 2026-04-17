import { Link, useLocation } from "react-router-dom";

const RouteButtons = () => {
  const location = useLocation();

  const links = [
    { path: "/", name: "Home" },
    { path: "/experience", name: "Experience" },
  ];

  return (
    <div className="space-y-1">
      {links.map((link, index) => {
        const isActive = location.pathname === link.path;

        return (
          <Link
            key={index}
            to={link.path}
            className={`block cursor-pointer py-1.5 px-2 rounded-md text-sm transition-colors duration-200
              ${
                isActive
                  ? "bg-gray-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default RouteButtons;