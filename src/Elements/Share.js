import React from 'react';
import $ from 'jquery';
var item = ""
var api = ""
var dataLength = 0
var filterTags = []
var result = ""

function print() {
    $("#printButton").hide()
    window.print()
    $("#printButton").show()
}

function filter(data) {
    data = data.toLowerCase()
    api = api[0]
    console.log(data)
    var errCT = 0
    for (var r = 0; r < dataLength; r++) {
        let steps = api[r].steps.bakingSteps
        let allSteps = ``
        let name = api[r].name
        console.log(api[r].name)
        name = name.toLowerCase()
        data = decodeURI(data)
        console.log(data)
        if (data == name) {
            console.warn(api[r])
            result = api[r]
            let book = api
            for (var s in steps) {
                allSteps += `
            <h3># ${s}: </h3> ${steps[s]}
            `
            }
            let tags = ``
            for (var t in book[r].tags) {
                tags += `
            <td>${book[r].tags[t]}</td>
            `
                if (filterTags.includes(book[r].tags[t])) {

                } else {
                    filterTags.push(book[r].tags[t])
                }
            }
            var ingreds = ``

            for (var n in book[r].steps.ingredients) {
                ingreds += `<li>${book[r].steps.ingredients[n]}</li>`
            }
            let resultCode = `
        <center>
        <h3>
        ${book[r].name}
        </h3>
        <img alt="Picture" id="foodIMG" src="${book[r].img}"></img>    

        </center>

    <p id="aboutFood">
    <b>Tags:</b><tags>
    ${tags}
    </tags> <br>
    <b>ingredients:</b><ul> ${ingreds}</ul>
    ${allSteps}
    </p>
        `
            console.log(resultCode)
            $("#results").html(resultCode)
        } else {
            errCT += 1
            if (errCT == dataLength) {
                $("#results").html("<h1>Sorry, we couldnt find that recipe in our book ☹</h1>")
            }
        }
    }
}

function getItem() {
    var url = new URLSearchParams(window.location.search);
    var output = url.get('item');
    //console.log(output)
    filter(output)
}
$(document).ready(function () {
    fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //console.log(data)
            api = data
            for (var dt in data[0]) {
                dataLength++
            }
            getItem()
        })
        .catch(err => {
            console.log(err);
        })
})
function Sharing() {
  return (

<div className="App">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p id="results">

                    </p>
                </div>
            </div>
        </div>
    </div>
 
  );
}

export default Sharing;
