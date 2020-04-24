import React from 'react';
import $ from  'jquery';

function addResource() {
    $("#resources").append("<li>"+$("#rsrc").val()+"</li>")
}
function send() {    
    const headers = new Headers()
    headers.append("Content-Type", "application/json")


const options = {
  method: "POST",
  headers,
  mode: "cors",
}

fetch("https://enmlfbmjyaluo.x.pipedream.net/?name="+$("#RCPname").val()+"&resources="+$("#ingred").val()+"&tags="+$("#tags").val()+"&steps="+$("#steps").val())
alert("thank you for contributing")
window.location.href='/'
}

function Header() {
  return (

<div className="App">
    <div class="container">
        <h1 id="cont">Contribute your recipe</h1>
    <div id="contribute">
        <input type="text" id="RCPname" placeholder="Name of the recipe"></input> <br></br>
        <h3>Ingredients:</h3>        
            <textarea  id="ingred" class="uin">

            </textarea>
            <h3>Steps:</h3>        
            <textarea id="steps" class="uin">

            </textarea>
            <h3>Tags:</h3>        
            <textarea id="tags" class="uin">

            </textarea>
            <button onClick={send}>SEND</button> <br></br><br></br>
        </div>
    </div>
    </div>

 
  );
}

export default Header;
