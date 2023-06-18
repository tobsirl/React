import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/47269281"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1 className="name">John Doe</h1>
      <p className="bio">I am a web developer.</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="JavaScript" />
      <Skill name="React" />
      <Skill name="HTML" />
      <Skill name="CSS" />
    </ul>
  );
}

function Skill(props) {
  return <li className="skill">{props.name}</li>;
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
