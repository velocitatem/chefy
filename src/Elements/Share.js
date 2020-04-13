import React from 'react';
import $ from  'jquery';
var item = ""
function getItem() {
    var url = new URLSearchParams(window.location.search);
    output = url.get('item');
    item = output
    console.log(item)
}
$(document).ready(function(){
    getItem()
})
function Sharing() {
  return (

<div className="App">

    </div>
 
  );
}

export default Sharing;
