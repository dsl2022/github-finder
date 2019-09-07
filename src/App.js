import React from 'react';
import './App.css';
import NavBar from 'components/layout/NavBar';
import Users from 'components/users/Users';
function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="container">
				<Users />
			</div>
		</div>
	);
}

export default App;
