import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="images">
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt="logo" />
          <img className="menu" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png" alt="menu"/>
        </div>
        <div className="info">
          <h1>Say hello to<br/>ReactJS</h1>
          <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="icons">
        <div>
          <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon1" />
          <h2>Declarative</h2>
          <p>React makes it<br/>painless to create<br/>interactive UIs.</p>
        </div>
        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon2" />
          <h2>Components</h2>
          <p>Build encapsulated<br/>components that<br/>manage their state.</p>
        </div>
        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon3" />
          <h2>Single-Way</h2>
          <p>A set of immutable<br/>values are passed to<br/>the component's.</p>
        </div>
        <div>
        <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4" />
          <h2>JSX</h2>
          <p>Statically-typed,<br/>designed to run on<br/>modern browsers</p>
        </div>
      </div>
    </div>
  );
}
export default App;
