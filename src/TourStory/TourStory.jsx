import './tourStory.css';
const TourStory = () => {
  return (
    <div className="mt-4">
      <h3 className='text-center text-blue-600 text-4xl'>My Projects</h3>
      <div className="container">
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">JourneyJive</h1>
              <p className="card-content">
              My Project Name is JourneyJive. It is a Tourist Guide projects for people with 6 popular packages such like as JiveDiscover, JiveVoyages, JiveDestiny, JiveOdyssey, JiveWanderlust, JiveHorizons etc.
              </p>
              <div className="flex gap-3">
              <a href='https://peoplepro-af1ed.web.app' target= 'blank'  className="see-more">Live Website</a>
              <a href='https://github.com/AsadFahimTEC/b8a12-client-side' target= 'blank'  className="see-more2">View Code</a>
              </div>
            </div>
            <div className="date-box">
              <span className="month">Project</span>
              <span className="date">01</span>
            </div>
          </div>
        </div>

        <div className="parent card2">
          <div className="card22">
            <div className="content-box">
              <h1 className="card-title">BookStore</h1>
              <p className="card-content">
              My Project Name is BookStore. It is a book services such like as Book Recommendation Service, Literary Events Calendar, Book Club Subscription, Bookstore Loyalty Program, etc.
              </p>
             <div className='flex gap-3'>
             <a href='https://654cd7a74cf70141250f52fc--cosmic-crisp-16b882.netlify.app' target= 'blank'  className="see-more">Live Website</a>
              <a href='https://github.com/AsadFahimTEC/b8a11-client-side' target= 'blank'  className="see-more3">View Code</a>
             </div>
            </div>
            <div className="date-box">
              <span className="month">Project</span>
              <span className="date">02</span>
            </div>
          </div>
        </div>

        <div className="parent card3">
          <div className="card33">
            <div className="content-box">
              <h1 className="card-title">Drinko</h1>
              <p className="card-content">
              My Project Name is Drinko. It is a food and beverage projects for oeople with 6 brands category such like as Coca-Cola, McDonald's, Starbucks, PepsiCo, Nestlé, Kellogg's, etc.In this project at first it has a navbar.
              </p>
              <div className='flex gap-3'>
              <a href='https://brand-shop-e0506.web.app' target= 'blank' className="see-more">Live Website</a>
              <a href='https://github.com/AsadFahimTEC/b8a10-brandshop-client-side' target= 'blank'  className="see-more4">View Code</a>
              </div>
            </div>
            <div className="date-box">
              <span className="month">Project</span>
              <span className="date">03</span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default TourStory;
