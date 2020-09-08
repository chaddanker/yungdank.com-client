import React, { Component } from 'react';
import YouTube from 'react-youtube';

import './BgYtPlayer.scss';

class Video extends Component {

    state = {
        window: {
            height: window.innerHeight,
            width: window.innerWidth
        },
        visible: false
    };

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }
      
      _onEnd(event) {
        event.target.playVideo();
      }

    componentDidMount = () => {
        window.addEventListener('resize', this.resize);

        this.timer = setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 4000);
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
        const videoOptions = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              controls: 0,
              rel: 0,
              showinfo: 0,
              loop: 1,
              mute: 1
            }
          };

        return (
    <div className="video-background">
        <div className="video-foreground">
            <YouTube
                videoId="Q_3r8R3YSk0"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
            />
        </div>
    </div>
        );        
    }
}

export default Video;