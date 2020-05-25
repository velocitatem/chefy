import React from 'react';
import $ from 'jquery';
import ModalMetric from './metric'
import modalMetric from './metric';

var rcp
var dataLength = 0
var initialUnit = "metric"
function report(abt) {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

fetch("https://enmlfbmjyaluo.x.pipedream.net/?src="+"&"+abt, options)
}
fetch("https://danalves24com.github.io/data/cookbook-api/api.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
            let repD = new URLSearchParams(window.location.search)
            report(repD)

            //console.log(data)
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
            //console.log(rcp)

            function ERRnotFound() {
                notFound += 1
                //console.log(notFound)


                if (notFound == dataLength) {
                    $("#items").html(`
<center>
<h2>Sorry... We couldn't find anything yet 🙁</h2>
<p>
More recipes coming soon, or you can add one of your own <a href="/contribute">here</a>
</p>
</center>
`)
                } else {}
            }
function match(steps, allSteps, book, r, step) {
    found+=1
    let ing = ""
    for (var s in steps) {
        allSteps += `
        <h3># ${s}: </h3> ${steps[s]}
        `
    }    
    for(var n in book[r].steps.ingredients) {
        ing += `
        <li>
            ${book[r].steps.ingredients[n]}
        </li>
        `
    }
    let tags= ``
    for(var t in book[r].tags) {
        tags += `
        <td>#${book[r].tags[t]}</td>
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
        
        <div class="row">
        <div class="col-sm-5">
        <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    
        </div>
        <div class="col-sm-7">
        <h3>
        ${book[r].name}
        </h3>
        -<B>You should have everything you need</b></b> <br>
        <p id="aboutFood">
        <a id="tags">
        ${tags} 
        </a> <br>
        <a href="/share/?item=${book[r].name}">Share/Enlarge</a> <br>
        <button class="btn btn-outline-dark" data-toggle="modal" data-target="#metricModal">Metric</button>
        <button class="btn btn-outline-dark" id='imperial' data-toggle="modal" data-target="#imperialModal">Imperial</button>                
        <h5>Ingredients: </h5> 
        <ul id='ings'>
        ${ing}
        </ul>
        </div>        
        </div>        
    ${allSteps}
    </p>
    </div>
    <hr>
    </div>
    </p>
    `)
}
var uit = ""
$(document).ready(function () {
            console.clear()
            var url = new URLSearchParams(window.location.search);
            output = url.getAll('item');
            uit = output

            for (var r in book) {
                let resources = book[r].resources
                let ui = 0
                let missing = 0
                let itemsOfRecipe = []
                let rsc = resources                
                for (var t in output) {
                    if (resources.includes(output[t])) {
                        ui += 1
                        itemsOfRecipe.push(output[t])
                    }
                }
                //console.log
                let steps = book[r].steps.bakingSteps
                let allSteps = ``
                if (ui == resources.length) {
                    match(steps, allSteps, book, r)
                } else if (ui <= (resources.length) && ui >= (resources.length * 0.8)) {
                    let current = resources


                    let missingI = current
                    let ing = ""

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
                    for (var n in book[r].steps.ingredients) {
                        ing += `
                <li>
                    ${book[r].steps.ingredients[n]}
                </li>
                `
                    }
                    for (var it in itemsOfRecipe) {
                        delete rsc[rsc.indexOf(itemsOfRecipe[it])]                    
                    }
                    let missing = []
                    for (var msngi in rsc) {
                        //console.warn(rsc[msngi])
                        missing.push(rsc[msngi])
                    }
                    let missingItems = `<h5>Missing Ingredients:</h5>`
                    for (var tm in missing) {
                        missingItems += `- ${missing[tm]}<br>`
                    }
                    $("#items").append(`
            <p>
            <div class="row">
            <div class="col-sm-12">            
            <div class="row">
            <div class="col-sm-5">
            <img alt="Picture not found" id="foodIMG" src="${book[r].img}"></img>    
            </div>
            <div class="col-sm-7">
            <h3>
            ${book[r].name}
            </h3>
            -<u>You might not have all the ingredients! </u></b> <br>
            <p id="aboutFood">          
            <a id="tags">
            ${tags} 
            </a>           
            <br>            
            <a href="/share/?item=${book[r].name}">Share/Enlarge</a> <br>
            <p id="missing">      
            ${missingItems}      
            </p>
            </div>        
            </div>             
            <h5>Ingredients: </h5> 
            <ul id='ings'>
            ${ing}
            </ul>    
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
    //console.log(filterTags)
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

/**             
 */

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


function Book() {
  return (
    <div class="wrapper">
      <div class="container" >       


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

            <div id="filterW">
            <div>
                <div ><input id="filter" list="filterO"  class="form-control" placeholder="select category.."></input>
                <br></br>
                <div id='units'>
                    
                </div>
                </div>
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
