import React, { Component } from 'react'
import Select from '../components/common/Select'
import Button from './common/Button'
//import { Button } from 'reactstrap'
import axios from 'axios'
import * as Constants from '../components/common/Constants'

class SelectTargetMachine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            targetMachineOption: [
                '127.0.0.1', '10.3.9.3', '10.3.12.155'
            ],
            selectedTargetMachineOption: "",
            ISPMFlag: false,
            IDSFlag: false,
            IACSFlag: false,
            OACSFlag: false,
            IDIMFlag: false,
            ISMFlag: false
        }
    }

    dropDownSelectHandler = (event) => {
        this.setState({
            selectedTargetMachineOption: event.target.value
        })

    }
    getHealthChech = (BASEURL, PORT, URL, Comp) => {

        //console.log("test gethealth ", BASEURL, PORT, URL, axios.defaults)
        axios.get(BASEURL + PORT + URL).then(res => {
            if (res.status === 200) {
                console.log("inside healthcheck if")
                Comp === 'ISPM' && this.setState({ ISPMFlag: true })
                Comp === 'IDS' && this.setState({ IDSFlag: true })
                Comp === 'ISM' && this.setState({ ISMFlag: true })
                Comp === 'IACS' && this.setState({ IACSFlag: true })
                Comp === 'OACS' && this.setState({ OACSFlag: true })
                Comp === 'IDIM' && this.setState({ IDIMFlag: true })
            }
            else {
                console.log("inside healthcheck else")
                Comp === 'ISPM' && this.setState({ ISPMFlag: false })
                Comp === 'IDS' && this.setState({ IDSFlag: false })
                Comp === 'ISM' && this.setState({ ISMFlag: false })
                Comp === 'IACS' && this.setState({ IACSFlag: false })
                Comp === 'OACS' && this.setState({ OACSFlag: false })
                Comp === 'IDIM' && this.setState({ IDIMFlag: false })
            }
            // console.log("in selecttgtmaca: ", this.state.ISPMFlag)
        })
            .catch(error =>
                console.log(error))
    }
    submitTargetMachine = (event) => {
        if (this.state.selectedTargetMachineOption !== "") {
            console.log("test  inside submit")
            const URL = axios.defaults.baseURL + this.state.selectedTargetMachineOption + Constants.COLON

            this.getHealthChech(URL, Constants.ISPM_PORT, Constants.ISPM_HEALTHCHECH_URL, 'ISPM')
            this.getHealthChech(URL, Constants.IDS_PORT, Constants.IDS_HEALTHCHECH_URL, 'IDS')
            this.getHealthChech(URL, Constants.ISM_PORT, Constants.ISM_HEALTHCHECH_URL, 'ISM')
            this.getHealthChech(URL, Constants.IACS_PORT, Constants.IACS_HEALTHCHECH_URL, 'IACS')
            this.getHealthChech(URL, Constants.OACS_PORT, Constants.OACS_HEALTHCHECH_URL, 'OACS')
            this.getHealthChech(URL, Constants.IDIM_PORT, Constants.IDIM_HEALTHCHECH_URL, 'IDIM')

            this.props.updateTargetMachineFlagMethod(this.state.selectedTargetMachineOption,
                true,
                this.state.ISPMFlag,
                this.state.IDSFlag,
                this.state.IACSFlag,
                this.state.OACSFlag,
                this.state.IDIMFlag,
                this.state.ISMFlag)
            event.preventDefault()
        }
    }
    render() {
        return (
            <div>
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
                        <button type="submit" className="submit-btn">Submit</button>
                        {/*<Button
                        type={"primary"}
                        title="Submit"
                    */}
                    </div>

                </form>

            </div>
        )
    }
}
export default SelectTargetMachine