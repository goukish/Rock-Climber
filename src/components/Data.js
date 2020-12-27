
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';


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
        this.setState({ spe: spe });
      });
    
    
 }
  
render() {
  return (
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
          <h2>User Data</h2>
      </div>
    
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>Username</th>
                    <th>EMG</th>
                    <th>IMU</th>
                    <th>Pressure</th>
                </tr>
            </thead>
            <tbody>
            {this.state.spe.map(data => {
                
                return (
                    <tr>     
                    <td>{data.username}</td>
                    <td>{data.emg}</td>
                    <td>{data.imu}</td>
                    <td>{data.pressure}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}

export default Data;