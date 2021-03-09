import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';
import 'hammerjs';
import './Problem.css';




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
    ChartTooltip
 

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
                    color: 'black',
                    background:'pink'
                    
                },
                line: {
                    length: 30,
                    color:'black'
                },
                icon: {
                    visible: true,
                    color:'red',
                    type: 'cross'
                    
                },
                position:'top'

            }
            return(  
                <figure>  
                    <div className="photo" style={{ backgroundImage: "url(/images/7.jpg)", opacity: 0.8 }}>
                    
            <Chart >
            
                <ChartArea   height="700" width="1860" />
                
                    <ChartTitle text="Rock Climber Tracker" font="30pt sans-serif" color="black" />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="scatter"
                            width="3"
                            data={d.data}
                            xField="x"
                            yField="y"
                            noteTextField="note"
                            notes={notes}
                            color="red"
                            markers={{visible:true, size:30}}
                            //dashType="longDash"
                        />
                        <ChartSeriesItem
                            type="scatterLine"
                            width="3"
                            data={d.data}
                            xField="Avgx"
                            yField="Avgy"
                            noteTextField="note"
                            notes={notes}
                            color="red"
                            markers={{visible:true, size:30}}
                            dashType="longDash"
                        />
                        </ChartSeries>
                     <ChartTooltip color="white"/>
                    <ChartXAxis>
                        <ChartXAxisItem  title={{ text: 'Xaxis'}} color="black" crosshair={{ visible: true, tooltip: { visible: true }}} />
                    </ChartXAxis>
                    <ChartYAxis>
                        <ChartYAxisItem background="white"  title={{ text: 'Yaxis' }} color="black" crosshair={{ visible: true, tooltip: { visible: true }}}/>
                    </ChartYAxis>
            </Chart> 
            </div>
            </figure> 

                );
               
        })
        }
    </div>
            );
            
}

}
  
export default Reports;