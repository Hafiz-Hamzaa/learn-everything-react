import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Child from './components/Child';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;

