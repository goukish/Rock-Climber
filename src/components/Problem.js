import React from 'react';
import './Problem.css';


class Problem extends React.Component {

    render(){

        return(
            
        <div>
          <div class="jumbotron text-center bg-sky">
             <h2>Choose your problem</h2>
          </div>
            
          <figure>
            <div class="row">
              <div class="column">
               <img src= '/images/1.jpg'/>
               <figcaption>Easy</figcaption>
              </div>
             
              <div class="column">
               <img src= '/images/2.jpg' />
               <figcaption>Intermediate</figcaption>
               </div>

              <div class="column">
               <img src= '/images/3.jpg'/>
               <figcaption>Advanced</figcaption>
              </div> 
            </div>
          </figure>    
        </div>
       
             
             );
        }
    }

    export default Problem;