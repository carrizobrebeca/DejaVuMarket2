import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Navbar from "../Pages/Navbar";
import hamburguesa from "../../assets/hamburguesabase.png";
import Card from "../Pages/Card";

import axios from "axios";

const Home = () => {
  const [allProductos, setAllProducts] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [milanesa, setMilanesa] = useState([]);
  const [guarnicion, setGuarnicion] = useState([]);
  const [empanadas, setEmpanadas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProd = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`http://localhost:3001/products`);
        const products = response.data;
        setAllProducts(products);

        const productsPizza = products.filter(
          (producto) => producto.categoria === "Pizza"
        );
        setPizza(productsPizza);

        const productsMilanesa = products.filter(
          (producto) => producto.categoria === "Milanesa"
        );
        setMilanesa(productsMilanesa);

        const productsGuarnicion = products.filter(
          (producto) => producto.categoria === "Guarnicion"
        );
        setGuarnicion(productsGuarnicion);

        const empanadasFilter = products.filter(
          (producto) => producto.categoria === "Empanadas"
        );
        setEmpanadas(empanadasFilter);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProd();
  }, []);
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    <>
      <Navbar />
      <section
        className="home-section relative text-white"
        style={{
          backgroundImage: "",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "50vh",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          margin: "0%",
        }}
      >
        <div className="flex flex-col items-center w-100vh">
          <div className="flex flex-col md:flex-row justify-around items-center w-full">
            {/* Primer texto - Lado Izquierdo */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-yellow-500 text-bold font-custom w-full md:w-1/2"
              style={{ textAlign: "left" }}
            >
              <h1 className="text-orange-500">Bienvenido</h1>
              <h3>Hacé tu pedio</h3>
              <h3>Realizá el pago</h3>
              <h3>Retirá en nuestro local</h3>
            </motion.h1>

            {/* Segundo texto - Lado Derecho */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-lg shadow-lg text-lg md:text-xl lg:text-2xl mb-8 text-black w-full md:w-1/2"
              style={{ textAlign: "right" }}
            >
              <img src={hamburguesa} alt="" className="animate-pulse" />
            </motion.p>
          </div>
          <button className="bg-transparent text-yellow-500 text-bold py-2 px-6 rounded text-lg font-bold animate-bounce">
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
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollAnimation}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center mt-8"
          ></motion.div>
        </div>
      </section>

      <motion.section
  className="benefits bg-gray-100 text-center py-16 px-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollAnimation}
  custom={1.8}
>
  <h2 className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold p-0 m-0 mb-4">
    Realizá tu pedido
  </h2>

  {/* Contenedor de las cards */}
  <div className="flex flex-wrap w-full max-w-5xl mx-auto item">
    {pizza.length > 0 ? (
      pizza.map((products) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={products.id}>
          <Card item={products} />
        </div>
      ))
    ) : (
      <p>Parece que no hay productos...</p>
    )}
  </div>

  <div className="flex flex-wrap w-full max-w-5xl mx-auto">
    {milanesa.length > 0 ? (
      milanesa.map((products) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={products.id}>
          <Card item={products} />
        </div>
      ))
    ) : (
      <p>Parece que no hay productos...</p>
    )}
  </div>

  <div className="flex flex-wrap w-full max-w-5xl mx-auto">
    {guarnicion.length > 0 ? (
      guarnicion.map((products) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={products.id}>
          <Card item={products} />
        </div>
      ))
    ) : (
      <p>Parece que no hay productos...</p>
    )}
  </div>

  <div className="flex justify-center items-center space-x-4 flex-nowrap">
    <h3 className="bg-yellow-400 font-bold text-gray-500 p-2 rounded">
      Empanadas al Horno. Precio: $900 x unidad | $5500 1/2 Docena
    </h3>
  </div>

  <div className="flex flex-wrap w-full max-w-5xl mx-auto">
    {empanadas.length > 0 ? (
      empanadas.map((products) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={products.id}>
          <Card item={products} />
        </div>
      ))
    ) : (
      <p>Parece que no hay productos...</p>
    )}
  </div>
</motion.section>

      
      <div></div>
      <motion.section
        className="benefits bg-black text-center py-16 pb-4 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={1.8}
      >
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 text-yellow-500 text-bold">
            Creado con{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-6 h-6 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>{" "}
            <a href="" className="hover:text-orange-500">
              {" "}
              Rebeca Carrizo Bourlot
            </a>
          </h6>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
