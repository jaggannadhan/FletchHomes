import React, { useState, useEffect } from "react";
import "../../styles/Overview/PurchaseAnalysis.scss";

import { MdEdit } from "react-icons/md";
import { format_price } from "../../Helper/helper";
import PurchaseAnalysisChart from "./PurchaseAnalysisChart.jsx";

export default function PurchaseAnalysis(props) {
    const { mortgage, list_price } = { ...props };
    const { estimate } = {...mortgage};
    const { down_payment, loan_amount, total_payment } = {...estimate};

    return (
        <section className="purchase-analysis">
            <div className="pa-header">Purchase Analysis</div>
            <div className="pa-sec1">
                <div className="price-div">
                    <span className="price-header">Property  Price</span>
                    <span className="price-value">{format_price(list_price)}</span>
                </div> <br /><br />

                <div className="finance-div">
                    <span className="finance-header">Amount Financed</span>
                    <span>-</span>
                    <span className="finance-value">{format_price(loan_amount)}</span>
                </div> <br /> <br />

                <div className="pa-sec1-divider"/><br />
                <div className="dp-div">
                    <span className="dp-header">Down Payment</span>
                    <span>=</span>
                    <span className="dp-value">{format_price(down_payment)}</span>
                </div><br /><br />
                
                <div className="cop-div">
                    <span className="cop-header">Cost of Purchase</span>
                    <span>+</span>
                    <span className="cop-header">$3,000</span>
                    <MdEdit className="pa-edit"/>
                </div><br />

                <div className="cor-div">
                    <span className="cor-header">Rehab cost (optional)</span>
                    <span>+</span>
                    <span className="cor-header">$2,000</span>
                    <MdEdit className="pa-edit"/>
                </div><br /><br />

                <div className="pa-sec1-divider"/><br />

                <div className="total-div">
                    <span className="total-header">Total cash needed</span>
                    <span>=</span>
                    <span className="total-value">{format_price(total_payment)}</span>
                </div><br />
            </div>

            <div className="pa-sec2"><PurchaseAnalysisChart /> </div>
            
        </section>
    );
}