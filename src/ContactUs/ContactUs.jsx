
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ContactUs.css';

const ContactUs = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your actual values
      await emailjs.sendForm('service_39dz78i', 'template_gl3794m', e.target, 'GoLWkqT_l28QGncbm');

      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // You can add additional logic here if needed

    } catch (error) {
      console.error('Error sending email:', error);

      toast.error('Error sending message. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="mt-4">
      <div className="contact-container">
        <div className="form-container">
          <h2 className="text-center text-2xl">Contact Us</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button className='button' type="submit">Send Message</button>
          </form>
        </div>
        <div className="info-container">
          <h2 className="text-xl">Contact Information</h2>
          <p>
            <strong>Phone:</strong> +880 179 083 3542
          </p>
          <p>
            <strong>Email:</strong> fah485434@gmail.com
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
