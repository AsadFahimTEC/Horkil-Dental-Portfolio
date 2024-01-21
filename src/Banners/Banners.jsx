const Banners = () => {
  return (
    <div>
      <div className="mt-4">
        <div className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:max-w-md mr-0 md:mr-8">
            <h1 className="text-2xl text-white md:text-4xl font-bold mb-4">
              Smile Confidently, Smile Beautifully
            </h1>
            <p className="text-red-500 hover:text-green-400">
              Welcome to Anika Dental Point, where we believe that a confident
              smile is the key to a beautiful life. Our commitment to your oral
              health goes beyond traditional dentistry, as we embark on a
              journey to transform your smile into a masterpiece of confidence
              and beauty.
            </p>
            <button
                  type="button"
                  className="btn btn-outline border-0 border-[#d926a9] hover:bg-[#d926a9] hover:border-[#d926a9] border-b-4 text-white hover:text-white"
                >
                  Get Started
                </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co/dfRf3qs/IMG-20240105-160708920.jpgs"
              alt="Banner Image"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto max-h-64 lg:max-h-80 xl:max-h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
