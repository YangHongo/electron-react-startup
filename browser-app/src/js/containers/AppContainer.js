import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppContainer extends Component {

    handleWindowClose() {
        remote.app.dock.hide();
        remote.getCurrentWindow().hide();
    }

    handleWindowMinimize() {
        remote.getCurrentWindow().minimize();
    }

    handleWindowToggleMaximize() {
        if (remote.getCurrentWindow().isMaximized()) {
            remote.getCurrentWindow().unmaximize();
        } else {
            remote.getCurrentWindow().maximize();
        }
    }

    render() {
        return (
            <div>
                <div onDoubleClick={this.handleWindowToggleMaximize}>
                    <button onClick={this.handleWindowClose}>X</button>
                    <button onClick={this.handleWindowMinimize}>-</button>
                    <button onClick={this.handleWindowToggleMaximize}>
                        {'<>'}
                    </button>

                    {/* <div className='window-header-title'>{this.props.title}</div> */}
                </div>

                <div id='app-content'>
                    <button><a id='open-external' href="https://github.com/YangHong92/">Open</a></button>
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <hr />
                    {this.props.children}
                </div>
            </div>
        )
    }
}