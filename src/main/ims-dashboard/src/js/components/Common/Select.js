import React, { Component } from 'react'
import { Input, Label, FormGroup } from 'reactstrap'

function Select(props) {
    return (
        <FormGroup>
            <Label for={props.name}>{props.title}</Label><br/>
            <Input type="select"
                name={props.name}
                value={props.value}
                onChange={props.controlFunc}
                required={props.required ? true : false}>
                <option value="" disabled>Select Target Machine</option>
                {props.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}

            </Input>
        </FormGroup>

    )
}
export default Select