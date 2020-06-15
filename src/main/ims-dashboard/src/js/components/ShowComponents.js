import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-fresh.css';
class ShowComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [
                {
                    headerName: 'Component Name', field: 'componentName'
                },
                {
                    headerName: 'Status', field: 'status'
                }
            ],
            rowData: [
                { componentName: 'IDS', status: 'ispm' },
                { componentName: 'ISPM', status: 'ids' },
                { componentName: 'ISM', status: 'ispm' },
                { componentName: 'IACS', status: 'ispm' },
                { componentName: 'OACS', status: 'ispm' },
                { componentName: 'IDIM', status: 'ispm' },
            ]
        }
    }
    render() {
        return (
            <div className="showComponents">
                <div className="ag-theme-fresh" style={{ height: '250px', width: '500px' }}>

                    <AgGridReact
                        columnDefs={this.state.columnDefs}

                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        )
    }
}
export default ShowComponents
