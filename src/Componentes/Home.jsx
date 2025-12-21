import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzasList, setPizzasList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzasList(data));
  }, []);

  return (
    <div className="main-content">
      <Header img="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"></Header>
      
      <div className="container mt-4">
        <div className="row justify-content-center">
          {pizzasList.map((pizza) => (
            <div key={pizza.id} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;