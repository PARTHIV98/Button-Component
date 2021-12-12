
import './App.css';
import Buttons from './Buttons';

function App() {
  return (
    <div className="App">
      <Buttons/>
      <div className='container'>
        <div className='footer-credit'>
          <div className='icons-credit credit-block'>
              <p>Icons: https://react-icons.github.io/react-icons</p>
          </div>
          <div className='credit-block'><p>Created By <a href="https://devchallenges.io/portfolio/PARTHIV98" target="_blank">PARTHIV98</a> - devChallenges.io</p></div>
        </div>
      </div>
    </div>
  );
}

export default App;
