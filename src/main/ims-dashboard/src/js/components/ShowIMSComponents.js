import React, { Component } from 'react'
import { FaCheck, FaTimes } from "react-icons/fa";
import { IMSComponentRunningConsumer } from './IMSComponentContext';
import axios from 'axios'
import * as Constants from '../components/common/Constants'
class ShowIMSComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            URL: axios.defaults.baseURL + this.props.machineName + Constants.COLON,
        }
    }

    renderIcon(compName) {
        return (
            <IMSComponentRunningConsumer>{
                (imsrunningFlag) => {
                    //console.log("in showIMSComp ", imsrunningFlag,compName)
                    if (imsrunningFlag[compName])
                        return (
                            <FaCheck color='green' />
                        )
                    else {
                        return (
                            <FaTimes color="red" />
                        )
                    }
                }
            }
            </IMSComponentRunningConsumer>);
    }

    showLink(compName) {
        return (
            <IMSComponentRunningConsumer>{
                (imsrunningFlag) => {
                    console.log("in showIMSComp ", imsrunningFlag, compName)
                    let compPort = ""
                    switch (compName) {
                        case 'ISPM':
                            compPort = Constants.ISPM_PORT
                            break;
                        case 'IDS':
                            compPort = Constants.IDS_PORT
                            break;
                        case 'IDIM':
                            compPort = Constants.IDIM_PORT
                            break;
                        case 'ISM':
                            compPort = Constants.ISM_PORT
                            break;
                        case 'IACS':
                            compPort = Constants.IACS_PORT
                            break;
                        case 'OACS':
                            compPort = Constants.OACS_PORT
                            break;

                        default:
                            break;
                    }
                    if (imsrunningFlag[compName])
                        return (
                            <a href={this.state.URL + compPort + '/api'} target="_blank">
                                <button type="button" className="btn btn-link">{compName}</button>
                            </a>
                        )
                    else {
                        return (
                            <a href={URL + compPort + '/api'} target="_blank" onClick={(event) => event.preventDefault()}>
                                <button type="button" className="btn btn-link">{compName}</button>
                            </a>
                        )
                    }
                }
            }
            </IMSComponentRunningConsumer>);
    }

    render() {
        //console.log("ispm flag ",this.props.IMSFlag.ispm)
        return (
            <React.Fragment >
                <table className="showComponents">
                    <thead><tr>
                        <th>Component</th>
                        <th>status</th>
                        <th>click to open</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> ISPM </td>
                            <td>{this.renderIcon("ISPM")}</td>
                            <td>{this.showLink('ISPM')}</td>
                        </tr>
                        <tr>
                            <td> IDS </td>
                            <td>{this.renderIcon("IDS")}</td>
                            <td>{this.showLink('IDS')}</td>
                        </tr>
                        <tr>
                            <td> IDIM </td>
                            <td>{this.renderIcon("IDIM")}</td>
                            <td>{this.showLink('IDIM')}</td>
                        </tr>
                        <tr>
                            <td> IMS </td>
                            <td>{this.renderIcon("ISM")}</td>
                            <td>{this.showLink('ISM')}</td>
                        </tr>
                        <tr>
                            <td> IACS </td>
                            <td>{this.renderIcon("IACS")}</td>
                            <td>{this.showLink('IACS')}</td>
                        </tr>
                        <tr>
                            <td> OACS </td>
                            <td>{this.renderIcon("OACS")}</td>
                            <td>{this.showLink('OACS')}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
export default ShowIMSComponents
