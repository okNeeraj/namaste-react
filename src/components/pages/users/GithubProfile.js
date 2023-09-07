import { Component, useEffect, useState } from 'react';
import { ProfileShimmer } from '../../Shimmer';

class GithubProfile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { login, name, html_url, bio } = this.props.data;
		return (this.props.data === '') ? <ProfileShimmer /> : (
			<div className="user-details">
				<h1 className="user-name">{name}</h1>
				<small>{bio}</small>
				<ul className="list-group border-0 px-0 mb-3">
					<li className="list-group-item border-0 px-0">
						<a href={html_url} className="active">{login}</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default GithubProfile;
