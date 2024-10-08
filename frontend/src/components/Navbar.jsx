import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/home"><img src={logo} alt="Airbnb Logo" /></a>
      </div>
      <div className="nav-links">
        <a href="/home">Experiences</a>
        <a href="/home">Online Experiences</a>
      </div>
      <div className="right-menu">
        <a href="/home">
          <i
            style={{
              fontSize: '24px',
              color: 'white',
              padding: '10px 15px',
              borderRadius: '50%',
              backgroundColor: '#ff385c',
            }}
            className="fa">&#xf007;</i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
