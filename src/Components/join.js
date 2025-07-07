import React from "react";
import "../style/Join.css";
import { Link } from "react-router-dom";
import AnimatedSection from "../Components/AnimatedSection";

const Join = () => {
  return (
    <section className="join-section" id="Join">
      <AnimatedSection delay={0.1}>
        <h1 className="join-title">Join Our Initiative</h1>
      </AnimatedSection>

      <div className="join-content-wrapper">
        <p className="join-para">
          It’s heartbreaking that so many in our own communities struggle daily
          with hunger. But here’s the powerful truth: Your generosity can change
          lives. By sharing surplus food, you’re not just reducing waste —
          you’re offering warmth, nourishment, and hope to someone in need.
          Every contribution, no matter how small, is a meaningful act of
          kindness that sparks positive change. Let’s come together to ensure no
          one is left hungry. Become a Santa 🎅🏻 — and turn your extra food into
          a life-saving gift.
        </p>

        <div className="join-card-wrapper">
          <div className="join-card">
            <img
              src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/santa_9qj-P7sFA.png?updatedAt=1679852335521"
              alt="Santa Claus"
              className="join-card-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/300x200/e0e0e0/333333?text=Image+Error";
              }}
            />
            <div className="join-card-body">
              <Link to="/services" className="join-button">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
