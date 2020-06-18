import React, { Component } from 'react'
import Header from '../components/Header'
import '../../css/app.css'
import ShowIMSComponents from '../components/ShowIMSComponents'
import SelectTargetMachine from '../components/SelectTargetMachine'
import { IMSComponentRunningProvider } from '../components/IMSComponentContext'

class DashboardHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMachine:"",
            selectedTargetMachineFlag: false,
            ISPMFlag: false,
            IDSFlag: false,
            IACSFlag: false,
            OACSFlag: false,
            IDIMFlag: false,
            ISMFlag: false
        }
    }

    updateSelectTargetMachineFlag = (selectedMachine,SelectedMachineflag, ispmFlag, idsFlag, iacsFlag, oacsFlag, idimFlag, ismFlag) => {
        this.setState({
            selectedMachine:selectedMachine,
            selectedTargetMachineFlag: SelectedMachineflag,
            ISPMFlag: ispmFlag,
            IDSFlag: idsFlag,
            IACSFlag: iacsFlag,
            OACSFlag: oacsFlag,
            IDIMFlag: idimFlag,
            ISMFlag: ismFlag
        })
        //console.log("flag in dashboard", SelectedMachineflag, ispmFlag)
    }
    render() {
        return (
            <div>
                <Header />
                <SelectTargetMachine updateTargetMachineFlagMethod={this.updateSelectTargetMachineFlag} />
                <div>
                    <IMSComponentRunningProvider value={{
                        ISPM: this.state.ISPMFlag,
                        IDS: this.state.IDSFlag,
                        IDIM: this.state.IDIMFlag,
                        ISM: this.state.ISMFlag,
                        IACS: this.state.IACSFlag,
                        OACS: this.state.OACSFlag
                    }}>
                        {this.state.selectedTargetMachineFlag && <ShowIMSComponents machineName={this.state.selectedMachine}/>}
                    </IMSComponentRunningProvider>
                </div>
            </div>
        )
    }
}
export default DashboardHome