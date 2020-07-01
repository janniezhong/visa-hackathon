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

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loans: JSON.parse(JSON.stringify(this.props.loanList)),
      selectedLoan: null
    }

    for(let i = 0; i < this.state.loans.length; i++) {
      if ((!this.props.loanName)){
        if ((this.props.location.state.name).localeCompare(this.state.loans[i]['company_name']) == 0){
          this.state = {
            loans: JSON.parse(JSON.stringify(this.props.loanList)),
            selectedLoan: this.state.loans[i]
          }
          break;
        }
      }
      else {
        if ((this.props.loanName).localeCompare(this.state.loans[i]['company_name']) == 0){
         this.state = {
            loans: JSON.parse(JSON.stringify(this.props.loanList)),
            selectedLoan: this.state.loans[i]
          }
          break;
        }
      }
    }
  }


  render() {
    // console.log("Userprofile");
    // console.log(this.props);
    const loan = this.state.selectedLoan;
    if (!loan){
      console.log("something is wrong! (userprofile)");
      return null;
    }

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                {/*<CardHeader>*/}
                {/*  <h5 className="title">Company Profile</h5>*/}
                {/*</CardHeader>*/}
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company Name</label>
                          <Input
                            defaultValue={loan['company_name']}
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
                              defaultValue={loan['address']}
                              placeholder="Home Address"
                              type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            defaultValue={loan['city']}
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            defaultValue={loan['country']}
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
                              defaultValue={loan['phone']}
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
                              defaultValue={loan['email']}
                              placeholder="abc@xyz.com"
                              type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*  <Col md="8">*/}
                    {/*    <FormGroup>*/}
                    {/*      <label>About Me</label>*/}
                    {/*      <Input*/}
                    {/*        cols="80"*/}
                    {/*        defaultValue="Insert Description here."*/}
                    {/*        placeholder="Here can be your description"*/}
                    {/*        rows="4"*/}
                    {/*        type="textarea"*/}
                    {/*      />*/}
                    {/*    </FormGroup>*/}
                    {/*  </Col>*/}
                    {/*</Row>*/}
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            {/*<Col md="4">*/}
            {/*  <Card className="card-user">*/}
            {/*    <CardBody>*/}
            {/*      <CardText />*/}
            {/*      <div className="author">*/}
            {/*        <div className="block block-one" />*/}
            {/*        <div className="block block-two" />*/}
            {/*        <div className="block block-three" />*/}
            {/*        <div className="block block-four" />*/}
            {/*        <a href="#pablo" onClick={e => e.preventDefault()}>*/}
            {/*          <img*/}
            {/*            alt="..."*/}
            {/*            className="avatar"*/}
            {/*            src={require("assets/img/emilyz.jpg")}*/}
            {/*          />*/}
            {/*          <h5 className="title">Mike Andrew</h5>*/}
            {/*        </a>*/}
            {/*        <p className="description">Ceo/Co-Founder</p>*/}
            {/*      </div>*/}
            {/*      <div className="card-description">*/}
            {/*        Do not be scared of the truth because we need to restart the*/}
            {/*        human foundation in truth And I love you like Kanye loves*/}
            {/*        Kanye I love Rick Owens’ bed design but the back is...*/}
            {/*      </div>*/}
            {/*    </CardBody>*/}
            {/*    <CardFooter>*/}
            {/*      <div className="button-container">*/}
            {/*        <Button className="btn-icon btn-round" color="facebook">*/}
            {/*          <i className="fab fa-facebook" />*/}
            {/*        </Button>*/}
            {/*        <Button className="btn-icon btn-round" color="twitter">*/}
            {/*          <i className="fab fa-twitter" />*/}
            {/*        </Button>*/}
            {/*        <Button className="btn-icon btn-round" color="google">*/}
            {/*          <i className="fab fa-google-plus" />*/}
            {/*        </Button>*/}
            {/*      </div>*/}
            {/*    </CardFooter>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
          </Row>
        </div>
      </>
    );
  }
}

export default UserProfile;
