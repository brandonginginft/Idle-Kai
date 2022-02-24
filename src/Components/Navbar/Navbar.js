import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return(
			<nav>
				<div className='logo'>
					<span>Idle Kai</span>
				</div>
				<a id="github-icon" href="https://idlekai.com" alt="Idle Kai" target="_blank" rel="noopener noreferrer">
					<img height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true" src="logo.png"></img>
				</a>
			</nav>
		);
	}
}

export default Navbar;