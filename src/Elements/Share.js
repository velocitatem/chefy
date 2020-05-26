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
            <td>#${book[r].tags[t]}</td>
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

            <div class="row">
                <div class="col-sm-7">
                    <img alt="Picture" id="foodIMG" src="${book[r].img}"></img>    
                </div>
                <div class="col-sm-5">
                    <h1>${book[r].name}</h1>
                    <tags>
                    ${tags}
                    </tags> <br>
                    <b>ingredients:</b><ul> ${ingreds}</ul>
                    <button class="btn btn-outline-dark" data-toggle="modal" data-target="#metricModal">Metric</button>
                    <button class="btn btn-outline-dark" id='imperial' data-toggle="modal" data-target="#imperialModal">Imperial</button>     
                </div>

            </div>
            <h3>
        </h3>


       
    <p id="aboutFood">

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

function convertMet() {    
    let amt = parseInt($("#valMet").val())
    let unt = $("#unitMet").val()
    console.log("converting", amt, unt)
    let res
    switch(unt){
    case "gram/s":
        if (amt<=450) {
            res = amt*0.035
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "oz")
            $("#impRes").html(`${res} oz`)
        }
        else if(amt>=450) {
            res = amt*0.0022
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "lb")
            $("#impRes").html(`${res} lb`)

        }
        break;
    case "mililiter/s":
        if(amt<=5){ 
            res = 0.2*amt
            res = String(res)
            res = res.substring(0, 3)
            console.log(res, "tsp")
            $("#impRes").html(`${res} tsp`)
        }
        else if(amt<=15 && amt>5) {
            res = 0.05631201*amt
            res = String(res)
            res = res.substring(0, 3)
            console.log(res, "tbsp")
            $("#impRes").html(`${res} tbsp`)
        }
        else if(amt>=60){
            res = 0.003519503*amt
            res = String(res)
            res = res.substring(0, 3)
            console.log(res, "tbsp")
            $("#impRes").html(`${res} cup/s`)
        }
        break;
    case "centimeter/s":
        if(amt<30){
            res = amt*0.3937008
            res = String(res)
            res = res.substring(0, 3)
            console.log(res, "tbsp")
            $("#impRes").html(`${res} in`)
        }
        else if(amt>=30){
            res = amt*0.03280839895
            res = String(res)
            res = res.substring(0, 3)
            console.log(res, "tbsp")
            $("#impRes").html(`${res} feet`)
        }
        break;
}
}
function convertImp() {
    let amt = $("#valImp").val()
    let unt = $("#unitImp").val()
    console.log("converting", amt, unt)
    let res
    switch(unt){
        case "cup/s":
            res = amt*284.131
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "ml/grams")
            $("#metRes").html(`${res} ml/grams`)
            break;
        case "tbsp":
            res = amt*17.7582
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "ml/grams")
            $("#metRes").html(`${res} ml/grams`)
            break;
        case "tsp":
            res = amt*5.91939
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "ml/grams")
            $("#metRes").html(`${res} ml/grams`)
            break;
        case "inches":
            res = amt*2.54
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "cm")
            $("#metRes").html(`${res} cm`)
        case "ounce/s":
            res = amt*28.34952
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "grams/ml")
            $("#metRes").html(`${res} grams/ml`)
            break;
        case 'pound/s':
            res = amt*453.5924
            res = String(res)
            res = res.substring(0, 4)
            console.log(res, "grams/ml")
            $("#metRes").html(`${res} grams/ml`)
            break;
    }
}
function Sharing() {
  return (

<div className="App">
        <div class="container">


        <div class="modal" id="metricModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title">Metric => Imperial</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">


        <div class="input-group"> 
        <input type="number" id="valMet" class="form-control"></input>

  <div class="input-group-append">
  <select id="unitMet" class="form-control">
            <option class="form-control">---</option>
            <option class="form-control">gram/s</option>
            <option class="form-control">mililiter/s</option>
            <option class="form-control">centimeter/s</option>
        </select>
        <button class="form-control" onClick={convertMet}>Convert</button>
  </div>
</div>
        <br></br>
        =
        <span id="impRes"></span>

        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>

  <div class="modal" id="imperialModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title">Imperial => Metric</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">

        <div class="input-group">
        <input pattern="^[0-9/]*$" id="valImp" class="form-control"></input>

  <div class="input-group-append">
  <select id="unitImp" class="form-control">
            <option>---</option>
            <option>cup/s</option>
            <option>tsp</option>
            <option>tbsp</option>
            <option>inches</option>
            <option>ounce/s</option>
            <option>pound/s</option>
        </select> 
        <button onClick={convertImp} class="form-control">Convert</button>
  </div>
</div>


        <br></br>
        =
        <span id="metRes"></span>

        </div>
        
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>


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
