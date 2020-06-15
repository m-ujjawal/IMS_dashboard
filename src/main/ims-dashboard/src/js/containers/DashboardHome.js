import React, { Component } from 'react'
import Header from '../components/Header'

import '../../css/app.css'
import ShowComponents from '../components/ShowComponents'
import SelectTargetMachine from '../components/SelectTargetMachine'

class DashboardHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <SelectTargetMachine />
                <div>
                    <ShowComponents />
                </div>
            </div>
        )
    }
}
export default DashboardHome