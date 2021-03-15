import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from './Firebase';
import 'hammerjs';
import './Problem.css';
import { Button } from './Button';
import {Link} from 'react-router-dom';



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
 } from '@progress/kendo-react-charts';
import { DropDownList } from '@progress/kendo-react-dropdowns';

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
    limb = [
        { text: 'Basketball', id: 1 },
        { text: 'Football', id: 2 },
        { text: 'Tennis', id: 3 },
        { text: 'Volleyball', id: 4 }
    ];
    state = {
        value: { text: 'Football', id: 2 }
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
render(){
    return(
            
    <div className="MainDiv">
                
                <div class="jumbotron text-center bg-sky">
                <h2>Reports</h2>
                </div>
                <div>
                <DropDownList
                    data={this.limb}
                    textField="text"
                    dataItemKey="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
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
                        <ChartXAxisItem  title={{ text: 'Xaxis (m)'}} color="black" crosshair={{ visible: true, tooltip: { visible: true }}} />
                    </ChartXAxis>
                    <ChartYAxis>
                        <ChartYAxisItem background="white"  title={{ text: 'Yaxis (m)' }} color="black" crosshair={{ visible: true, tooltip: { visible: true }}}/>
                    </ChartYAxis>
            </Chart> 
            </div>
            </figure> 

            );
            
        })
        }
                         <div className='btn'> <Link to = "/page2"><Button
                          className='btns'
                          buttonStyle='btn--outline'
                          buttonSize='btn--large'
                          
                          >
                          <h5>Get Data</h5>
                          </Button>
                          <br/>
                          </Link> </div>
    </div>
    
            );
            
}

}
  
export default Reports;