import {useState} from 'react';
import reactLogo from './assets/react.svg';
import {GlitchDiv} from './GlitchDiv';
import './Root.css';

function Root() {
  const [count, setCount] = useState(0);

  return (
    <div className="Root">
      <GlitchDiv />
      <h1>Welcome to Shiki's Journey</h1>
    </div>
  );
}

export default Root;
