import React, { Component } from 'react';

export default class HoveringIframe extends Component {
    render() {
        return (
            <div style={this.props.style}>
                {this.props.display ? <iframe src={this.props.url}></iframe> : ''}
            </div>
        );

    }
}