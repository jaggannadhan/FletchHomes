import React, { useState, useEffect } from "react";
import "../../styles/Overview/Calculator.scss";
import { calculateMortgage, calculateCashFlow } from "../../Apis/apis.js";
import { format_price } from "../../Helper/helper";
import CalcBrkDwnChart from "./CalcBrkDwnChart.jsx";

export default function Calculator(props) {
    const { details, property_id } = {...props};
    const { mortgage, hoa, list_price } = {...details};

    const { estimate, property_tax_rate: ptr } = { ...mortgage };
    const { down_payment, loan_amount, average_rate, monthly_payment_details } = {...estimate} ;
    const { loan_type, rate } = {...average_rate};
    const { amount: home_ins } = {...monthly_payment_details?.[1]};
    const [ finance, setFinance ] = useState(estimate || {});
    const { term } = {...loan_type};
    const { fee: hoa_fee} = {...hoa};

    const [ isLoading, setIsLoading ] = useState(false);
    const [ isCashFlowLoading, setIsCashFlowLoading ] = useState(false);
    const [ cashFlow, setCashFlow ] = useState({});
    const [ dwnPymtSliderVal, setDwnPymtSliderVal ] = useState(10);


    useEffect(() => {
        const allParamsPresent =  () => {
            if(home_ins && ptr && down_payment && loan_amount && term && rate && hoa_fee != undefined) return true;
            return false;
        }
        const getCaluclatorDetails = async () => {
            if(!isLoading && allParamsPresent()) {
                setIsLoading(true);
                calculateMortgage(
                    home_ins, 
                    ptr, 
                    down_payment, 
                    loan_amount, 
                    loan_type?.term, 
                    rate, 
                    hoa?.fee
                ).then((res) => { 
                    setFinance(res?.data?.loan_mortgage || estimate || {});
                    setIsLoading(false);
                });
            }
        }

        const getCashFlow = async () => {
            if(!isCashFlowLoading) {
                setIsCashFlowLoading(true);
                calculateCashFlow(property_id).then((res) => { 
                    setCashFlow(res?.data?.loan_mortgage || {});
                    setIsCashFlowLoading(false);
                });
            }
        }

        getCaluclatorDetails();
        getCashFlow();
        
    }, [property_id, home_ins, ptr, down_payment, loan_amount, rate]);


    const { monthly_payment_details: monthly_pd } = {...finance};
    const [pi, hoa_fees, mortgage_ins, ppt_tax, calc_home_ins] = [...monthly_pd||[]];

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
                    <span className="estd-cost-val">{format_price(finance.monthly_payment)}</span>
                    <span className="estd-cost-time">per month</span>
                </div>

                <div className="payment-det-brk-dwn">

                    <div className="indv-payment-det"> 
                        <div>Loan amount</div> 
                        <div>{format_price(finance.loan_amount)}</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Down payment</div>
                        <div>{format_price(down_payment)}</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Interest rate</div>
                        <div>{rate?.toFixed(2)}%</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Loan duration</div>
                        <div>{term} years</div>
                    </div>

                    <div className="indv-payment-det">
                        <div>Property tax</div>
                        <div>{ptr} / year</div>
                    </div>
                    
                    <div className="indv-payment-det">
                        <div>Homeowner Ins.</div>
                        <div>{home_ins} /  year</div>
                    </div>

                    
                    <div className="indv-payment-det">
                        <div>Hoa dues</div>
                        <div>{format_price(hoa_fee)} / month
                        </div>
                    </div>
                </div>

                <div id="brkdwn-payment">Breakdown Payment</div>

                <div className="pie-chart">
                    <CalcBrkDwnChart 
                        home_ins={home_ins}
                        ppt_tax={ppt_tax?.amount}
                        pi={pi?.amount}
                    />
                </div>

                {/* <div className="pie-chart-brkdwn">

                    <div className="chart-brkdwn-grid">
                        <div className="chart-brkdwn-head">
                            <div className="brkdwn-dots"/>
                            <div className="brkdwn-val-btm">Insurance</div>
                        </div>
                        <div className="brkdwn-val-btm">{format_price(home_ins)}</div>
                    </div>
                    
                    <div className="chart-brkdwn-grid">
                        <div className="chart-brkdwn-head">
                            <div className="brkdwn-dots"/>
                            <div className="brkdwn-val-btm">Tax</div>
                        </div>
                        <div className="brkdwn-val-btm">{format_price(ppt_tax?.amount)}</div>
                    </div>

                    <div className="chart-brkdwn-grid">
                        <div className="chart-brkdwn-head">
                            <div className="brkdwn-dots"/>
                            <div className="brkdwn-val-btm">P&I</div>
                        </div>
                        <div className="brkdwn-val-btm">{format_price(pi?.amount)}</div>
                    </div>
                </div> */}

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
                                <input type="range" min="1" max="100" value={dwnPymtSliderVal} className="slider"
                                    onChange={(e) => setDwnPymtSliderVal(e.value)}
                                />
                                {/* <div className="highlighter"/>
                                <div className="pos"/> */}
                            </div>
 
                            <div className="hover-div">
                                <div className="det1">{(down_payment/list_price) * 100}%</div>
                                <div className="det2">{format_price(down_payment)}</div>
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
                                <div className="slider"/>
                                <div className="highlighter"/>
                                <div className="pos"/>
                            </div>

                            <div className="hover-div">
                                <div className="details">{rate?.toFixed(2)}%</div>
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
                                <div className="slider"/>
                                <div className="highlighter"/>
                                <div className="pos"/>
                            </div>

                            <div className="hover-div">
                                <div className="det1">{ptr}%</div>
                                <div className="det2">{ppt_tax ? format_price(ppt_tax?.amount*12) : "--"}</div>
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
                                <div className="slider"/>
                                <div className="highlighter"/>
                                <div className="pos"/>
                            </div>

                            <div className="hover-div">
                                <div className="details">{calc_home_ins ? format_price(calc_home_ins?.amount) : "--"}</div>
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
                                <div className="slider"/>
                                <div className="pos"/>
                            </div>
                        </div>

                        <div className="percentage">
                            <div className="range">0$</div>
                            <div className="range">$1,000</div>
                        </div>
                    </div>
                </div>
                
                <button className="calc-btns save-btn">
                    Save Report
                </button>
                <button className="calc-btns view-btn">
                    View full report
                </button>
            </div>
        
        </div>
    );
}