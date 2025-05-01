const Service = () => {
  return (
    <>
      <div className="bg-gray-100 m-1">
        <section className="bg-gray-100 py-16 px-5 md:px-10 lg:px-24">
          <div className="max-w-7xl mx-auto  flex flex-col lg:flex-row justify-between items-start gap-8">

            {/* Left Side: Title */}
            <div className="w-full lg:w-2/3">
              <p className="text-sm text-gray-500 font-semibold uppercase mb-2">
                Business Consulting
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A44] leading-tight">
                What services do we offer<br />for your business
              </h2>
            </div>

            {/* Right Side: Description */}
            <div className="w-full lg:w-1/3 text-gray-500 text-xs sm:text-base">
              <p>
                Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam turpis
                volutpat. Vitae aliquam malesuada varius felis….
              </p>
            </div>
          </div>
        </section>


        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto pb-24">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-3">
              <img src="../src/assets/marketing.png" alt="Business Strategy" className="h-16 w-auto md:h-20 md:w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Marketing Strategy</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-1">
              <img src="../src/assets/financial.png" alt="Business Strategy" className="h-16 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Financial management</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-1">
              <img src="../src/assets/business.png" alt="Business Strategy" className="h-16 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Business Strategy</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-3">
              <img src="../src/assets/sales.png" alt="Business Strategy" className="h-16 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Sales and Marketing</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-2">
              <img src="../src/assets/digital.png" alt="Business Strategy" className="h-16 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Digital Technology</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-2xl p-6 text-left transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="mb-4 flex justify-start px-4">
              <img src="../src/assets/human.png" alt="Business Strategy" className="h-16 w-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 px-7">Human Resources</h3>
            <p className="text-sm text-gray-600 mt-2 px-7">
              Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant
            </p>
            <button className="mt-4 px-5 py-2 mx-7 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm font-semibold my-5 cursor-pointer shadow-2xl-2xl">
              Details →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


export default Service
