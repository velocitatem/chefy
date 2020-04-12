import React from 'react';
import $ from  'jquery';

function Header() {
  return (

<div className="App">
      <header className="App-header">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="" id="navbarTogglerDemo01">      
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <a class="navbar-brand" href="/">Chefy</a>
          <li class="nav-item">
            <a class="nav-link" href="/select" id="navI"><b>Make me a dish</b></a>            
          </li>              
          <li class="nav-item">
            <a class="nav-link" href="/book" id="navI">Cookbook</a>            
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="/about" id="navI">About</a>            
          </li>          
        </ul>
      </div>        
      </nav>
      </header>
    </div>
 
  );
}

export default Header;
