import React, { Component } from "react"
import axios from 'axios'
import './TransferRequest.css'

class TransferRequestForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            fromRekeningNummer:'',
            toRekeningNummer: '',
            amount: ''
        }
    } 

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/newTransfer', this.state)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
    }

    render(){
        const {fromRekeningNummer, toRekeningNummer, amount} = this.state
        return(
            <div className="TransferRequestForm">
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="fromRekeningNummer">Form: </label>
                        <input type="Text" name="fromRekeningNummer" id="fromRekeningNummer" value={fromRekeningNummer} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="toRekeningNummer">To: </label>
                        <input type="Text" name="toRekeningNummer" id="toRekeningNummer" value={toRekeningNummer} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="amount">Amount: </label>
                        <input type="Number" name="amount" id="amount" value={amount} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default TransferRequestForm