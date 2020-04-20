import React from 'react';
import $ from  'jquery';

function Home() {
  return (
      
    <div class="container">



        <div>
        
            <div class="row">
                <div class="col-lg-12">
                    <h1 id="home">
                        Chefy                        
                    </h1>
                </div>
            </div>   
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
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2014%2F04%2F03%2F09%2F57%2Fclub-sandwich-309442_640.png&f=1&nofb=1" id='bnr'></img>
               </div>
               <div class="col-sm-7">
                    <h2 >
                        Use Chefy!
                    </h2>
                    <ol>
                        <li>
                           <b> Select the items you have at home </b> (you can use the search bar to make things faster)
                        </li>
                        <li>
                            <b>Click "Create!"</b>
                        </li>
                        <li>
                            <b>Use the filter to specify the food category</b>
                        </li>
                        <li>
                            <b>Have Fun cooking!!</b>
                        </li>
                    </ol>
               </div>
            </div> 
            <hr></hr>
            <div class="row">
                <div class="col-sm-6">
                    <center>
                        <h1>Start Now</h1>
                    </center>
                </div>
                <div class="col-sm-6">
                    <h3>
                        Open your fridge and select what you have <a href="/select#select">HERE</a>
                    </h3>
                </div>
            </div>      
        </div>
    </div>
  );
}

export default Home;
