import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon, Divider, Flag } from 'semantic-ui-react';

class FooterPage extends React.Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<footer>
			Page made by Michael Rodriguez
			<br/>
			<a href="https://github.com/RodriguezMichael/char_sheet"
				target="new">
				View On Github </a>
			</footer>
		)
	}
}

export default FooterPage