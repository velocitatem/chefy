import React from 'react';
import $ from  'jquery';
import rcp from '../Data/rcp.json'
var output
var book = rcp[0]
function course() {
    let windowCode = `
    
    `
}
$(document).ready(function(){
    console.clear()
    var url = new URLSearchParams(window.location.search);
    output = url.getAll('item');
    console.log(output)
    console.log(rcp)

    for (var r in book) {
        let resources = book[r].resources
        console.log(resources)
        let ui = 0
        for (var t in output) {
            if (resources.includes(output[t])) {
                ui++
            }
        }
        let steps = book[r].steps.bakingSteps
        let allSteps = ``
        for (var s in steps) {
            console.log(steps[s])
            allSteps += `
            <h3># ${s}: </h3> ${steps[s]}
            `
        }
        if(ui == resources.length) {
            $("#items").append(`
            <div class="row">
            <div class="col-sm-5">
            <h3>
            ${book[r].name}
            </h3>
            </div>
            <div class="col-sm-7">
            <p id="aboutFood">
            <b>ingredients:</b> ${book[r].steps.ingredients} <br>
            Steps: ${allSteps}
            </p>
            </div>
            </div>
            <hr>
            `)
        }
        else if (ui >= (resources.length*0.8 )) {
            $("#items").append(`
            <div class="row">
            <div class="col-sm-5">
            <h3>
            ${book[r].name}
            </h3>
            -<u>You might not have all the ingredients!</u></b>

            </div>
            <div class="col-sm-7">
            <p id="aboutFood">
            <b>ingredients:</b> ${book[r].steps.ingredients} <br>
            Steps: ${allSteps}
            </p>
            </div>
            </div>
            <hr>
            `)
        }
    }
})

function Book() {
  return (
    <div class="wrapper">
      <div class="container" id="items">
        
        <div class="row">
        FILTER        
        </div>



        </div>
    </div>
  );
}

export default Book;
