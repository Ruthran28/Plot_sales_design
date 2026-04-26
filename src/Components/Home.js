import React, { useRef } from 'react'
import './Home.css';
import bg_image from './bg.webp';
import activities_image from './activities.png';
import parks_image from './parks.png';
import map_image from './map2.png';
import pic_image from './pic.png';
import room1 from './room1.png';
import room2 from './room2.png';
import room3 from './room3.png';
import location_map from './location.png'
import room4 from './room4.png';
import room5 from './room5.png';
const Home = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const galleryItems = [
    { id: 1, img: room1 , title: 'kitchen' },
    { id: 2, img: room2, title: 'Hall' },
    { id: 3, img: room3, title: 'bedroom' },
    {id:4,img:room4,title:'dinning room'},
    {id:5,img:room5,title:'bathroom'}
  ];
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
      >
          <div className="home-content">
              <h2>VGN Merits</h2>
              <h1>Build your Future</h1>
              <h1>ON Elevated Ground</h1>
              <p>DTCP & RERA Approved Premium Plots at Gerugambakkam</p>
          </div>
      </div>
      <div className="sidebar-form">
        <div className="sidebar-section">
          <div className="sidebar-button">
            <button className="schedule-visit">Schedule Site Visit</button>
            <button className="call-button">
              <span className="phone-link">+91 9561333962</span>
            </button>
          </div>
          <h2 className="sidebar-heading">Pre-Register here for Best Offers</h2>
          <form className="sidebar-form-element">
            <input type="text" placeholder="Enter Your Name here..." />
            <input type="email" placeholder="Enter Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <label className="sidebar-checkbox">
              <input type="checkbox"/>
              <span>I authorise VGN Meridian Heights & its representatives to contact me with updates and notifications via Email/ SMS/ WhatsApp/ Call. This will override DND/NDNC.</span>
            </label>
            <button type="submit" className="pre-register">Pre-Register Now</button>
          </form>
          <div className="sidebar-footer">
            <button className="request-callback">Request Call Back</button>
          </div>
        </div>
      </div>
      <section className="home-details">
        <div className="details-copy">
          <h2>Where Life Finds Its True Coordinates</h2>
        </div>
    <div className="details-right">
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" />
            <div className="contact-row">
              <input type="email" name="email" placeholder="Enter mail" />
              <input type="tel" name="phone" placeholder="Enter phone number" />
            </div>
            <label className="contact-checkbox">
              <input type="checkbox" name="consent" />
              <span>I agree to be contacted by Infinium Home Inquiry</span>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <section className="home-bg-section">
        <div className="bg-content">
          <div className="bg-image">
            <img src={bg_image} alt="VGN Meridian Heights" />
          </div>
          <div className="bg-text">
            <h1>A Blossom of Beauty & Comfort</h1>
            <p>VGN Meridian Heights is a premium plotted community at Gerugambakkam, thoughtfully planned on elevated land for better ventilation, cleaner air, and longterm value. Backed by 83+ years of VGN expertise, this development offers the freedom to build your home while ensuring strong appreciation and peace of mind.</p>
            <button className="brochure-button">
              <span className="icon-circle">
                <i className="fas fa-cloud-download-alt"></i>
              </span>
              Receive A Digital Copy Of Our Brochure
            </button>
          </div>
        </div>
      </section>
      <section className="why-vgn-section">
        <div className="why-vgn-content">
          <h1>Why VGN Meridian Hight</h1>
          <ul>
            <li>Elevated Plots at Gerugambakkam</li>
            <li>341 premium plots ranging from 750 to 1300 sq. ft. spread across a sprawling 13.18-acre layout</li>
            <li>50+ World - Class Amenities</li>
            <li>38,000 sq. ft. park with multifunctional amenities</li>
            <li>100% Vaastu-Compliant Plots with Individual Ramps</li>
            <li>Experience elite living at Club De’ Meridian, our expansive 11,000 sq. ft. premium clubhouse peaceful, low-density neighbourhood ideal for villa living</li>
            <li>15 mins from Chennai International Airport & well-connected to Metro</li>
            <li>10 mins from Porur and Pallavaram</li>
          </ul>
        </div>
      </section>
      <section className="amenities-section">
        <div className="amenities-content">
          <h1>50+ AMENITIES</h1>
          <img src={activities_image} alt="50+ Amenities" />
        </div>
      </section>
      <section className="outdoor-amenities-section">
        <div className="outdoor-amenities-content">
          <h1>Outdoor Lifestyle Amenities</h1>
          <img src={parks_image} alt="Outdoor Lifestyle Amenities" />
        </div>
      </section>
      <section className="lotus-amenities-section">
        <div className="lotus-amenities-content">
          <h1>Amenities of Infinium Lotus Meadow</h1>
          <img src={map_image} alt="Amenities of Infinium Lotus Meadow Map" />
        </div>
      </section>
      <section className="heights-logo-section">
        <div className="heights-logo-content">
          <img src={pic_image} alt="Logo Part" className="pic-logo" />
          <h1 className="heights-text">Heights</h1>
        </div>
        <div className="heights-logo-content">
          <h1 className="heights-text">With Life</h1>
          <div className="price-details">
            <p>Price Details</p>
            <p>Plot sizes: 750 – 1300 sq.ft</p>
            <p>Pricing: ₹XX Lakhs* onwards</p>
          </div>
        </div>
      </section>
      <section className="project-gallery-section">
        <div className="project-gallery-content">
          <h1>Project Gallery</h1>
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={slideLeft}>
              &#10094;
            </button>
            <div className="carousel-track" ref={sliderRef}>
              {galleryItems.map((item) => (
                <div className="carousel-card" key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <div className="card-info">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next-btn" onClick={slideRight}>
              &#10095;
            </button>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-content">
          <h1>FAQ</h1>
          <div className="faq-list">
            <details className="faq-item">
              <summary>What kind of plots is Available ?</summary>
              <div className="faq-answer">
                <p>VGN Meridian Heights offers well-planned residential plots ranging from 750 to 1300 sq.ft. Each plot is thoughtfully laid out, 100% Vaastu-compliant, and designed to support airy, well-lit homes with ample space for future growth.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Where is Plot located ?</summary>
              <div className="faq-answer">
                <p>Plot situated at Gerugambakkam, a rapidly developing suburban corridor of Chennai. The project enjoys close proximity to major educational institutions, healthcare facilities, entertainment hubs, and key IT corridors of the city.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>What amenities can residents enjoy?</summary>
              <div className="faq-answer">
                <p>The community is designed to offer a vibrant lifestyle with over 50 world-class amenities. These include a 38,000 sq.ft. park, a premium 11,000 sq.ft. clubhouse (Club De’ Meridian), sports facilities, fitness centres, landscaped gardens, and dedicated children’s play areas.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>How big is the community?</summary>
              <div className="faq-answer">
                <p>VGN Meridian Heights is spread across a 13.18-acre layout featuring 341 premium plots, offering a balance of spaciousness and community living.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary>Why choose Prince Blossom?</summary>
              <div className="faq-answer">
                <p>VGN Meridian Heights is developed by VGN Developers, a trusted name in the Chennai real estate market with an 83-year legacy. Known for its commitment to quality and customer satisfaction, VGN ensures that every project delivers lasting value, architectural excellence, and a premium living experience.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="location-section">
        <div className="location-content">
          <h1>Location & Connectivity</h1>
          <div className="location-details">
            <div className="location-map-container">
              <img src={location_map} alt="Location Map" className="location-map" />
            </div>
            <div className="nearby-locations-box">
              <h2 className="nearby-heading">Nearby Location</h2>
              <div className="location-list-wrapper">
                <h3>Schools & Universities</h3>
                <ul className="location-list">
                  <li>10 Mins from Karunya University</li>
                  <li>12 Mins from Kathir Enginerring college S</li>
                  <li>RAK's Pallikkodam</li>
                  <li>Chandrakanthi Public School </li>
                  <li>PSG College of Arts & Science</li>
                  <li>Rathinam International Public School</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="home-details">
        <div className="details-copy">
          <h2>Enquire Today & Experience The Art of Refined Living</h2>
          <p>Contact us for site visits, brochures, floor plans, or to book your unit.</p>
        </div>
    <div className="details-right">
          <form className="contact-form">
            <input type="text" name="name" placeholder="Name" />
            <div className="contact-row">
              <input type="email" name="email" placeholder="Enter mail" />
              <input type="tel" name="phone" placeholder="Enter phone number" />
            </div>
            <label className="contact-checkbox">
              <input type="checkbox" name="consent" />
              <span>I agree to be contacted by Infinium Home Inquiry</span>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Home