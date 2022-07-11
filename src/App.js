import './App.css';
import Testimony from './components/Testimony';
import data from './services/data'

function App() {
  return (
    <main className='App'>
      <article className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony data={data} />
      </article>
    </main>
  );
}

export default App;
