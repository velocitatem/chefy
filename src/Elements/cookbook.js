import React from 'react';
import $ from  'jquery';
fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
    proc(data)

})
.catch(err => {
    console.log(err);
})
function proc(data) {
data = data[0]
for(var r in data) {
    let ing = ``
    let steps = ``
    for(var n in data[r].steps.ingredients) {
        ing += `
        <li>
            ${data[r].steps.ingredients[n]}
        </li>
        `
    }
    for (var s in data[r].steps.bakingSteps) {
        steps+=`<h3># ${s}: </h3> ${data[r].steps.bakingSteps[s]}`
    }
    let itemCode = `
    <div>
    
    <center>🍽<h2>${data[r].name}</h2></center>
    <b>Tags: </b>${data[r].tags} <br>
    <b>Ingredients: </b> 
    <ul>
    ${ing}
    </ul>
    ${steps}
    <hr>
    </div>
    `
    $("#rcp").append(itemCode)
}
}
function Header() {
  return (

<div className="App">
    <div class="container">
    <div id="rcp">
        <h1>Cookbook</h1>
        <hr></hr>
    </div>
    </div>
    </div>
 
  );
}

export default Header;
