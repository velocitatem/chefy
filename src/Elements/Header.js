import React from 'react';
import $ from  'jquery';
function print() {
  window.print()
}
function Header() {
  return (
//navbar-dark bg-dark    <button class="nav-link" id="printButton" value = "Print page" onClick = {print}>Print Page</button>
<>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark " id="navbarM">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ChefyNavItems" aria-controls="ChefyNavItems" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse justify-content-md-center" id="ChefyNavItems">

        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="navbar-brand" id="navH" href="/#home">Chefy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/select#select" id="navI"><b>Make me a dish</b></a>            
          </li>              
          <li class="nav-item">
            <a class="nav-link" href="/book#cb" id="navI">Cookbook</a>            
          </li>    
          <li class="nav-item">
            <a class="nav-link" href="/contribute#cont" id="navI">Contribute</a>            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about" id="navI">About</a>            
          </li>          
          <li class="nav-item"> 

          </li>
        </ul>
        </div>

      </nav>
    </>
 
  );
}

export default Header;
