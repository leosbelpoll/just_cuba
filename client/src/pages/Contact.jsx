import React, { Fragment, Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Contact extends Component {
	render () {
		return (
			<Fragment>
				<h2>Contact</h2>
				<p>We are the justCuba´s soft_team:</p>
				<div>
					<Map google={this.props.google} zoom={14}>
			
						<Marker onClick={this.onMarkerClick}
								name={'Current location'} />
	
						<InfoWindow onClose={this.onInfoWindowClose}>
							
						</InfoWindow>
					</Map>
				</div>
			</Fragment>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyAj38jFfljrU8yGp5ZeOjydAnXhAfclToY")
  })(Contact)
