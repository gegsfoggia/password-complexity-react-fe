import './App.css';
import { useState } from 'react';

const PasswordComplexityValues = {
  WEAK: 'weak',
  GOOD: 'good',
  EXCELLENT: 'excellent',
}

const App = () => {
  const [password, setPassword] = useState('');
  const [complexity, setCompletixity] = useState(PasswordComplexityValues.WEAK);

  const calculateComplexity = password => {
    if (password.length > 5) {
      setCompletixity(PasswordComplexityValues.EXCELLENT);
    } else if (password.length < 3) {
      setCompletixity(PasswordComplexityValues.WEAK);
    } else {
      setCompletixity(PasswordComplexityValues.GOOD);
    }
  }
 
  const handleChange = password => {
    setPassword(password);
    calculateComplexity(password);
  }

  const colorByComplexity = {
    [PasswordComplexityValues.WEAK]: ['#D10D39', '#CFD8DC', '#CFD8DC'],
    [PasswordComplexityValues.GOOD]: ['#FFC60B', '#FFC60B', '#CFD8DC'],
    [PasswordComplexityValues.EXCELLENT]: ['#468726', '#468726', '#468726'],
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Complejidad de Contraseña
        </p>
        <div className="container">
          <label>Contraseña</label>
          <input value={password} onChange={e => handleChange(e.target.value)}/>
        </div>
        <div className="level-container">
          <div className="level" style={{ backgroundColor: colorByComplexity[complexity][0] }}/>
          <div className="level" style={{ backgroundColor: colorByComplexity[complexity][1] }}/>
          <div className="level" style={{ backgroundColor: colorByComplexity[complexity][2] }}/>
        </div>
      </header>
    </div>
  );
}

export default App;
