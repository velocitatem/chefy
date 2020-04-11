import React from 'react';
import $ from  'jquery';
import rcp from '../Data/rcp.json'
var output
var book = rcp[0]
$(document).ready(function(){
    console.clear()
    var url = new URLSearchParams(window.location.search);
    output = url.getAll('item');
    for (var r in book) {
        let resources = book[r].resources
        let ui = 0
        let missing = 0
        for (var t in output) {
            if (resources.includes(output[t])) {
                ui+=1
            }
            else if (resources.includes(output[t]) == false) {
                missing+=1
            }
        }
        let steps = book[r].steps.bakingSteps
        let allSteps = ``
        

        if(ui == resources.length) {
            for (var s in steps) {
                allSteps += `
                <h3># ${s}: </h3> ${steps[s]}
                `
            }            
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
            for (var s in steps) {
                allSteps += `
                <h3># ${s}: </h3> ${steps[s]}
                `
            }
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
        else if (missing >= ui ) {                        

        }
 
    }
})

$("#items").html(" ")


function Book() {
  return (
    <div class="wrapper">
      <div class="container" >
        
        <div class="row">
        FILTER        
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
        "steps": {
            "ingredients": [""],
            "bakingSteps": {
                "step1" : "",
            }
        }
    }
*/
export default Book;
