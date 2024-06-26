const Hero = () => {
  return (
    <div className="hero-background">
      <div className="hero-bg-overlay" />
      <div className="hero-content">
        <h1 className="hero-heading">
          Welcome to <span className="nowrap">G Automotive</span>
        </h1>
        <p className="hero-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="hero-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Hero;
