import React from 'react';
import { GlobalStyles } from './componentes/GlobalStyles';
import Header from './componentes/Header';
import InputSection from './componentes/InputSection';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Header />
      <InputSection />
    </div>
  );
}

export default App;
