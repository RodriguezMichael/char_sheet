import React from 'react';
import { render } from 'react-dom';
import { Button, Form, Input, TextArea, Group } from 'semantic-ui-react';
import FooterPage from './FooterPage.js';
import StatblockForm from './StatblockForm.js';



class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fieldValues: props.fieldValues,
			output: ''
			};
		
		//this.handleChange = this.handleChange.bind(this);
	}
	
	
	render () {
		const stylemap = require('./index.scss');
		var fieldValues = {pcname: '', proficiencies: '', languages: ''}
		return (
		<div>
			<div className="contentBody">
			<h1>Character Sheet Generator</h1>
			<p>Use this page to generate, save, and store a character sheet</p>
			
			<StatblockForm />
			
			
		
			</div>
			<FooterPage />
			</div>
		);
	}
}

render(<App/>, document.getElementById('root'));