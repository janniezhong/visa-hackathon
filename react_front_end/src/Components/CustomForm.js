import React from  'react';
import './CustomForm.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class CustomForm extends React.Component {
    state = {
        amount: null,
        company: null,
        about: null,

    }
    amountHandler = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    companyHandler = (event) => {
        this.setState({
            company: event.target.value
        })
    }

    aboutHandler = (event) => {
        this.setState({
            about: event.target.value
        })
    }

    submitHandler = () => {
        axios.post('http:localhost8080/rest/createLoan', this.state)
        .then(() => {
            this.setState({
            })
        })
    }



    render () {
        const styling = {
            margin: '10px',
            color: 'black'
        }
        return (
            <div className='CustomForm'>
                <Form>
                    <h3>Enter loan information</h3>
                    <FormGroup style={styling}>
                        <Label>Amount</Label>
                        <Input placeholder="Input" onChange={this.amountHandler}/>
                    </FormGroup>
                    <FormGroup style={styling}>
                        <Label>Company</Label>
                        <Input placeholder="Input" onChange={this.companyHandler}/>
                    </FormGroup>
                    <FormGroup style={styling}>
                        <Label>About</Label>
                        <Input placeholder="Input" onChange={this.aboutHandler}/>
                    </FormGroup>

                    <Button style={{backgroundColor: "#367BFF", margin: '10px'}} onClick={this.submitHandler}>Submit</Button>

                    
                </Form>
                
            </div>
        )
    }
}