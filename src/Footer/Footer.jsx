import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center mt-6">
        <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <h6 className="normal-case text-white font-montserrat font-bold text-xl">
          <span className="text-red-500">Anika</span> Dental <span className="text-yellow-400">Point</span>
          </h6>
          <Link className="hover:text-red-600" to="/">
            Home
          </Link>
          <Link className="hover:text-red-600" to="/about">
            About Me
          </Link>
          <Link className="hover:text-red-600" to="/contact">
            Contact Me
          </Link>
        </nav>

        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com/horkil.alom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://m.me/horkil.alom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <p className="text-center text-green-100 font-bold">
          <span className="text-blue-300">Shivpur Charmatha,</span> <span className="text-red-500">Molamgari,</span> <span className="text-green-600"> Kalai, Joypurhat.</span>
        </p>
        <p className="text-center text-green-100 font-smedium">
          &copy; 2023 <span className="text-red-500">Anika</span> Dental <span className="text-yellow-400">Point</span> All rights reserved.
        </p>
        
      </footer>
    </div>
  );
};

export default Footer;
