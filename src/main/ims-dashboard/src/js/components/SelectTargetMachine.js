import React, { Component } from 'react'
import Select from '../components/Common/Select'
import Button from './Common/Button'
//import { Button } from 'reactstrap'

class SelectTargetMachine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            targetMachineOption: [
                'localhost', '10.3.9.3', '10.3.12.155'
            ],
            selectedTargetMachineOption: ""
        }
    }

    dropDownSelectHandler = (event) => {
        this.setState({
            selectedTargetMachineOption: event.target.value
        })
    }
    submitTargetMachine = (event) => {
        console.log(`${this.state.selectedTargetMachineOption}`)
        //alert(`${this.state.selectedTargetMachineOption}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submitTargetMachine}>
                <div className="create-target-machine-select">
                    <div className='form-control'>
                        <Select
                            title="Target Machine"
                            name="Target Machine"
                            options={this.state.targetMachineOption}
                            value={this.state.selectedTargetMachineOption}
                            controlFunc={(event) => this.dropDownSelectHandler(event)}
                            placeHolder={"Choose Target Machine"}
                            required={true}
                        />
                    </div>
                    <button type="submit">Submit</button>
                    {/*<Button
                        type={"primary"}
                        title="Submit"
                    */}
                </div>

            </form>

        )
    }
}
export default SelectTargetMachine