import React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';
import { Button } from './Button';
import {Link} from 'react-router-dom';
//import data from './scatter-plot-data.json';
import {
    Chart,
    ChartTitle,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartPlotArea
} from '@progress/kendo-react-charts';
import {Scatter} from 'react-chartjs-2'



class Reports extends React.Component{
// constructor (props){
//        super(props)
//        this.state = {
        
//      dataScatter: {
//             labels:['10','20','30','40'],
//             datasets: [
//                    {
//                           label: 'millimeters',
//                           fill: false,
//                           lineTension: 0.5,
//                           backgroundColor: 'rgba(75,192,192,1)',
//                           pointBackgroundColor: 'rgba(0, 255, 100, 0.6)',
//                           hoverBorderColor: 'rgba(255, 155, 100, 1)',
//                           pointRadius: 15,
//                           borderColor: 'rgba(0,0,0,1)',
//                           borderWidth: 2,
//                           pointHoverBorderWidth: 15,
//                           spe: ['20','20','30','30']
//                    }
//             ]
//         }
//     }
// }


componentDidMount() {
   
    firebase.database().ref("spells").on("value", snapshot => {
          let spe = [];
          snapshot.forEach(snap => {
              spe.push(snap.val());
          });
          this.setState({ spe: spe });
        });
      
      
   }
    render(){
            
        return(
            
            <div className="MainDiv">
                
                <div class="jumbotron text-center bg-sky">
                <h2>Reports</h2>
                </div>
                <Scatter
                    //spe={this.state.dataScatter}
                    data={data}
                    
                    options={{
                            title: {
                                    display: true,
                                    text: 'Rock Climbing Tracker ',
                                    fontSize: 20
                            },
                            legend: {
                                    display: true,
                                    position: 'right'
                            }
                    }}
                        
                
                />


            </div>
            );
    }

}

const data = {
    labels:['jan','feb'],
    datasets: [
           {
                  label: 'Rock Climber',
                  //fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'rgba(75,192,192,1)',
                  pointBackgroundColor: 'rgba(0, 255, 100, 0.6)',
                  hoverBorderColor: 'rgba(255, 155, 100, 1)',
                  pointRadius: 15,
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  pointHoverBorderWidth: 15,
                  data:  [{
                    x: 0,
                    y: 0,
                 }, {
                    x: 2,
                    y: 3
                 },{
                    x: 4,
                    y: 3
                 },{
                    x: 2,
                    y: 8
                 },{
                    x: 4,
                    y: 8
                 }]
           }
    ]
}


export default Reports;