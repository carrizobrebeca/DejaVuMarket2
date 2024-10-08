import Navbar from "../Pages/Navbar";

const Info = () => {
  return (
    <>
      <Navbar />
      <section
        className="hero-section relative text-white"
        style={{
          backgroundImage: "",
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
          margin: "0%",
        }}
      >
        <div className="how-it-works bg-gray-100 text-center py-10 px-4">
          <div className="relative">
    
            <div className="step-container mb-6">
              <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                Paso 1: Agrega al carrito
              </h3>
              <p className="text-md text-gray-700">
                Agrega los productos que desees al carrito
              </p>
            </div>

            <div className="step-container mb-6">
              <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                Paso 2: Ve al carrito
              </h3>
              <p className="text-md text-gray-700">
                En la parte superior derecha aparece el icono de tu carrito, haz
                clic sobre él
              </p>
            </div>

            <div className="step-container mb-6">
              <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">Paso 3: Comprar</h3>
              <p className="text-md text-gray-700">
                Presiona el botón comprar y luego en el botón de Mercado Pago.
                Listo. Ya puedes retirar tu compra en nuestro local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section con efecto de aparición al hacer scroll */}
    </>
  );
};

export default Info;
