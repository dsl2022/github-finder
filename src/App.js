import React from 'react';
import './App.css';
import NavBar from 'components/layout/NavBar';
import UserItem from 'components/users/UserItem';

function App() {
	return (
		<div className="App">
			<NavBar title="Github Finder" icon="fab fa-github" />
			<UserItem />
		</div>
	);
}

export default App;
