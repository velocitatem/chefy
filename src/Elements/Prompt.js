/*
 * https://www.yummly.com
 */
import React from 'react';
import $ from  'jquery';
import data from '../Data/rcp.json'
var allResources = [ ]
$(document).ready(function(){
    let rcp = data[0]
for (var t in rcp) {
    let Cresources = rcp[t].resources
    for (var i in Cresources) {
        console.log(Cresources[i])
        if(allResources.includes(Cresources[i])) {}
        else {
            allResources.push(Cresources[i])
        }
        //
    }
}
console.log(allResources)

for (var item in allResources) {
    let code = `
    <input id="item" name="item" value="${allResources[item]}" type="checkbox"></input> <label>${allResources[item]}</label> <br>
    `
    console.log()
    $("#options").append(code)
}
var btn = `<input type="submit" onClick={evaluate} value="Find!"></input>`
$("#options").append(btn)


})


var selected = []

var userItems = []
function iHave(item) {    
    userItems += item + ","
}

function evaluate() {
   
    console.log(selected)
}

function Prompt() {
  return (
    <div>
        <div class="container">
            <div class="wrapper">
            <div class="row">
                <div class="col-sm-4">
                <h2>Select What you have</h2>
                </div>
                    <div class="col-sm-8">
                    <div id="whatUserHas">  
                        <form id="options" action="/browse/">

                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Prompt;
