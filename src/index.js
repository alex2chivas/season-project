import '../src/seasonDisplay.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

import Spinner from './Spinner'

class App extends Component {
	state = { lat: null, long: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords;
				this.setState({ lat: latitude, long: longitude });
			},
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent () {
			if (this.state.errorMessage && !this.state.lat) {
				return <div> Error: {this.state.errorMessage}</div>
			}

			if (!this.state.errorMessage && this.state.lat) {
				return <SeasonDisplay lat = {this.state.lat}/>
			}

			return <Spinner message = {'Please accept location request'}/>		
	}

	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		)
	};
}

ReactDOM.render(<App />, document.querySelector('#root'));
