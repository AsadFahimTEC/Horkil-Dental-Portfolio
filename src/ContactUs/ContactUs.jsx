

import './ContactUs.css';

const ContactUs = () => {
 

  return (
    <div className="testimonials">
    <div className="testimonial-inner">
      <h1 className='text-4xl hover:text-yellow-300'>Patient Review</h1>
      <div className="border"></div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="testimonial">
            <img
              src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="rounded-full"
            />
            <div className="name text-red-500">Mosaddek Ali</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className='text-blue-500'>
            Anika Dental Point has been my go-to dental clinic for years. The staff is incredibly friendly, and Dr. Smith is an expert at what he does. The clinic is well-maintained, and they use the latest technology for treatments. I always feel comfortable and well taken care of during my visits.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="testimonial">
            <img
              src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="rounded-full"
            />
            <div className="name text-red-500">Sara Begum</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className='text-blue-500'>
            "I had a fantastic experience at Anika Dental Point. The team is professional, and they take the time to explain procedures thoroughly. The clinic is clean and inviting, and the atmosphere is calming. Dr. Horkil Alom is not only skilled but also genuinely cares about the well-being of his patients."
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="testimonial">
            <img
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="rounded-full"
            />
            <div className="name text-red-500">Aklima Khatun</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className='text-blue-500'>
            Anika Dental Point exceeded my expectations. The staff is efficient, and scheduling appointments is a breeze. Dr. Horkil Alom is attentive and made sure I understood every step of my treatment. The clinic's commitment to patient comfort is evident, making it a top choice for dental care in the area.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactUs;
