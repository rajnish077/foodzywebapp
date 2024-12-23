import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">Most Popular Dishes</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ab
            adipisci a. Ullam blanditiis fugit accusamus quasi recusandae? Sed
            excepturi quae earum laborum cupiditate nesciunt dolorem natus
            beatae recusandae neque.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return <div className="card" key={element.id}>
                <img src={element.image} alt={element.title}/>
                <h3>{element.title}</h3>
                <button>{element.category}</button>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
