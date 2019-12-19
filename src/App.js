import React from 'react';
import Routes from '../src/routing/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => (
  <Routes>
    <ToastContainer />
  </Routes>);

export default App;
