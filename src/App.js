import React from 'react';
import Routes from '../src/routing/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => (
  <>
    <ToastContainer />
    <Routes></Routes>
  </>
  );

export default App;
