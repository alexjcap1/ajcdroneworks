export default function Services() {
    return (
      <main 
        className="min-h-screen py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/servicesbackground.jpg')" }} // ✅ Add a background image
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-12 pt-20 font-orbitron tracking-wide">
            Our Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-orbitron">
            AJC DroneWorks provides professional drone photography and videography services tailored to your needs.
          </p>
  
          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-700 font-orbitron">Real Estate Photography</h2>
              <p className="text-gray-200 mt-2 font-orbitron">
                High-quality aerial photos and videos to showcase properties with stunning visuals.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-700 font-orbitron">Commercial Projects</h2>
              <p className="text-gray-200 mt-2 font-orbitron">
                Perfect for business promotions, construction monitoring, and advertising campaigns.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h2 className="text-2xl font-semibold text-blue-700 font-orbitron">Custom Aerial Footage</h2>
              <p className="text-gray-200 mt-2 font-orbitron">
                Need something unique? We provide fully customized drone videography solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
  