import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	};

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
			errorMessage: 'Something went wrong with the Api call'
		});
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>;
		} else {
			// Note returnign the children helps render the divs that we wrap the other components or divs
			return this.props.children;
		}
	}
}

export default ErrorBoundary;
