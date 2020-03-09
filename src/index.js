import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			errorMessage: ""
		};

		window.navigator.geolocation.getCurrentPosition(
			position => {
				const { latitude, longitude } = position.coords;

				this.setState({
					lat: latitude
				});
			},
			err => {
				this.setState({
					errorMessage: err.message
				});
			}
		);
	}

	render() {
		const RenderLat = () => {
			if (this.state.errorMessage && !this.state.lat) {
				return <div> Error: {this.state.errorMessage}</div>;
			}

			if (!this.state.errorMessage && this.state.lat) {
				return <div> Latitude: {this.state.lat}</div>;
			}

			return <div>Loading!</div>;
		};

		return <RenderLat />;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
