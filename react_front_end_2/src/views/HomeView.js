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

    }

    getKeys = function(){
        return Object.keys(this.props.loanList[0]);

    }
    getRowsData = function(){
        var items = this.props.loanList;
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

    // renderTableData() {
    //     return this.state.loanList.map((company, index) => {
    //         const { name, age, location } = company //destructuring
    //         return (
    //             <tr key={name}>
    //                 <td>{name}</td>
    //                 <td>{age}</td>
    //                 <td>{location}</td>
    //             </tr>
    //         )
    //     })
    // }


    render() {
        const loanList = this.props.loanList;
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
                                    {
                                        loanList ? (
                                            <tr> {this.getHeader()} </tr>
                                        ) :null
                                    }
                                    </thead>
                                    <tbody>
                                    {
                                        loanList ? (
                                            this.getRowsData()
                                        ) : null
                                    }
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

        if (key == "Name"){
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