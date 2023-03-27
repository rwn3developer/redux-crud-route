import logo from './logo.svg';
import './App.css';
import Crud from './Crud';
import View from './View';
import Edit from './Edit';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Crud />}></Route>
              <Route path="view" element={<View />} />
              <Route path="view/edit" element={<Edit />} />
          </Routes>
      </BrowserRouter>
       
    </>
  );
}

export default App;
