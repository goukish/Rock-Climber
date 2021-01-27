import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';

import {
    Chart,
    ChartTitle,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartArea,
    ChartTooltip,
    ChartSeriesItemTooltip,
    ChartCategoryAxisItem,
    ChartValueAxisItem

} from '@progress/kendo-react-charts';
import { Tooltip } from '@progress/kendo-react-tooltip';



class Reports extends React.Component{
    constructor(props) {
    
        super(props);
        this.state = {spe : []}
        }
        
    componentDidMount() {
       
      firebase.database().ref("spells1").on("value", snapshot => {
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
                
              {this.state.spe.map(d => {
                  return(  
            <Chart style={{width: 1000}}>
                <ChartArea background="#00e6e6" height="700" width="1860" />
                    <ChartTitle text="Rock Climber Tracker" color="black" />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="scatter"
                            data={d.data}
                            xField="x"
                            yField="y"
                            color="color"
                            noteTextField="note"
                        /></ChartSeries>
                     
                     <ChartTooltip color="white" />
                    <ChartXAxis>
                        <ChartXAxisItem majorGridLines={{visible: true, width: 1, color:"black"}} title={{ text: 'X-IMU'}} color="black" crosshair={{ visible: true, tooltip: { visible: true }}} />
                    </ChartXAxis>
                    <ChartYAxis>
                        <ChartYAxisItem majorGridLines={{visible: true, width: 1,color:"black"}} title={{ text: 'Y-IMU' }} color="black" crosshair={{ visible: true, tooltip: { visible: true }}}/>
                    </ChartYAxis>
                </Chart> 


                );
               
            })
            }
            </div>
            );
            
    }

}
  
export default Reports;