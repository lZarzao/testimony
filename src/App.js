import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
          name='Shawn Wang'
          country='Singapore'
          img='shawn.png'
          job='Software Engineer'
          company='Amazon'
          testimony={`It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.`}
        />
      </div>
    </div>
  );
}

export default App;
