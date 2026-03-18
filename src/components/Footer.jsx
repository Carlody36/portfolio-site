import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { Youtube } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark ? "bg-black border-blue-900/40" : "bg-white border-blue-100"
      } border-t transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3
            className={`text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent`}
          >
           © 2025 Karl William Lee. Built with curiosity and code.
          </h3>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
