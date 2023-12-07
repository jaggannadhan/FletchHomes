import React, { useState, useEffect } from "react";
import "../../styles/Overview/Calculator.scss";

import { format_price } from "../../Helper/helper.js";
import CalcBrkDwnChart from "./CalcBrkDwnChart.jsx";

export default function Calculator(props) {
    const { details, property_id } = {...props};
    const {
        list_price,
        property_tax_rate,
        down_payment, 
        loan_amount, 
        rate,
        home_ins,
        term,
        hoa_fee,
        monthly_payment
    } = unpackDetails(details);


    const [ dwnPymtSliderVal, setDwnPymtSliderVal ] = useState(down_payment);
    const [ irSliderVal, setIrSliderVal ] = useState(rate);
    const [ insSliderVal, setInsSliderVal ] = useState(home_ins);
    const [ pptSliderVal, setPptSliderVal ] = useState(property_tax_rate);
    const [ hodSliderVal, setHodSliderVal ] = useState(hoa_fee);


    useEffect(() => {
        const allParamsPresent =  () => {
            if(  down_payment && hoa_fee != undefined && home_ins &&  loan_amount && property_tax_rate && term && rate) return true;
            return false;
        }

        if(allParamsPresent()) {
            setDwnPymtSliderVal(down_payment);
            setIrSliderVal(rate);
            setInsSliderVal(home_ins);
            setPptSliderVal(property_tax_rate)
            setHodSliderVal(hoa_fee);
        }
        
    }, [property_id, home_ins, property_tax_rate, down_payment, loan_amount, rate]);

    function setCalculator() {
        let body = {
            "financing": {
                "firstMtgAmortizationPeriod": 30,
                "firstMtgCMHCFee": 0,
                "firstMtgInterestRate": 8,
                "firstMtgPrincipleAmount": 355300.0,
                "secondMtgAmortizationPeriod": 9999,
                "secondMtgInterestRate": 12,
                "secondMtgPrincipleAmount": 0
            },
            "incomeInfo": {
                "grossRents": 58800,
                "laundry": 0,
                "other": 0,
                "parking": 0,
                "storage": 0
            },
            "operating": {
                "accounting": 0,
                "associationFees": 0,
                "badDebts": 0,
                "cable": 1200,
                "capitalImprovements": 0,
                "caretaking": 2880,
                "commonAreaMaintenance": 0,
                "electricity": 0,
                "gas": 0,
                "lawn": 0,
                "legal": 0,
                "miscellaneous": 0,
                "other": 0,
                "repairsRate": 5,
                "trashRemoval": 0,
                "water": 1200
            },
            "propertyInfo": {
                "advertizingCost": 100,
                "annualAppreciationRate": 3,
                "managementRate": 5,
                "vacancyRate": 5
            },
            "purchaseInfo": {
                "appraisals": 700,
                "brokerFee": 5000,
                "environmentals": 0,
                "inspections": 700,
                "legal": 500,
                "lenderFee": 1500,
                "misc": 500,
                "repairs": 5000,
                "repairsContingency": 1000,
                "transferTax": 0
            }
        }
    }

    return (
        <div className="calculator">
            <div className="calc-head-div">
                <div className="calc-header">Mortgage Calculator</div>
                <div className="head-cont">Our unique process gives you peace of mind from home rent to services.</div>
                <div className="head-small-cont">Just slide your way through!</div>
            </div> 

            <div className="payment-details">

                <div className="estd-cost">Estimated Cost</div>
                <div className="estd-cost-val-div">
                    <span className="estd-cost-val">{format_price(monthly_payment)}</span>
                    <span className="estd-cost-time">per month</span>
                </div>

                <div className="payment-det-brk-dwn">

                    <div className="indv-payment-det"> 
                        <div>Loan amount</div> 
                        <div>{format_price(loan_amount)}</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Down payment</div>
                        <div>{format_price(dwnPymtSliderVal)}</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Interest rate</div>
                        <div>{Number(irSliderVal)?.toFixed(2)}%</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Loan duration</div>
                        <div>{term} years</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Property tax</div>
                        <div>{pptSliderVal} / year</div>
                    </div>
                    
                    <div className="indv-payment-det">
                        <div>Homeowner Ins.</div>
                        <div>{insSliderVal} /  year</div>
                    </div>

                    
                    <div className="indv-payment-det">
                        <div>Hoa dues</div>
                        <div>{format_price(hodSliderVal)} / month
                        </div>
                    </div>
                </div>

                <div id="brkdwn-payment">Breakdown Payment</div>

                <div className="pie-chart">
                    <CalcBrkDwnChart 
                        home_ins={Number(insSliderVal)}
                        ppt_tax={Number(pptSliderVal)*list_price}
                        pi={Number(dwnPymtSliderVal)}
                    />
                </div>
            </div>

            <div className="calculator-view">

                <div className="calc-view-head">Calculator</div>

                <div className="calc-main-val">
                    <div className="ppt-price-div">
                        <div style={{color: 'rgba(0, 0, 0, 0.58)', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>Property Price</div>
                        <br/>
                        <div style={{color: 'black', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{format_price(list_price)}</div>
                        <div style={{width: "100%", height: 0, border: '1px rgba(174.25, 174.25, 174.25, 0.80) solid'}}></div>
                    </div>

                    <div className="loan-dur-div">
                        <div style={{color: 'rgba(0, 0, 0, 0.58)', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>Loan Duration</div>
                        <br/>
                        <div style={{color: 'black', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>{term} years </div>
                        <div style={{width: "100%", height: 0, border: '1px rgba(174.25, 174.25, 174.25, 0.80) solid'}}></div>
                    </div>
                </div>

                <div className="dwn-pymt-div">

                    <div className="header-slider-percent">
                        <div className="header">Down payment</div>

                        <div className="slider-div">
                            <div className="slider-elm">
                                <input type="range" min={`${list_price/10}`} max={`${list_price}`} value={dwnPymtSliderVal} className="slider"
                                    onChange={(e) => setDwnPymtSliderVal(e.currentTarget?.value)}
                                />

                            </div>
 
                            <div className="hover-div">
                                <div className="det1">{Math.round(dwnPymtSliderVal/list_price + "e+2")}%</div>
                                <div className="det2">{format_price(dwnPymtSliderVal)}</div>
                            </div>
                        </div>

                        <div className="percentage">
                            <div className="range">0%</div>
                            <div className="range">99%</div>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="ir-div">
                    <div className="header-slider-percent">
                        <div className="header">Interest Rate</div>
                    
                        <div className="slider-div">
                            <div className="slider-elm">
                                <input type="range" min="0" max="20" value={irSliderVal} className="slider" step="0.01"
                                    onChange={(e) => setIrSliderVal(e.currentTarget?.value)}
                                />
                            </div>

                            <div className="hover-div">
                                <div className="details">{Number(irSliderVal)?.toFixed(2)}%</div>
                            </div>
                        </div>

                        <div className="percentage">
                            <div className="range">0%</div>
                            <div className="range">20%</div>
                        </div>

                        
                    </div>
                </div>

                <div className="ppt-taxes-div">
                    <div className="header-slider-percent">
                        <div className="header">Property taxes / year</div>

                        <div className="slider-div">
                            <div className="slider-elm">
                                <input type="range" min="0" max="3" value={pptSliderVal} className="slider" step="0.01"
                                    onChange={(e) => setPptSliderVal(e.currentTarget?.value)}
                                />
                            </div>

                            <div className="hover-div">
                                <div className="det1">{pptSliderVal}%</div>
                                <div className="det2">{format_price(pptSliderVal*list_price)}</div>
                            </div>
                            
                        </div>

                        <div className="percentage">
                            <div className="range">0%</div>
                            <div className="range">3%</div>
                        </div>
                    </div>
                </div>

                <div className="ppt-ins-div">
                    <div className="header-slider-percent">
                        <div className="header">Property Insurance</div>
                        
                        <div className="slider-div">
                            <div className="slider-elm">
                                <input type="range" min="0" max="1000" value={insSliderVal} className="slider"
                                    onChange={(e) => setInsSliderVal(e.currentTarget?.value)}
                                />
                            </div>

                            <div className="hover-div">
                                <div className="details">{format_price(insSliderVal)}</div>
                            </div>
                        </div>

                        <div className="percentage">
                            <div className="range">0$</div>
                            <div className="range">$1,000</div>
                        </div>
                    </div>
                </div>

                <div className="owner-dues-div">
                    <div className="header-slider-percent">
                        <div className="header">Home Owner Dues</div>
                        
                        <div className="slider-div">
                            <div className="slider-elm">
                                <input type="range" min="0" max="1000" value={hodSliderVal} className="slider"
                                    onChange={(e) => setHodSliderVal(e.currentTarget?.value)}
                                />
                            </div>
                        </div>

                        <div className="percentage">
                            <div className="range">0$</div>
                            <div className="range">$1,000</div>
                        </div>
                    </div>
                </div>
                
                <button className="calc-btns save-btn"
                 onClick={() => setCalculator()}
                >
                    Save Report
                </button>
                <button className="calc-btns view-btn">
                    View full report
                </button>
            </div>
        
        </div>
    );
}

const unpackDetails = (details) => {
    const { mortgage, hoa, list_price } = {...details};

    const { estimate, property_tax_rate } = { ...mortgage };
    const { down_payment, loan_amount, average_rate, monthly_payment_details, monthly_payment } = {...estimate} ;
    const { loan_type, rate } = {...average_rate};
    const { amount: home_ins } = {...monthly_payment_details?.[1]};
    const { term } = {...loan_type};
    const { fee: hoa_fee} = {...hoa};

    return {
        mortgage, 
        hoa, 
        list_price,
        estimate,
        property_tax_rate,
        down_payment, 
        loan_amount, 
        average_rate, 
        monthly_payment,
        monthly_payment_details,
        loan_type, 
        rate,
        home_ins,
        term,
        hoa_fee
    };
}