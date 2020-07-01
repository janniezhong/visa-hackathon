import React, { useState } from  'react';
import './LoanPage.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const LoanPage = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    var company = null;
    var searchVal = props.parentState.selectedLoanID;
    var loanList = props.parentState.loanList
    for (var i = 0; i < loanList.length; i++) {
        if (loanList[i]["loanNum"] === searchVal) {
            company = loanList[i]
        }
    }
    return (
        

        <div className="LoanPage">
            <Button onClick={props.backHandler}>Back To Homepage</Button>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >General Info
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                    More Info
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} style={{paddingTop:'20px'}}>
                <TabPane tabId="1">
                    <h2>{company.name}</h2>
                    <h2>Loan number: {company.loanNum}</h2>
                </TabPane>
                <TabPane tabId="2">
                    <h1>Info: {company.info}</h1>
                
                </TabPane>
            </TabContent>
        </div>
    )
    
}

export default LoanPage