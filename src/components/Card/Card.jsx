import React from 'react';

import { Card as AntCard } from 'antd';

class Card extends React.Component {
	constructor({ ...otherProps }) {
		super();

		this.state = {
			inside: []
		};
	}

	render() {
		return <AntCard {...otherProps} />;
	}
}

export default Card;
