import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackButton from './BackButton';
import { sendEmail } from '../actions';

class Contact extends Component {

	state = {
		name: '',
		email: '',
		message: '',
		status: ''
	};

	onSendClick = (event) => {
		event.preventDefault();
		const { name, email, message } = this.state;
		const form = {
			name,
			email,
			message
		};
		this.setState({
			status: 'busy'
		});
		this.props.sendEmail(form);
		setTimeout(() => {
			this.setState({
				status: 'done'
			});
		}, 2000);

	}

	render() {
		return (
			<div>
			<BackButton />
			<div style={{ width: '80%', margin: '0 10%' }}>
			<h1 className="ui inverted header" style={{ fontFamily: 'Gothic', fontWeight: 100 }}>Contact</h1>
				<form className="ui form">
				<div className="field">
					<label>Name</label>
					<input type="text" name="name" onChange={event => this.setState({name: event.target.value})} value={this.state.name} placeholder="name" />
				</div>
				<div className="field">
					<label>Email</label>
					<input type="text" name="email" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="Email" />
				</div>
				<div className="field">
					<label>Message</label>
					<textarea name="message" onChange={event => this.setState({message: event.target.value})} value={this.state.message} placeholder="Message" ></textarea>
				</div>
				<button onClick={(event) => this.onSendClick(event)} className="ui button" type="submit" style={{ width: "100%", marginTop: "2em" }}>
			{this.state.status === "" ? <i className="ui big paper plane icon"></i> : this.state.status === "busy" ? <div class="ui active centered inline loader"></div> : <i className="ui big check icon"></i>}</button>
				</form>
			</div>
		</div>
		);		
	}
}

export default connect(null, { sendEmail })(Contact);