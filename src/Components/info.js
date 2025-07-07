import React from "react";
import "../style/Info.css";
import image1 from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/image2.png";
import image3 from "../Assets/Images/image3.png";
import image6 from "../Assets/Images/image6.png";
import image7 from "../Assets/Images/image7.png";
import chart from "../Assets/Images/chart.jpeg";
import AnimatedSection from "../Components/AnimatedSection";

const Info = () => {
  const data = [
    {
      text: "Global hunger surpasses the combined death tolls of AIDS, malaria, and terrorism, largely due to unequal access to food.",
      img: image1,
    },
    {
      text: "One-third of all food produced — around 1.3 billion tons — is lost or wasted every year, never reaching those in need. (Source: FAO)",
      img: image3,
    },
    {
      text: "An estimated 700–800 million people — nearly one-tenth of the global population — go to bed without food each night.",
      img: image2,
    },
    {
      text: "In 2019, 17% of food at the consumer level—including homes, restaurants, and stores—was wasted, according to the UN Environment Programme.",
      img: image6,
    },
  ];

  return (
    <section className="info-section" id="Info">
      <h2 className="info-title">The Mission Behind FoodSanta</h2>

      <div className="info-grid-container">
        {/* Grid 1: Chart and intro */}

        <div className="grid-item grid-item-1">
          <div className="info-chart-container">
            <img src={chart} alt="Food waste chart" className="info-chart" />
          </div>
          <p className="info-intro">
            Every day, millions go to bed hungry — not due to food scarcity, but
            because of unequal access and poor distribution. Shockingly, over
            1.3 billion tons of food is wasted globally each year, nearly
            one-third of all food produced. In India, food worth ₹92,000 crore
            is wasted annually, while 190 million people remain undernourished.
          </p>
        </div>

        {/* Cards */}
        {data.map((item, idx) => (
          <AnimatedSection delay={0.2 + idx * 0.15} key={idx}>
            <div className={`grid-item info-card grid-item-${3 + idx}`}>
              <img src={item.img} alt="info" className="card-image" />
              <p className="card-text">{item.text}</p>
            </div>
          </AnimatedSection>
        ))}

        {/* Conclusion */}
        <AnimatedSection delay={0.8}>
          <div className="grid-item grid-item-8">
            <p className="info-conclusion-text">
              The issue isn’t lack of food — it’s uneven access. FoodSanta
              connects surplus meals with those in need, turning waste into
              nourishment. Every day, good food is thrown away while others go
              hungry. We're here to change that. In support of the UN’s Goal 2:
              Zero Hunger, FoodSanta makes it easy for anyone to share excess
              food with dignity and purpose. Together, we’re not just fighting
              hunger — we’re building a culture of compassion, one shared meal
              at a time.
            </p>
            <div className="info-conclusion-img-container">
              <img
                src={image7}
                alt="Conclusion"
                className="info-conclusion-image"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Info;
