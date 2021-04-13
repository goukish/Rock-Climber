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
import { Input } from 'hammerjs';

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
            this.setState({spe: spe });
          });

          
    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            number: event.target.value
        });
    }

     
     
render(){
    return(

    <div className="MainDiv">
                <div class="jumbotron text-center bg-sky">
                <h2>Reports - Sample Data</h2>
                </div>
                
                <div class="text-center text-success">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="number">Latest data collection: </label>
                        <input id="number" name="number" type="number"  value={this.state.username} onChange={this.handleChange} />
                        {/* <label>
                            Pick limb:
                            <select value={this.state.value} onChange={this.handleChange}>
                                <option value="grapefruit">Right Hand</option>
                                <option value="lime">Right Leg</option>
                                <option value="coconut">Left Hand</option>
                                <option value="mango">Left leg</option>
                            </select>
                        </label> */}
                        </form>  
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

            const num = this.state.number
            

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
                            data={d.data.slice(0,num)}
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