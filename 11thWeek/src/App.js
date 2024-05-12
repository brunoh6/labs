import React from 'react';
import pizza from './images/pizza.png';
import PizzaCard from './components/PizzaCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <PizzaCard title="Peperoni" text='Pizza condita con pomodoro, mozzarella e peperoni al forno' img={pizza} price='da 3 euro'/>
    </div>
  );
}

export default App;