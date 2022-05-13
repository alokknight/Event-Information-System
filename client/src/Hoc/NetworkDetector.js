
import React, { Component } from 'react';
import Help from '../components/Help';
import Bouncer from '../components/Bouncer';
export default function (ComposedComponent) {
    class NetworkDetector extends Component {
        state = {
            isDisconnected: false
        }

        componentDidMount() {
            this.handleConnectionChange();
            window.addEventListener('online', this.handleConnectionChange);
            window.addEventListener('offline', this.handleConnectionChange);
        }

        componentWillUnmount() {
            window.removeEventListener('online', this.handleConnectionChange);
            window.removeEventListener('offline', this.handleConnectionChange);
        }


        handleConnectionChange = () => {
            const condition = navigator.onLine ? 'online' : 'offline';
            if (condition === 'online') {
                const webPing = setInterval(
                    () => {
                        fetch('//google.com', {
                            mode: 'no-cors',
                        })
                            .then(() => {
                                this.setState({ isDisconnected: false }, () => {
                                    return clearInterval(webPing)
                                });
                            }).catch(() => this.setState({ isDisconnected: true }))
                    }, 2000);
                return;
            }

            return this.setState({ isDisconnected: true });
        }

        render() {
            const { isDisconnected } = this.state;
            return (
                <div>
                    {isDisconnected && (<div className="internet-error mt-4">
                        <Bouncer/>
                        {/* <h2
                            style={{color:'red', "text-align":'center'}}>
                            Internet connection lost 💔
                        </h2> */}
                        <h2
                            style={{color:'red',"text-align":'center'}}>
                            Bhai Bhai !!! phle net check kar tu apna.
                            <br/>
                        </h2>
                        <Help/>
                    </div>)
                    }
                    <ComposedComponent {...this.props} />
                </div>
            );
        }
    }

    return NetworkDetector;
}