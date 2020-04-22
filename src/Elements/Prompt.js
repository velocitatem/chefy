/*
 * https://www.yummly.com
 */
import React from 'react';
import $ from  'jquery';
// import data from '../Data/rcp.json'

var allResources = [ ]
var data



function dtW() {
    let rcp = data[0]
    for (var t in rcp) {
        let Cresources = rcp[t].resources
        for (var i in Cresources) {
            //console.log(Cresources[i])
            if (allResources.includes(Cresources[i])) {} else {
                allResources.push(Cresources[i])
            }
            //
        }
    }
//console.log(allResources)

    for (var item in allResources) {
        let code = `
    <div class="itemCBC"><input id="${allResources[item]}-item" name="item" class="itemCB" value="${allResources[item]}" type="checkbox"></input> <label id='lbit' for="${allResources[item]}-item"> ${allResources[item]}</label></div>
    `
        console.log()
        $("#opts").append(code)
    }
    var btn = ``
    $("#btn").append(btn)


}

$(document).ready(function(){
    //api fetch
    fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
    .then((response) => {
        return response.json();
    })
    .then((dat) => {
        //console.log(dat)
        data = dat
        //console.log(data)
        dtW()
    })
    .catch(err => {
        console.log(err);
    })

})


var selected = []

var userItems = []
function iHave(item) {    
    userItems += item + ","
}

function evaluate() {
   
    console.log(selected)
}

// filter 

$(document).ready(function(){
    $("#atHome").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#opts div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


function Prompt() {
  return (
    <div>
        <div class="container">
            <div class="wrapper">
            <div class="row">
                <div class="col-sm-4">
                <h2 id="select">Select All The Ingredients You Have At Home</h2>
                We apologise for any bugs       
                </div>
                    <div class="col-sm-8">
                    <center>
                    <input id="atHome" placeholder="Search here.."></input>
                    </center>
                    <div id="whatUserHas">  
                        <form id="options" action="/browse/">
                            <div id="opts">

                            </div>
                            <div id="btn">
                                <input type="submit" onClick={evaluate} id="createBTN" value="Create!"></input>
                            </div>
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
