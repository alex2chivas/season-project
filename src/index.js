import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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

	render() {
		const RenderLat = () => {
			if (this.state.errorMessage && !this.state.lat) {
				return <div> Error: {this.state.errorMessage}</div>;
			}

			if (!this.state.errorMessage && this.state.lat) {
				return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
			}

			return <div>Loading!</div>;
		};

		return <RenderLat />;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
