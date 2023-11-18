import React from "react";
import { Chart } from "react-google-charts";

export default function PurchaseAnalysisChart(props) {

    const data = [
        ["Type", "Amount"],
        ["Down Payment", props.home_ins || 42],
        ["Rehab Cost", props.ppt_tax || 30],
        ["Purchase Cost", props.pi || 28]
    ];
      
    const options = {
        backgroundColor: "#f2fff0",
        colors: ["#fff302", "#f4b6b6", "#10dcdf"],
        legend: {position: 'right', textStyle: {color: 'black', fontSize: 17}},
        pieSliceBorderColor: "none",
        charArea: {width: 100, height: 100},
        pieSliceTextStyle: {color: "black", fontSize: 15}
    };
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"22vw"}
        />
    );
}
