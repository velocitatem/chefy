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
        if (tagsARR.includes(data[r].tags[t])) {

        } else {
            tagsARR.push(data[r].tags[t])
        }
    }
    console.log(tagsARR)

    let itemCode = `
    <div id="bookitem">    
    <div class="row">
    <div class="col-sm-5">
    <img alt="Picture not found" id="foodIMG" src="${data[r].img}"></img>    
    </div>
    <div class="col-sm-7">
    <h3>
    ${data[r].name}
    </h3>
    </div>        
    </div>
    <p><b>Tags: </b>${Alltags}</p>
    <a href="/share/?item=${data[r].name}">Share/Enlarge</a> <br>
    <b>Ingredients: </b> 
    <ul>
    ${ing}
    </ul>
    ${steps}
    </div>
    <hr>
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
        <h1 id="cb">Cookbook</h1>
        <p id="bookFC">
        <input type="text" id="bookfilter" placeholder="What are you looking for..." list="tagsF"></input>
        </p>
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
