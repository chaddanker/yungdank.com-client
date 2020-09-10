import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Contact.scss';
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
		if(name === '' ||
		email === '' ||
		message === '') {
			this.setState({
				status: 'Please fill out all fields.'
			});

			return;
		}
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
				<form className="ui form">
					<div className="field">
						<label></label>
						<input className="contact-input" type="text" name="name" onChange={event => this.setState({name: event.target.value})} value={this.state.name} placeholder="Name" />
					</div>
					<div className="field">
						<label></label>
						<input className="contact-input" type="text" name="email" onChange={event => this.setState({email: event.target.value})} value={this.state.email} placeholder="Email" />
					</div>
					<div className="field">
						<label></label>
						<textarea name="message" onChange={event => this.setState({message: event.target.value})} value={this.state.message} placeholder="Message" ></textarea>
					</div>
					<button onClick={(event) => this.onSendClick(event)} className="ui inverted button" type="submit" style={{ width: "100%", marginTop: "2em" }}>
						{
							this.state.status === "" ? 
								<i className="ui big inverted paper plane icon"></i> : 
							this.state.status === "busy" ? 
								<div class="ui active inverted centered inline loader"></div> :
							this.props.emailSent === "sent!" ? 
								<i className="ui big check icon"></i> : 
								<p style={{color: 'red', fontFamily: 'sans-serif'}}>
									{this.state.status}
								</p>
						}
					</button>
				</form>
			</div>
		</div>
		);		
	}
}

const mapStateToProps = ({emailSent}) => {
	return {
		emailSent
	};
};

export default connect(mapStateToProps, { sendEmail })(Contact);