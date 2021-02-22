import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';
import 'hammerjs';


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
    Sparkline,
    ChartTooltip,
    ChartSeriesItemTooltip,
    ChartCategoryAxisItem,
    ChartValueAxisItem,
    ChartSeriesMarkers

} from '@progress/kendo-react-charts';

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

            const notes = {
                label: {
                    color: 'black'
                },
                line: {
                    length: 30,
                    color:'black'
                },
                icon: {
                    visible: true,
                    color:'red',
                    type: 'square',
                },
                position:'top'

            }
            return(  
                      
            <Chart >
                <ChartArea background="#00e6e6" height="700" width="1860" />
                    <ChartTitle text="Rock Climber Tracker" color="black" />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="scatterLine"
                            width="3"
                            data={d.data}
                            xField="x"
                            yField="y"
                            noteTextField="note"
                            notes={notes}
                            color="red"
                            markers={{visible:true, size:20}}
                            
                        /></ChartSeries>
                     <ChartTooltip color="white"/>
                    <ChartXAxis>
                        <ChartXAxisItem  title={{ text: 'Xaxis'}} color="black" crosshair={{ visible: true, tooltip: { visible: true }}} />
                    </ChartXAxis>
                    <ChartYAxis>
                        <ChartYAxisItem  title={{ text: 'Yaxis' }} color="black" crosshair={{ visible: true, tooltip: { visible: true }}}/>
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