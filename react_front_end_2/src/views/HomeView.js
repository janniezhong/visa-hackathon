/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from 'axios';
import AdminLayout from "layouts/Admin/Admin.js";
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col
} from "reactstrap";

class HomeView extends React.Component {
    state = {

    }

    constructor(props){
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);

        this.state = {
            loans: JSON.parse(JSON.stringify(this.props.loanList))
        }
        for(let i = 0; i < this.state.loans.length; i++) {
            delete this.state.loans[i]['pan'];
            delete this.state.loans[i]['card_id'];
            delete this.state.loans[i]['address'];
            delete this.state.loans[i]['city'];
            delete this.state.loans[i]['state'];
            delete this.state.loans[i]['phone'];
            delete this.state.loans[i]['email'];
            delete this.state.loans[i]['amount_loaned'];
            delete this.state.loans[i]['issue_date'];
            delete this.state.loans[i]['expected_end_date'];
        }



    }

    getKeys = function(){
        return Object.keys(this.state.loans[0]);

    }
    getRowsData = function(){
        var items = this.state.loans;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th key={key}>{key.toUpperCase()}</th>
        })
    }



    render() {
        const loanList = this.state.loans;
        if (!loanList){
            console.log("something is wrong!");
            return null;
        }
        return (
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            {/*<CardHeader>*/}
                            {/*    <CardTitle tag="h4">Simple Table</CardTitle>*/}
                            {/*</CardHeader>*/}
                            <CardBody>
                                <Table className="tablesorter">
                                    <thead className="text-primary">
                                    {/*{*/}
                                    {/*    loanList ? (*/}
                                    {/*        <tr> {this.getHeader()} </tr>*/}
                                    {/*    ) :null*/}
                                    {/*}*/}
                                    <tr>
                                        <th>
                                            Company Name
                                        </th>
                                        <th>
                                            Location
                                        </th>
                                        <th>
                                            Payment Plan
                                        </th>
                                        <th>
                                            Next Inspection Date
                                        </th>
                                        <th>
                                            Loan Officer
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        loanList ? (
                                            this.getRowsData()
                                        ) : null
                                    }
                                    <tr>
                                    <td> <NavLink
                                        to={{
                                            pathname:"/create"
                                        }}
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        Create a New Loan...
                                    </NavLink>
                                    </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }

}
const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{

        if (key == "company_name"){
            return <td key={props.data[key]}>
                <NavLink
                    to={{
                        pathname:"/admin/profile",
                        state: {name: props.data[key]}
                    }}
                    className="nav-link"
                    activeClassName="active"
                >
                    {props.data[key]}
                </NavLink>

            </td>
        } else {
            return <td key={props.data[key]}>{props.data[key]}</td>
        }

    })
}






export default HomeView;
