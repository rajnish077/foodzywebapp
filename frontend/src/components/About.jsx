import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">About Us</h1>
            <p>When soo hungry think of Foodzy</p>
          </div>
          <p className="mid">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            optio mollitia facilis voluptatum vel voluptas magni illo
            voluptatibus magnam sed provident ea cumque atque nulla natus
            maiores officia rem adipisci?
          </p>
          <Link to={"/"}>
            Explore our menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
