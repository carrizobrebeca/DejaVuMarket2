import { Link, useNavigate } from "react-router-dom";

import deja from "../../assets/deja.png";

const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-black text-gray-800 p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={deja}
            alt="DejaVu logo"
            className="w-32 h-auto"
          />                                                  
        </Link>
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500 text-bold mr-4">
            <button onClick={() => navigate("/info")}>Cómo comprar?</button>
          </div>
          <div className="flex items-center">
            <span className="mr-4">Bienvenido,</span>
            {/* <img src={usuarioSvg} alt="User" className="w-8 h-8 rounded-full mr-4" /> */}
            <button onClick={() => navigate("/")} className="p-2 text-yellow-500 text-bold rounded-full hover:bg-yellow-500 hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
