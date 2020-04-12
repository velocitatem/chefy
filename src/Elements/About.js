import React from 'react';
import $ from  'jquery';
function Header() {
  return (

<div className="App">
    <div class="container">
    <div class="row">

    </div>
    <div class="row">
        <div class="col-sm-5">
        <img id="foodAltIMG" alt="chef" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcliparts.co%2Fcliparts%2FyTk%2FA6d%2FyTkA6dG7c.gif&f=1&nofb=1"></img>
        </div>
        <div class="col-sm-7">
        <h1>
            <center>
            About 
            </center>
        </h1>
            <p>
            Why make this? well that is a good question. The reason why I made this is that in the future I can see a bunch of people(my self included) not wanting to spend too much time preparing a meal or thinking about food, thus I thought what it would be great to know what you can make just from the current contents of you're fridge and more
            </p> <br></br>
            <a>V2.3</a>
        </div>
    </div>
    </div>
    </div>
 
  );
}

export default Header;
