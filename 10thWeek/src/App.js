import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import ToDo from './components/ToDo';
import './index.css';

function App() {
  return (
      <div className="container">
          <h2 className="main_title">What do you need?</h2>
          <div className="main_block">
              <ToDo title="First Block" img={f3} text='Here goes text and more and more text'/>
              <ToDo title="Second Block" img={f4} text='Here goes text and more and more text'/>
              <ToDo title="Third Block" img={f5} text='Here goes text and more and more text'/>
          </div>
      </div>
  );
}

export default App;
