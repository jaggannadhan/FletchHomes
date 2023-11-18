import React, { Component } from "react";
import "../../styles/LandingPage/Calculator.scss";
import pieChart from "../../../images/pieChart.png";

class Calculator extends Component {
    render () {
        return (
            <div className="calculator">
                <div className="calc-head-div">
                    <div className="calc-header"> Property Calculator</div>
                    <div className="head-cont">Our unique process gives you peace of mind from home rent to services.</div>
                    <div className="head-small-cont">Just slide your way through!</div>
                </div> 

                <div className="payment-details">

                    <div className="estd-cost">Estimated Cost</div>
                    <div className="estd-cost-val-div">
                        <span className="estd-cost-val">$1,575</span>
                        <span className="estd-cost-time">per month</span>
                    </div>

                    <div className="payment-det-brk-dwn">

                        <div className="indv-payment-det"> 
                            <div>Loan amount</div> 
                            <div>$300,000</div>
                        </div>

                        <div className="indv-payment-det">
                            <div>Down payment</div>
                            <div>$60,000</div>
                        </div>

                        <div className="indv-payment-det">
                            <div>Interest rate</div>
                            <div>4.171%</div>
                        </div>

                        <div className="indv-payment-det">
                            <div>Loan duration</div>
                            <div>30 years</div>
                        </div>

                        <div className="indv-payment-det">
                            <div>Property tax</div>
                            <div>1.5% / years</div>
                        </div>
                        
                        <div className="indv-payment-det">
                            <div>Homeowner Ins.</div>
                            <div>$840 /  years</div>
                        </div>

                        
                        <div className="indv-payment-det">
                            <div>Hoa dues</div>
                            <div>$0 / month
                            </div>
                        </div>
                    </div>

                    <div id="brkdwn-payment">Breakdown Payment</div>

                    <div className="pie-chart">
                        <img className="ellispse" src={pieChart}/>
                    </div>

                    <div className="pie-chart-brkdwn">

                        <div className="chart-brkdwn-grid">
                            <div className="chart-brkdwn-head">
                                <div className="brkdwn-dots"/>
                                <div className="brkdwn-val-btm">Insurance</div>
                            </div>
                            <div className="brkdwn-val-btm">$105</div>
                        </div>
                        
                        <div className="chart-brkdwn-grid">
                            <div className="chart-brkdwn-head">
                                <div className="brkdwn-dots"/>
                                <div className="brkdwn-val-btm">Tax</div>
                            </div>
                            <div className="brkdwn-val-btm">$300</div>
                        </div>

                        <div className="chart-brkdwn-grid">
                            <div className="chart-brkdwn-head">
                                <div className="brkdwn-dots"/>
                                <div className="brkdwn-val-btm">P&I</div>
                            </div>
                            <div className="brkdwn-val-btm">$1,170</div>
                        </div>
                    </div>

                </div>

                <div className="calculator-view">

                    <div className="calc-view-head">Calculator</div>

                    <div className="calc-main-val">
                        <div className="ppt-price-div">
                            <div style={{color: 'rgba(0, 0, 0, 0.58)', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>Property Price</div>
                            <br/>
                            <div style={{color: 'black', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>$300,000</div>
                            <div style={{width: "100%", height: 0, border: '1px rgba(174.25, 174.25, 174.25, 0.80) solid'}}></div>
                        </div>

                        <div className="loan-dur-div">
                            <div style={{color: 'rgba(0, 0, 0, 0.58)', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>Loan Duration</div>
                            <br/>
                            <div style={{color: 'black', fontSize: "1vw", fontFamily: 'Overpass', fontWeight: '400', wordWrap: 'break-word'}}>30 years </div>
                            <div style={{width: "100%", height: 0, border: '1px rgba(174.25, 174.25, 174.25, 0.80) solid'}}></div>
                        </div>
                    </div>

                    <div className="dwn-pymt-div">

                        <div className="header-slider-percent">
                            <div className="header">Down payment</div>

                            <div className="slider-div">
                                <div className="slider-elm">
                                    <div className="slider"/>
                                    <div className="highlighter"/>
                                    <div className="pos"/>
                                </div>
                                
                                <div className="hover-div">
                                    <div className="det1">20%</div>
                                    <div className="det2">$60,000</div>
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
                                    <div className="details">4.171%</div>
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
                                    <div className="det1">1.2%</div>
                                    <div className="det2">$2,400</div>
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
                                    <div className="details">$840</div>
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
}

export default Calculator;