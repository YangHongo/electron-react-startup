import React, { Component } from 'react'
import { render } from 'react-dom'

class About extends Component {
    render() {
        return (
            <div>About</div>
        )
    }
}

render(<About />, document.getElementById('react-root'))