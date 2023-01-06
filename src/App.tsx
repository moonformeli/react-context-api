import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
