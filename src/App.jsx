function App() {
  return (
    <div className="main-card">

      <img
        className="image-box"
        src="/images/svg/Rectangle Copy.svg"
        alt="Rectangle image"
        width="302"
        height="302"
      />

      <h1 className="card-title">Equilibrium #3429</h1>

      <p className="card-desc">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="card-main">
        <p>
          <img src="/images/svg/Combined Shape.svg" width="11" height="18" />
          <span>0.041 ETH</span>
        </p>

        <p>
          <img src="/images/svg/Clock.svg" width="16" height="16" />
          <span>3 days left</span>
        </p>
      </div>

      <div className="footer-line">
        <span></span>
      </div>

      <div className="card-author">
        <img src="/images/svg/Oval.svg" width="33" height="33" />
        <span>Creation of</span>
        <span>Jules Wyvern</span>
      </div>

    </div>
  );
}

export default App;
