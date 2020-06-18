import React, { Component } from 'react'
import { ButtonToggle } from 'reactstrap'
class Button extends Component {
    render() {
        // console.log(this.props.title)
        return (
            <div>
                <ButtonToggle 
                    color={this.props.type === 'primary' ? 'primary' : 'secondary'}>
                    {this.props.title}
                </ButtonToggle>{' '}
            </div>
        )
    }
}
export default Button