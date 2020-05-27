import React from 'react';
import $ from  'jquery';
import Footer from './Footer'
$("#home").attr("src", "")
function Home() {
  return (      
    <div class="container">
        <div>        
           <p id="cover">
           <div class="row">                
           <div class="col-lg-2"></div>
                <div class="col-lg-8">
                <img id="home" alt="chefyLogo" src="logo.png"></img>
                </div>
            </div>   
            <div class="col-lg-2"></div>
           </p>
           <div class="row">
           <div class="col-sm-4">
                <center>
                    <h3 id="tt">Don't know what to cook with what you have?</h3>
                </center>
            </div>
            <div class="col-sm-4">
                <center>
                    <h3>Don't want to get delivery?</h3>
                </center>
            </div>
            <div class="col-sm-4">
                <center>
                    <h3>Can't go shopping?</h3>
                </center>
            </div>
           </div> 
           <hr></hr>
           <div class="row">
               <div class="col-sm-5">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hyjZhnXhJn8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
               <div class="col-sm-7">
               <h1>
                        Use Chefy!
                </h1>
                    <ol>
                        <li>
                            <h4>
                           <b> Select the items you have at home </b> (you can use the search bar to make things faster)
                           </h4>
                        </li>
                        <li>
                            <h4>
                            <b>Click "Create!"</b>
                            </h4>
                        </li>
                        <li>
                            <h4>
                            <b>Use the filter to specify the food category</b>
                            </h4>
                        </li>
                        <li>
                            <h4>
                            <b>Have Fun cooking!!</b>
                            </h4>
                        </li>
                        <h3>
                    <a id="startNow" href="/select">Start now</a>
                    </h3>
                    </ol>
               </div>
            </div> 
            <hr></hr>
            <div class="row">

            </div>      
            <Footer />
        </div>
    </div>
  );
}

export default Home;
