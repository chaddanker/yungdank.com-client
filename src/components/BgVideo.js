// background video player component
import React, { Component, createRef } from 'react';

import './BgVideo.scss';

class BgVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            },
            visible: false
        };
        this.playerRef = createRef();
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.resize);
        this.playerRef.current.play();
    }

    resize = () => {
        
        if(this.state.window.width !== window.innerWidth ||
            this.state.window.height !== window.innerHeight) {
                this.setState({
                    window: {
                        height: window.innerHeight,
                        width: window.innerWidth
                    }
                });          
        }
    }

    render() {
        return (
            <div className="video-background">
                <div className="video-foreground">
                <video ref={this.playerRef} height="100%" width="100%" muted="muted" autoPlay loop playsInline>
                    <source src="./videos/YUNGDANKBG.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        );        
    }
}

export default BgVideo;