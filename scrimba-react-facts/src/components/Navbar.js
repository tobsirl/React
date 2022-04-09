import logoSmall from '../images/react-icon-small.png';

export default function Navbar() {
  return (
    <nav>
      <img src={logoSmall} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
