import '../src/seasonDisplay.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

import Spinner from './Spinner';
import Uselocation from './userLocation';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
	const [ lat, errorMessage ] = Uselocation();

	let content;
	if (errorMessage) {
		content = <div>Error: {errorMessage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message={'Please accept location request'} />;
	}

	return (
		<ErrorBoundary>
			<div className='border red'>{content}</div>
		</ErrorBoundary>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
