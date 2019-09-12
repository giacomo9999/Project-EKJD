import React, { Component } from 'react'
import database from './sample_record2'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            database:[]
    }
    
}

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
    }
    
    

    render() {
        return (
            <div>
                <h3 className="heading2"> Input the Name of the Student!</h3>
                <form>
                    <input
                    name="date"
                    type="text"
                    placeholder="Date"
                    onChange={this.handleChange}
                    />
                    <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleChange}
                    />
                  
                    <button>Submit</button>
                    

                </form>
            </div>
        )
    }
}
