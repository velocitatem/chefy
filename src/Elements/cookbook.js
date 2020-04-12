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
let tagsARR = []
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
    let Alltags = ``
    
    for (var t in data[r].tags) {
        Alltags += `<td>#${data[r].tags[t]}  </td>`
        if(tagsARR.includes(data[r].tags[t])) {

        }
        else {
            tagsARR.push(data[r].tags[t])
        }    
        
    }
    console.log(tagsARR)

    let itemCode = `
    <div id="bookitem">    
    <center>🍽<h2>${data[r].name}</h2></center>
    <p><b>Tags: </b>${Alltags}</p> <br>
    <b>Ingredients: </b> 
    <ul>
    ${ing}
    </ul>
    ${steps}
    <hr id="bookSep">
    </div>
    `
    $("#Bookitems").append(itemCode)



}
for (var f in tagsARR) {
    console.log(tagsARR[f])
    $("#tagsF").append(`
    <option value="${tagsARR[f]}">${tagsARR[f]}</options>
    `)
}}
$(document).ready(function(){
    $("#bookfilter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#Bookitems div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function Header() {
  return (

<div className="App">
    <div class="container">
    <div id="rcp">
        <h1>Cookbook</h1>
        <input type="text" id="bookfilter" placeholder="What are you looking for..." list="tagsF"></input>
        <datalist id="tagsF">

        </datalist>        
        <div id="Bookitems">

        </div>
    </div>
    </div>
    </div>
 
  );
}

export default Header;
