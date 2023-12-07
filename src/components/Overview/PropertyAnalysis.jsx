import React from "react";
import PurchaseAnalysis from "./PurchaseAnalysis.jsx";
import FinanceAnalysis from "./FincanceAnalysis.jsx";
import { format_price } from "../../Helper/helper.js";

export default function PropertyAnalysis(props) {
    const { property_id, list_price, mortgage, calcDetails } = { ...props };
    const cash_flow = calcDetails["Cashflow per Unit per Month $"];
    const cash_needed = calcDetails["Total Cash Required $"];
    const coc = calcDetails["Cash on Cash ROI %"];
    const cap_rate = calcDetails["Appreciation ROI (After 1 Year) %"];

    return(
        <section id="property-analysis">
            <div style={{display: "inline-flex", width: "80%", position: "relative",  top:"25vw", left: "7vw", justifyContent: "space-between"}}>
                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CASH NEEDED</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>{format_price(cash_needed)}</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CASH Flow</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>{format_price(cash_flow)}/mo</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>CAP RATE</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>{cap_rate}%</div>
                </div>

                <div style={{width: '14vw', height: '4vw', textAlign: "center", lineHeight: "2vw", background: 'white', border: '0.50px #127E00 solid'}}>
                    <div style={{opacity: 0.64, color: 'black', fontSize: 20, fontFamily: 'neueRadial-C-Regular', fontWeight: '400', wordWrap: 'break-word'}}>COC</div>
                    <div style={{color: '#127E00', fontSize: 25, fontFamily: 'neueRadial-C-Bold', fontWeight: '700', wordWrap: 'break-word'}}>{coc}%</div>
                </div>
            </div>

            <PurchaseAnalysis 
                list_price={list_price}
                mortgage={mortgage}
                calcDetails={calcDetails}
            />

            <FinanceAnalysis 
                list_price={list_price}
                mortgage={mortgage}
                calcDetails={calcDetails}
            />
        </section>
    );
}