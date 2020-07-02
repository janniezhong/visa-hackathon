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
import {NavLink} from "react-router-dom";

class Tables extends React.Component {

  constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);

    this.state = {
      transactions:[
        {
          "amount": -1.72,
          "address": "1234 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "100 - Highlands Ranch",
          "transactionDescription": "Funds Transfer Fee"
        },
        {
          "amount": 50.0,
          "address": "1234 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "100 - Highlands Ranch",
          "transactionDescription": "Manual Card Reload"
        },
        {
          "amount": -10.0,
          "address": "1234 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "RELOADABLEUP",
          "transactionDescription": "ACH Funds Transfer Debit"
        },
        {
          "amount": -5.0,
          "address": "123 Main St.",
          "city": "Your Town",
          "region": "Colorado",
          "merchantName": "Sample Financial Institute",
          "transactionDescription": "Replacement Card Fee"
        },
        {
          "amount": -14.0,
          "address": "123 Main St.",
          "city": "Your Town",
          "region": "Colorado",
          "merchantName": "Sample Financial Institute",
          "transactionDescription": "Replacement Card Fee"
        },
        {
          "amount": -15.0,
          "address": "4321 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "RELOADABLEUP",
          "transactionDescription": "ACH Funds Transfer Debit"
        },
        {
          "amount": 50.0,
          "address": "321 Surreal St",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "100 - Highlands Ranch",
          "transactionDescription": "Manual Card Reload"
        },
        {
          "amount": -1.72,
          "address": "1738 Hallow St.",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "100 - Highlands Ranch",
          "transactionDescription": "Funds Transfer Fee"
        },
        {
          "amount": -1.72,
          "address": "1738 Hallow St.",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "100 - Highlands Ranch",
          "transactionDescription": "Funds Transfer Fee"
        },
        {
          "amount": -10.0,
          "address": "1234 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "RELOADABLEUP",
          "transactionDescription": "ACH Funds Transfer Debit"
        },
        {
          "amount": -12.0,
          "address": "321 Blue St.",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "Sample Financial Institute",
          "transactionDescription": "Replacement Card Fee"
        },
        {
          "amount": -20.0,
          "address": "4321 Main Street",
          "city": "Denver",
          "region": "Colorado",
          "merchantName": "RELOADABLEUP",
          "transactionDescription": "Replacement Card Fee"
        }
      ]

    }

  }

  getKeys = function(){
    return Object.keys(this.state.transactions[0]);

  }
  getRowsData = function(){
    var items = this.state.transactions;
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
    const transactionList = this.state.transactions;
    if (!transactionList){
      console.log("something is wrong!");
      return null;
    }
    return (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                    <CardTitle tag="h4">Transactions</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                    {/*{*/}
                    {/*  transactionList ? (*/}
                    {/*        <tr> {this.getHeader()} </tr>*/}
                    {/*    ) :null*/}
                    {/*}*/}
                    <tr>
                      <th>
                        Amount
                      </th>
                      <th>
                        Address
                      </th>
                      <th>
                        City
                      </th>
                      <th>
                        Region
                      </th>
                      <th>
                        Merchant Name
                      </th>
                      <th>
                        Description
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      transactionList ? (
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


export default Tables;
