import pic from './pic.jpeg';
import img from './node.png';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Exercise 2</h1>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>React</h2>
        </header>    
        <center>
        <img src={pic} alt="logo"/>
        </center>
        <div class="content">
            <p> React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</p>
            <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='button'>Learn React</button>
        </a>
        </footer>
        <br></br>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>Node js</h2>
        </header>    
        <center>
        <img src={img} alt="logo"/>
        </center>
        <div class="content">
            <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine</p>
        <footer>
        
        <a
          className="App-link"
          href="https://nodejs.org/en/about/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='button'>Learn Node</button>
        </a>
        </footer>
        </div>
    </article>
            
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;
