import React from 'react';
import RepoItem from 'components/repos/RepoItem';

const Repos = ({ repos }) => {
	return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

export default Repos;
