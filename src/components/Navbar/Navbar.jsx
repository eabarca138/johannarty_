import './Navbar.css'
import beatport from '../../assets/img/beatport.svg';
import resident from '../../assets/img/resident.svg';
import soundcloud from '../../assets/img/soundcloud.svg';
import instagram from '../../assets/img/instagram.svg';
import youtube from '../../assets/img/youtube.svg';
import facebook from '../../assets/img/facebook.svg';

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="logo">
        Johann Arty
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a target="_blank" href="https://www.beatport.com/artist/johann-arty/801145" rel="noopener noreferrer"><img className='social-media-icon' src={beatport} alt="beatport" /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.residentadvisor.net/dj/johannarty" rel="noopener noreferrer"><img className='social-media-icon' src={resident} alt="resident advisor" /></a>
        </li>
        <li>
          <a target="_blank" href="https://soundcloud.com/johannarty" rel="noopener noreferrer"><img className='social-media-icon' src={soundcloud} alt="soundcloud" /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/johannarty/" rel="noopener noreferrer"><img className='social-media-icon' src={instagram} alt="instagram" /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/channel/UCG6yXhM5JTUUxeByPEb8u5g?view_as=subscriber" rel="noopener noreferrer"><img className='social-media-icon' src={youtube} alt="youtube" /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/JohannArtyOfficial/" rel="noopener noreferrer"><img className='social-media-icon' src={facebook} alt="facebook" /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar