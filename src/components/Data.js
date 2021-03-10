import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Data.css'

class Data extends React.Component {
constructor(props) {
    
    super(props);
    this.state = {spe : []}
    }
    
componentDidMount() {
   
  firebase.database().ref("spells").on("value", snapshot => {
        let spe = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'spells' path
            spe.push(snap.val());
        });
        this.setState({ spe: spe.slice(0,5) });
      });
}
  
render() {
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h2>User Data</h2>
      </div>

      <div className="container">
      {this.state.spe.map(data => {
        return (
        <div>
        <h3>{data.username}</h3>
        <h4>{data.dataType}</h4>
        </div>
        );
      })
      }
      <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Limb Part</th>
                    <th>X position (m)</th>
                    <th>Y position (m)</th>
                    <th>Pressure value (Pa)</th>
                    <th>Hold Sense</th>
                </tr>
            </thead>
            <tbody>

            {this.state.spe.map(data => {
                
                return (
                      
                    <tr>   
                      
                    <td>{data.Limb}</td>
                    <td>{data.x}</td>
                    <td>{data.y}</td>
                    <td>{data.Pressure}</td>
                    <td>{data.holdSensed}</td>
                    </tr>
                    
                );
               
                })

                }
                 <div className='btn'> <Link to = "/page4_report"><Button
                          className='btns'
                          buttonStyle='btn--outline'
                          buttonSize='btn--large'
                          >
                          <h5>Custom Report</h5>
                          </Button>
                          <br/>
                          </Link> </div>
               
            </tbody>
            
         </table>
         

          
              
            

         
     </div>
    </div>

  );

}

}

export default Data;