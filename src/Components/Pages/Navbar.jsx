import { useNavigate } from "react-router-dom";
import deja from "../../assets/deja.png";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCarrito, updateCantidad } from "../../store/carritoSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const carrito = useSelector((state) => state.carrito.items);
  const sidebarRef = useRef(null);
const dispatch = useDispatch();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const total = carrito.reduce((acc, item) => {
    return acc + item.precio * item.cantidad; 
  }, 0);

  const handleCantidadChange = (id, cantidad) => {
    const nuevaCantidad = Math.max(1, Number(cantidad)); 
    dispatch(updateCantidad({ id, cantidad: nuevaCantidad }));  
  };

  const handleEliminar = (id) => {
    dispatch(removeCarrito({ id })); 
  };

  return (
    <>
      <nav className="bg-black text-gray-800 p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center">
          <img src={deja} alt="DejaVu logo" className="w-32 h-auto" />

          <div className="flex items-center text-yellow-500 text-bold ml-4 mr-4">
            <button
              onClick={() => navigate("/")}
              className="p-2 text-yellow-500 text-bold rounded-full hover:bg-yellow-500 hover:text-black transition  mr-4"
            >
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
            <button onClick={() => navigate("/info")}>Cómo comprar?</button>
          </div>

          <button className="ml-4 text-yellow-500" onClick={toggleSidebar}>
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>

        <div
  ref={sidebarRef}
  className={`fixed top-0 right-1 h-full w-64 bg-black border-2 border-yellow-500 text-white transition-transform transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <button
    className="d-flex justify-items-end text-xl p-2 text-yellow-500 text-bold rounded-full hover:bg-yellow-500 hover:text-black transition"
    onClick={toggleSidebar}
  >
    X
  </button>
  <div className="p-4 flex-1">
  
    <div className="overflow-y-auto pr-1" style={{ maxHeight: '80vh' }}>
      {carrito.length === 0 ? (
          <p>Parece que no agregaste productos al carrito...</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {carrito.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-16 h-16 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-500">{item.nombre}</h3>
                    <p className="text-gray-600">Precio: ${item.precio}</p>
                    <div className="flex items-center">
                      <label htmlFor="" className="text-gray-600 mr-2">Cantidad:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad} 
                        onChange={(e) => handleCantidadChange(item.id, e.target.value)}
                        className="w-20 p-1 border rounded text-gray-500"
                      />
                    </div>
                  </div>
                  <button className="text-red-600" onClick={() => handleEliminar(item.id)}>X</button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Total: ${total}</h3> 
              <button className="mt-4 p-2 bg-blue-500 text-white rounded">
                Comprar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
</div>

      </nav>
    </>
  );
};

export default Navbar;
