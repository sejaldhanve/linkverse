import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Content.css";
import myImage from "./assets/hero-bg.jpg";

const reviews = [
  {
    name: "John Doe",
    logo: "data:image/png;base64,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", // Replace with actual logo URL
    message:
      "This platform has revolutionized the way I connect with opportunities!",
  },
  {
    name: "Jane Smith",
    logo: "data:image/jpeg;base64,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", // Replace with actual logo URL
    message: "Amazing experience! It’s easy to use and highly effective.",
  },
  {
    name: "Michael Johnson",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3m972e8FEvBi7ETC03avlJcZDg8nT9dWLSw&s", // Replace with actual logo URL
    message:
      "Highly recommend this platform to anyone looking to grow their career.",
  },
  {
    name: "Charlie Chaplin",
    logo: "data:image/png;base64,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", // Replace with actual logo URL
    message:
      "Highly recommend this platform to anyone looking to grow their career.",
  },
];

export default function Content() {
  return (
    <>
      <div className="content overflow-x-hidden">
        {/* Main Content */}
        <div className="row ">
          <div className="col1">
            <p className="tagline">Empowering Students, Connecting Careers</p>
            <p className="desc">
              Our app bridges the gap between talented students and top
              recruiters, creating an ecosystem where opportunities meet
              potential. It streamlines the recruitment process by providing a
              platform where students can showcase their skills, achievements,
              and aspirations while recruiters can easily find qualified
              candidates.
            </p>
            <button className="loginButton">Login</button>
          </div>
          <div className="col2">
            <img src={myImage} alt="Hero Background" />
          </div>
        </div>

        <div class="slider-container">
          <div class="slider">
            <div class="box">
              <div class="image-container">
              <center>
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/66bee357cf48b97789cbc270/Where-Will-Artificial-Intelligence-Take-Us-In-The-Future-/960x0.jpg?format=jpg&width=960"
                  alt=""
                />
              </center>                
              </div>
              <center>
                <h2>Artificial Intelligence</h2>
              </center>
              <p>
                AI is revolutionizing industries by automating tasks and
                enhancing decision-making. Learning AI opens up career
                opportunities in fields like healthcare, finance, and tech.
              </p>
            </div>

            <div class="box">

              <div class="image-container">
              <center>
                <img
                  src="https://www.cloudcredential.org/wp-content/uploads/2021/07/iot.jpg"
                  alt=""
                />
              </center>                
              
              </div>
              <center>
                <h2>Embedded System</h2>
              </center>
              <p>
                IoT (Internet of Things) is revolutionizing how devices connect
                and interact, enabling smarter homes, industries, and cities.
                Learning IoT opens doors to cutting-edge innovation and
                impactful careers in a rapidly growing, tech-driven world.
              </p>
            </div>
            <div class="box">
              <div class="image-container">
              <center>
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQFQlRQ-oMdAgg/article-cover_image-shrink_720_1280/0/1701428273349?e=2147483647&v=beta&t=XZd4xTJR-jvGW-EYH2wqrno41XvUtuXYlnPrW192qDg"
                  alt=""
                />
              </center>                
              
              </div>

              <center>
                <h2>Embedded System</h2>
              </center>
              <p>
                Embedded systems are the backbone of modern technology, powering
                devices from smartphones to IoT. Learning embedded systems
                offers exciting career opportunities and equips you to innovate
                in a world increasingly reliant on smart, efficient hardware
                solutions.
              </p>
            </div>
            <div class="box">
              
              <div class="image-container">
              <center>
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/635f79fbf214917bd2876e03/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                  alt=""
                />
              </center>                
              </div>
              <center>
                <h2>Data Science and Analytics</h2>
              </center>
              <p>
                Data Science is the field of using scientific methods,
                algorithms, and tools to extract meaningful insights from
                structured and unstructured data. Analytics focuses on
                interpreting data patterns and trends to make informed decisions
                and solve specific business problems. Both aim to turn data into
                actionable knowledge.
              </p>
            </div>
            <div class="box">
              <div class="image-container">
              <center>
                <img
                  src="https://www.cm-alliance.com/hubfs/60776739_l%20%281%29.jpg"
                  alt=""
                />
              </center>                
              </div>
              <center>
                <h2>Cybersecurity</h2>
              </center>
              <p>
              Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It involves implementing technologies, processes, and policies to ensure the confidentiality, integrity, and availability of information.
              </p>
            </div>
          </div>
        </div>

        
        <div className="about_contact">
          <div className="vision">
            <h2 className="visionHeading">Our Vision</h2>
            <p className="visionContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, tempora temporibus dolor vel placeat hic, libero
              impedit repellat consectetur, excepturi consequuntur. Nisi,
              accusantium id laboriosam molestiae laborum dolorum libero ab!{" "}
            </p>
          </div>
          <div className="mission">
            <h2 className="missionHeading">Our Mission</h2>
            <p className="missionContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, tempora temporibus dolor vel placeat hic, libero
              impedit repellat consectetur, excepturi consequuntur. Nisi,
              accusantium id laboriosam molestiae laborum dolorum libero ab!{" "}
            </p>
          </div>
        </div>

        <center>
          <div className="contact">
            <p>Helping you is what we do best. Contact us today!</p>
            <button>Contact Us!</button>
          </div>
        </center>

        <div className="review-section">
          <h2>What People Say About Us</h2>
          <div className="review-row">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <img
                  src={review.logo}
                  alt={`${review.name}'s logo`}
                  className="review-logo"
                />
                <h3 className="review-name">{review.name}</h3>
                <p className="review-message">{review.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
