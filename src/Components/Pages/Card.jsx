import React, { useState } from "react";

const Card = ({ item }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleToggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };
  const toggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };
  return (
    <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <a
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img class="object-cover" src={item.imagen} alt="product image" />
      </a>
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-xl tracking-tight text-slate-900">{item.nombre}</h5>

        <div class="mt-2 mb-5 flex items-center justify-center">
          <p>
            <span class="text-3xl font-bold text-slate-900">
              ${item.precio}
            </span>
          </p>
        </div>

        {/* <a href="#" class="flex items-center justify-center rounded-md bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Agregar</a
    > */}
    <div class="flex items-center justify-center">
        <button onClick={handleToggleInfo}
          // onClick={() => handleViewDetails(item)}
          class="rounded-md bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500 mr-6"
        >
          Detalle
        </button>
        <button 
          // onClick={() => handleViewDetails(item)}
          class="rounded-md bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow-500"
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
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
        </button>
    </div>
      
      </div>
      {showMoreInfo && (
              <div className="absolute inset-0 bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg z-10">
                
                <p>{item.descripcion}</p>
               
                <div className="flex justify-between mt-2 text-black">
                  <button
                    onClick={toggleMoreInfo}
                    className="hover:animate-ping"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>{" "}
                  <p>Ver menos</p>
                </div>
              </div>
            )}
    </div>
    
  );
};

export default Card;
