import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { NavLink } from "react-router-dom";
// import logo from "../assets/logo5.png";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const dropdownAnimation = useSpring({
    opacity: isDropdownOpen ? 1 : 0,
    transform: `scale(${isDropdownOpen ? 1 : 0.8}) translateY(${
      isDropdownOpen ? 0 : -20
    }px)`,
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const downloadResume = () => {
    // Content for the text file
    const textContent = "MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based. Thus, if one knows JavaScript (and JSON), the backend, frontend, and database can be operated easily.";

    // Create a Blob with the text content
    const blob = new Blob([textContent], { type: "text/plain" });

    // Create a data URL from the Blob
    const dataUrl = URL.createObjectURL(blob);

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "resume.txt";

    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Me</NavLink>
      </li>
    </>
  );

  return (
    <div
      className="navbar text-white relative"
      style={{
        background: "#00000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "30vh",
        width: "full",
        // height: "full",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-white lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <animated.ul
            style={dropdownAnimation}
            className="menu font-avenir menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-600 rounded-box w-52"
          >
            {navLinks}
          </animated.ul>
        </div>
        <h6 className="normal-case text-white font-montserrat font-bold text-xl">
          <animated.div
            style={useSpring({
              opacity: isDropdownOpen ? 0 : 1,
              transform: `scale(${isDropdownOpen ? 0.8 : 1}) translateY(${
                isDropdownOpen ? -20 : 0
              }px)`,
            })}
          >
            <span className="text-red-500">Anika</span> Dental <span className="text-yellow-400">Point</span>
          </animated.div>
        </h6>
        {/* <div className="ml-4">
          <animated.img
            style={useSpring({
              transform: `scale(${isDropdownOpen ? 0.8 : 1})`,
              borderRadius: isDropdownOpen ? "50%" : "0%",
            })}
            className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded-full"
            src={logo}
            alt="logo"
          />
        </div> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-avenir menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default NavBar;
