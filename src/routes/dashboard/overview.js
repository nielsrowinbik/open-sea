import Container from 'components/Container';
import Header from 'components/Header';
import Main from 'components/Main';
import Placeholder from 'components/Placeholder';
import React from 'react';

const Overview = () => (
	<Main>
		<Header title="Dashboard" />
		<Container>
			<Placeholder>
				<h1>You're all caught up!</h1>
				<p>There are no tasks waiting for you to work on them.</p>
			</Placeholder>
		</Container>
	</Main>
);

export default Overview;