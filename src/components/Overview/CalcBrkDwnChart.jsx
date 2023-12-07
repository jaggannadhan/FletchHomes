import React from "react";
import { Chart } from "react-google-charts";

export default function CalcBrkDwnChart(props) {

    const data = [
        ["Type", "Amount"],
        ["Insurance", props.home_ins*12],
        ["Tax", props.ppt_tax],
        ["P&I", props.pi]
    ];
      
    const options = {
        pieHole: 0.8,
        backgroundColor: '#437f3a',
        colors: ["#fff302", "#f4b6b6", "#10dcdf"],
        legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 14}},
        pieSliceBorderColor: "none",
        charArea: {width: 400, height: 100},
        pieSliceTextStyle: {color: "white", fontSize: 10}
    };

    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"9vw"}
        />
    );
}
