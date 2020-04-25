import React from 'react';
import './appHeader.scss';

class AppHeader extends React.Component {

	render() {
		return (
			<div className="app-header-container">
				<h1 className="header-text">
					User Details Portal
				</h1>
			</div>
		)
	}
}

export default AppHeader;