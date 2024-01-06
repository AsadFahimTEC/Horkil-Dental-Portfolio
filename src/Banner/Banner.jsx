const Banner = () => {
  return (
    <div className="mt-4">
      <h1 className="text-center text-4xl text-blue-600 hover:text-green-500 font-bold mb-4">Our Gallery</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Replace the placeholder image URLs with your actual image URLs */}
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/wCzSbj2/pexels-photo-4269942.webp"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/FH6XnvH/pexels-photo-3779700.webp"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/c3VHK9Z/pexels-photo-3779692.jpg"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/HBDfDQQ/pexels-photo-4269690.webp"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/s3cghk7/pexels-photo-4687906.webp"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/7z5Vnd5/pexels-photo-4269683.jpg"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/RpkKyFP/pexels-photo-6627533.webp"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
          <div className="hover:bg-gray-200 transition duration-300 transform hover:scale-105">
            <img
              src="https://i.ibb.co/dPB54jv/pexels-photo-6627422.jpg"
              alt=""
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
