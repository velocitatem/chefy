import React from 'react';
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
            Why make this? well that is a good question. The reason why I made this is that in the future I can see a bunch of people(my self included) not wanting to spend too much time preparing a meal or thinking about food, thus I thought that it would be great to know what you can make just from the current contents of you're fridge and more          
            </p> <br></br>
            Email: <a href="mailto:app.chefy@gmail.com"><b>
              app.chefy@gmail.com
            </b></a> <br></br>
            Instagram: <a href="https://www.instagram.com/app.chefy"><b>
             @app.chefy
            </b></a> <br></br>
            Twitter: <a href="https://twitter.com/Chefy06440137"><b>
            @AppChefy
            </b></a> <br></br>
            <a><b>
              Creator: Daniel Rosel
            </b></a> <br></br>
            recipe sources:
    <a href="https://raw.githubusercontent.com/danalves24com/danalves24com.github.io/master/data/cookbook-api/src.json"> sources</a> <br></br>
            <a><b>
              <a href="https://danalves24com.github.io/data/cookbook-api/api.json">REST API</a>
            </b></a> <br></br>            
        </div>
    </div>
    </div>
    </div>
 
  );
}

export default Header;
