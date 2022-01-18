import React, { Component } from "react"
import axios from 'axios'
import './LoadMockData.css'

class LoadMockData extends Component {
    loadDummyData = (e) => {
        axios.get('http://localhost:8080/SetupMockData', this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <div className="LoadMockData">
                <button onClick={this.loadDummyData}>Load the mock data into the database</button>
                <p>
                    rekening 1: NL98INGB0003856625 saldo: 200 <br/>
                    rekening 2: NL98INGB0003856626 saldo: 200
                </p>
            </div>
        )
    }
}

export default LoadMockData