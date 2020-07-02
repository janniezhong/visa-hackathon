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
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";
import {Route} from "react-router-dom";
import HomeView from "./HomeView";

class CreateLoan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                  <h5 className="title">Create A Loan</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form action="/home/view">
                                        <Row>
                                            <Col className="pr-md-1" md="5">
                                                <FormGroup>
                                                    <label>Company Name</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Company"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Address</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Home Address"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>City</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="City"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Country</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Country"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Phone</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Phone"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">
                                                        Email address
                                                    </label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="abc@xyz.com"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Card Id</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Card Id"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Amount($)</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Loan Type</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Issue Date</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="datetime"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label>End Date</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="datetime"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label>Next Check-in</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="datetime"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="8">
                                                <FormGroup>
                                                    <label>Loan Officer</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="John Doe"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill" color="primary" type="submit">
                                        Save
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default CreateLoan;
