import { Component, useEffect, useState } from 'react';
import { ProfileShimmer } from '../../Shimmer';
import UserContext from '../../../data/UserContext';

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
						<a href={html_url} target='_blank' className="active">{login}</a>
					</li>
					<li className="list-group-item border-0 px-0">
						<UserContext.Consumer>
							{(data) => (
								<small>
									Logged in as :
									<strong>{data.loggedUser}</strong>
								</small>

							)}
						</UserContext.Consumer>
					</li>
				</ul>
			</div >
		)
	}
}

export default GithubProfile;
