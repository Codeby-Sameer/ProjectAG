const Devocation = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-90"></div>

            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative z-10 text-center py-20 px-6 md:px-12">
              <div className="text-6xl mb-6">🕉️</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Devocation
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white mb-4 font-light max-w-3xl mx-auto leading-relaxed">
                Find peace and purpose through travel that touches the soul
              </p>
              <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Embark on spiritual journeys to sacred destinations. Experience divine serenity
                at ancient temples, holy rivers, and mystical mountains that inspire inner transformation.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="text-3xl mb-2">🛕</div>
                  <p className="font-semibold">Temple Tours</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="text-3xl mb-2">⛰️</div>
                  <p className="font-semibold">Mountain Retreats</p>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-white">
                  <div className="text-3xl mb-2">🕉️</div>
                  <p className="font-semibold">Sacred Pilgrimages</p>
                </div>
              </div>

              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
                Explore Devocation Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devocation;
