import './main.scss';
import React from 'react';

const SeasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: 'Sun'
	},
	winter: {
		text: 'Burr it is cold',
		iconName: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = SeasonConfig[season];

	return (
		<div className='content-wrapper'>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
