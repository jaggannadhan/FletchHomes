import React, { useState, useEffect } from "react";
import "../../styles/Overview/FinanceAnalysis.scss";

import { MdEdit } from "react-icons/md";
import { format_price } from "../../Helper/helper.js";

export default function FinanceAnalysis(props) {
    const { mortgage, list_price, calcDetails } = { ...props };
    const { estimate } = {...mortgage};

    const [ totalExpense, setTotalExpense] = useState();
    const [ realPurchasePrice, setRealPurchasePrice] = useState();
    const [ cashToClose, setCashToClose] = useState();
    const [ totalCashRequired, setTotalCashRequired] = useState();

    const [ cashFlowUnitMonth, setCashFlowUnitMonth] = useState();
    const [ netOperatingIncome, setNetOperatingIncome] = useState();
    const [ effectiveGrossIncome, setEffectiveGrossIncome] = useState();
    const [ expenseIncomeRatio, setExpenseIncomeRatio] = useState();
    const [ totalMonthlyProfit, setTotalMonthlyProfit] = useState();
    
    const [ COCROI, setCOCROI] = useState();
    const [ equityROI, setEquityROI] = useState();
    const [ appreciationROI, setAppreciationROI] = useState();
    const [ annualProfit, setAnnualProfit] = useState();

    useEffect(() => {
        setTotalExpense(calcDetails["Total Expenses $"]);
        setRealPurchasePrice(calcDetails["Real Purchase Price (RPP) $"]);
        setCashToClose(calcDetails["Cash Required to Close (After Financing) $"]);
        setTotalCashRequired(calcDetails["Total Cash Required $"]);

        setCashFlowUnitMonth(calcDetails["Cashflow per Unit per Month $"]);
        setNetOperatingIncome(calcDetails["Net Operating Income $"]);
        setEffectiveGrossIncome(calcDetails["Effective Gross Income	$"]);
        setExpenseIncomeRatio(calcDetails["Expense to Income Ratio %"]);
        setTotalMonthlyProfit(calcDetails["Total Monthly Profit or Loss $"]);

        setCOCROI(calcDetails["Cash on Cash ROI %"]);
        setEquityROI(calcDetails["Equity ROI (After 1 Year) %"]);
        setAppreciationROI(calcDetails["Appreciation ROI (After 1 Year) %"]);
        setAnnualProfit(calcDetails["Annual Profit $"])
    }, [calcDetails])
    
    
    return (
        <section className="finance-analysis">
            <div className="pa-header">Buy Rent Hold</div>

            <div className="fa-inner">
                <div className="loan-amt fa-div">
                    <span className="header">Total Expenses:</span>
                    <span className={totalExpense < 0 ? "value negative" : "value positive"}>{format_price(totalExpense)}</span>
                </div> <br /><br />

                <div className="loan-cost fa-div">
                    <span className="header">Real Purchase Price (RPP):</span>
                    <span className={realPurchasePrice < 0 ? "value negative" : "value positive"}>{format_price(realPurchasePrice)}</span>
                </div> <br /><br />

                <div className="loan-duration fa-div">
                    <span className="header">Cash Required to Close (After Financing):</span>
                    <span className={cashToClose < 0 ? "value negative" : "value positive"}>{format_price(cashToClose)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Total Cash Required:</span>
                    <span className={totalCashRequired < 0 ? "value negative" : "value positive"}>{format_price(totalCashRequired)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Cashflow per Unit per Month:</span>
                    <span className={cashFlowUnitMonth < 0 ? "value negative" : "value positive"}>{format_price(cashFlowUnitMonth)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Net Operating Income:</span>
                    <span className={netOperatingIncome < 0 ? "value negative" : "value positive"}>{format_price(netOperatingIncome)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Effective Gross Income:</span>
                    <span className={effectiveGrossIncome < 0 ? "value negative" : "value positive"}>{format_price(effectiveGrossIncome)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Expense to Income Ratio:</span>
                    <span className={expenseIncomeRatio < 0 ? "value negative" : "value positive"}>{expenseIncomeRatio}%</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Total Monthly Profit or Loss:</span>
                    <span className={totalMonthlyProfit < 0 ? "value negative" : "value positive"}>{format_price(totalMonthlyProfit)}</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Cash on Cash ROI:</span>
                    <span className={COCROI < 0 ? "value negative" : "value positive"}>{COCROI}%</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Equity ROI (After 1 Year):</span>
                    <span className={equityROI < 0 ? "value negative" : "value positive"}>{equityROI}%</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Appreciation ROI (After 1 Year):</span>
                    <span className={appreciationROI < 0 ? "value negative" : "value positive"}>{appreciationROI}%</span>
                </div> <br /><br />

                <div className="interest-rate fa-div">
                    <span className="header">Annual Profit:</span>
                    <span className={annualProfit < 0 ? "value negative" : "value positive"}>{format_price(annualProfit)}</span>
                </div> <br /><br />
            </div>

        </section>
    );
}