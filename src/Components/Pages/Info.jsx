import Navbar from "../Pages/Navbar";

const Info = () => {

  return (
    <>
 <Navbar/>
 <section
        className="hero-section relative text-white"
        style={{
          backgroundImage: "",
          backgroundColor: "black",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '50vh',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 10%',
          margin: '0%',
        }}
      >
         <div className="how-it-works bg-gray-100 text-center py-16 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">¿Cómo Funciona?</h2>
        <div className="relative">
          {/* Paso 1 */}
          <div
          
            className="step-container mb-12"
          >
            <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Paso 1: Afíliate</h3>
            <p className="text-md text-gray-700">
              Los comercios locales se registran en nuestra plataforma, suben sus productos y los ponen a disposición de un mercado global.
            </p>
          </div>

          {/* Paso 2 */}
          <div
            
            className="step-container mb-12"
          >
            <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Paso 2: Compra</h3>
            <p className="text-md text-gray-700">
              Los clientes internacionales exploran una amplia gama de productos y realizan sus pedidos de manera fácil y segura.
            </p>
          </div>

          {/* Paso 3 */}
          <div
        
            className="step-container mb-12"
          >
            <div className="step-number bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Paso 3: Recibe</h3>
            <p className="text-md text-gray-700">
              Los productos adquiridos son enviados directamente a tu hogar, permitiéndote disfrutar de lo mejor que el mundo tiene para ofrecer.
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
