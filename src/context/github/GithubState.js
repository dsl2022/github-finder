import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from 'context/github/githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const GithubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	};

	const [ state, dispatch ] = useReducer(GithubReducer, initialState);

	// Search Users
	const searchUsers = async (text) => {
		setLoading();
		const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
		${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
		${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
		// setUsers(res.data.items);
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items
		});
	};
	// Get User
	const getUser = async (username) => {
		setLoading();
		const res = await axios.get(`https://api.github.com/users/${username}?client_id=
		${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
		${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		dispatch({
			type: GET_USER,
			payload: res.data
		});
	};
	// Clear user
	const clearUsers = () => {
		dispatch({
			type: CLEAR_USERS
		});
	};
	// Get Repos
	const getUserRepos = async (username) => {
		setLoading();
		const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
		${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
		${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
		dispatch({
			type: GET_REPOS,
			payload: res.data
		});
	};
	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });
	// showClear
	const showClear = state.users.length > 0 ? true : false;
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				showClear: showClear,
				searchUsers,
				getUser,
				clearUsers,
				getUserRepos
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
