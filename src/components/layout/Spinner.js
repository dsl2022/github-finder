import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
	<frameElement>
		<img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
	</frameElement>
);

export default Spinner;
