import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import './index.css';

function App() {
  return (
      <div className="container">
          <h2 className="main_title">What do you need?</h2>
          <div className="main_block">
              <div className="blocks">
                  <img src="./images/f3.png" alt="pic"/>
                      <h3>First block</h3>
                      <p>Here goes text and more text and more text</p>
              </div>
              <div className="blocks">
                  <img className="imagen" src="./images/f4.png" alt="pic"/>
                      <h3>Second block</h3>
                      <p>Here goes text and more text and more text</p>
              </div>
              <div className="blocks">
                  <img src="./images/f5.png" alt="pic"/>
                      <h3>Third block</h3>
                      <p>Here goes text and more text and more text</p>
              </div>
          </div>
      </div>
  );
}

export default App;
