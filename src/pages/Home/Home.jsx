import React from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
	return (
		<Card title="Merhaba" style={{ width: '300px' }}>
			{fetch()}
		</Card>
	);
};

export default Home;
