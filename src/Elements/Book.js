import React from 'react';
import $ from  'jquery';
var rcp
var dataLength = 0
function report(abt) {
    const headers = new Headers()
headers.append("Content-Type", "application/json")

const options = {
  method: "POST",
  headers,
  mode: "cors",
}

fetch("https://f2f9c9ced21c02785bbd4ee05edf8c79.m.pipedream.net/"+abt, options)
}
fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data)
    rcp = data
    for (var dt in rcp[0]) {
        dataLength++
    }
    var filterTags = []
var output
var book = rcp[0]
let found = 0
let notFound = 0 
var rcps = 0
console.log(rcp)
function ERRnotFound() {
notFound+=1
console.log(notFound)


if (notFound == dataLength){
$("#items").html(`
<center>
<h2>Sorry... We couldn't find anything yet 🙁</h2>
</center>
`)
}
else {

}
}
function match(steps, allSteps, book, r, step) {
    found+=1
    for (var s in steps) {
        allSteps += `
        <h3># ${s}: </h3> ${steps[s]}
        `
    }    
    let tags= ``
    for(var t in book[r].tags) {
        tags += `
        <td>${book[r].tags[t]}</td>
        `
        if(filterTags.includes(book[r].tags[t])) {

        }
        else {
            filterTags.push(book[r].tags[t])
        }
    }        
    $("#items").append(`
    <p>    
    <div class="row">
    <div class="col-sm-12">

        <center>
        <h3>
        ${book[r].name}
        </h3>
        <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    
        </center>

    <p id="aboutFood">
    <b>Tags:</b><tags>
    ${tags}
    </tags> <br>
    <b>ingredients:</b> ${book[r].steps.ingredients} <br>
    <a href="/share/?item=${book[r].name}">Share/Enlarge/Print</a> <br>
    ${allSteps}
    </p>
    </div>
    <hr>
    </div>
    </p>
    `)
}

$(document).ready(function(){
    console.clear()
    var url = new URLSearchParams(window.location.search);
    output = url.getAll('item');
    report(output)

    for (var r in book) {
        let resources = book[r].resources
        let ui = 0
        let missing = 0
        let missingI= []
        for (var t in output) {
            if (resources.includes(output[t])) {
                ui+=1
            }    
        }
        //console.log
        let steps = book[r].steps.bakingSteps
        let allSteps = ``
        
        
        if(ui == resources.length) {
            match(steps, allSteps, book, r)
        }
        else if (ui >= (resources.length*0.7)) {
            for (var s in steps) {
                allSteps += `
                <h3># ${s}: </h3> ${steps[s]}
                `
            }
            let tags= ``
            for(var t in book[r].tags) {
                tags += `
                <td>${book[r].tags[t]}</td>
                `
                if(filterTags.includes(book[r].tags[t])) {

                }
                else {
                    filterTags.push(book[r].tags[t])
                }
            }
            $("#items").append(`
            <p>
            <div class="row">
            <div class="col-sm-12">
            <center>
            <h3>
            ${book[r].name}
            </h3>
            -<u>You might not have all the ingredients! ${missingI}</u></b> <br>
            <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    

            </center>
            <p id="aboutFood">
            <b>Tags:</b><table>
            <tr>
            ${tags}
            </tr>
            </table> <br>
            <b>ingredients:</b> ${book[r].steps.ingredients} <br>
            <a href="/share/?item=${book[r].name}">Share/Enlarge/Print</a> <br>
            ${allSteps}
            </p>
            </div>
            <hr>
            </div>
            </p>
            `)
        }
        else {                        
            ERRnotFound()
        }

        
 
    }
    console.log(filterTags)
    for (var f in filterTags) {
        $("#filterO").append(`
        <option value="${filterTags[f]}">${filterTags[f]}</options>
        `)
    }

})
})
.catch(err => {
    console.log(err);    
})


$(document).ready(function(){
    $("#filter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#items div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

function Book() {
  return (
    <div class="wrapper">
      <div class="container" >
        
        <div class="row">
            <div id="filterW">
            <div class="panel panel-default">
                <div class="panel-body"><input id="filter" list="filterO" placeholder="select category.."></input>  </div>
            </div>                  
                <datalist id="filterO">                
                </datalist> 
            </div>
        </div>
        <div id="items">
        </div>
        </div>
    </div>
  );
}
/*
"1": {
        "name": "",
        "resources": [""],
        "tags": [],
        "img": "",
        "steps": {
            "ingredients": [""],
            "bakingSteps": {
                "step1" : "",
            }
        }
    }
*/
export default Book;
