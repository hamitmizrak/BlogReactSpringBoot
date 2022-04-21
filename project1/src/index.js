import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Person from './components/Person'
import PersonList from './components/PersonList';


const root = ReactDOM.createRoot(document.getElementById('root'));
//eğer burada sayı yerine string gönderirsem hata alırım
// let sayi=623455;
let sayi=63256;
root.render(
 
  <React.StrictMode>
     <React.Fragment>
        <Nav title="logo" colorObject={sayi}  icon="fa-brands fa-html5"/>
        <Person/>
        <PersonList/>
    </React.Fragment>

  </React.StrictMode>
);

reportWebVitals();
