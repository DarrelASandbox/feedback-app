import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95' }}>
      <div className='container'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h2>Feedback UI</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
