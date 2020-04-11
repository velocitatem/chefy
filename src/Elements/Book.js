import React from 'react';
import $ from  'jquery';
import rcp from '../Data/rcp.json'
var output
var book = rcp[0]
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
        if(ui == resources.length) {
            $("#posWithWhatUserHas").append(book[r].name)
        }
        else if (ui >= (resources.length /2 )) {
            $("#needsExtra").append(book[r].name)
        }
    }
})

function Book() {
  return (
    <div>
      <div class="container">
      <div class="row">
            FILTER
        </div>
        <div id="items" class="row">
            <p id="posWithWhatUserHas">
                <h1>Possible with what user has</h1>
            </p>
            <p id="needsExtra">

            </p>
        </div>
      </div>
    </div>
  );
}

export default Book;
