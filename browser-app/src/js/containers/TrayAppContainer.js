import React, { Component } from 'react';
import { connect } from 'react-redux';

class TrayAppContainer extends Component {

    handleMainAppOpen(){
        ipcRenderer.send('show-main-window-event');
    }

    handleAboutOpen(){
        ipcRenderer.send('show-about-window-event');
    }

    handleQuitApp(){
        ipcRenderer.send('quit-app');
    }

    handleUpdateTrayTitle(minutes){
        ipcRenderer.send('update-title-tray-window-event', minutes);
    }

    handleWindowNotification(options){
        const notif = new window.Notification(options.title, {
            body: options.message
        })

        notif.onclick = () => {
            window.ipcRenderer.send('show-main-window-event')
        }
    }

    render() {
        return (
            <div>
                TrayAppContainer
                <div>
                    <button>
                        <span onClick={this.handleMainAppOpen.bind(this)}>open Main</span>
                    </button>
                    <button>
                        <span onClick={this.handleAboutOpen.bind(this)}>open About</span>
                    </button>
                    <button>
                        <span onClick={this.handleUpdateTrayTitle.bind(this, '59')}>update tray title</span>
                    </button>
                    <button>
                        <span onClick={this.handleWindowNotification.bind(this,{title: 'notif', message: 'hi test!'})}>show notification</span>
                    </button>
                    <button>
                        <span onClick={this.handleQuitApp.bind(this)}>quit</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { } = state;

    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrayAppContainer);