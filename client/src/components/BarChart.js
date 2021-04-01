import React, {Component} from 'react';
import * as d3 from "d3";
import "./BarChart.css";

class BarChart extends Component {
    constructor() {
        super();
        this.state = {
            data: [12, 5, 6, 6, 9, 10]
        }
    }
    componentDidMount() {
        fetch("api/data")
        .then((res) => res.json())
        .then((fetchedData) => {
            this.setState({data: fetchedData});
            this.drawChart();
        })
    }
      
    drawChart() {
        //const data = [12, 5, 6, 6, 9, 10];

    //   const data = this.props.data;
      
      const svg = d3.select("body").append("svg")
    //   .attr("width", this.props.width)
    //   .attr("height", this.props.height)
      .attr("width", 500)
      .attr("height", 500)
  .attr("class", "bar-stuff")

    //   .style("margin-bottom", 100)
    //   .classList.add("bar-stuff")
    //   .style('.bar-stuff')
   //svg.classList.add("bar-stuff")
                    
      svg.selectAll("rect")
        .data(this.state.data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => 500 - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "blue")

        // .attr('margin-left', '100px')

        svg.selectAll("text")
  .data(this.state.data)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("x", (d, i) => i * 70)
//   .attr("y", (d, i) => h - (10 * d) - 3)
  .attr("y", (d, i) => 500 - (10 * d) - 3)
  ;
    }
          
    render(){
      return <div id={"#" + this.props.id}></div>
    }
  }
      
  export default BarChart;