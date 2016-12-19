import React from 'react';
import { render } from 'react-dom';
import { Button, Form, Input, TextArea, Group } from 'semantic-ui-react';

class StatblockForm extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			
		}
		this.onButtonPress = this.onButtonPress.bind(this);
		this.importJson = this.importJson.bind(this);
		this.exportJson = this.exportJson.bind(this);
		// this.setValue = this.setValue.bind(this);
		
	}
	
	onButtonPress(e){
		e.preventDefault();
		console.log('State before export',this.state);
		//console.log(this.state);
		//console.log(this.props);
		//console.log(this.refs);
		this.exportJson();
		
		console.log('state',this.state);
		
	}
	importJson(e){
		console.log('importJson(event)',e);
		console.log('importJson(state)',this.state.output);
		let _o = JSON.parse(this.state.output);
		this.setState(_o);
	}
	exportJson(){
		let _o = this.state;
		delete _o.fieldValues;
		delete _o.output;
		let object = {};
		object['output'] = JSON.stringify(_o);
		this.setState(object);
	}
	setValue(field, event) {
		//If the input fields were directly within this
		//this component, we could use this.refs.[FIELD].value
		//Instead, we want to save the data for when the form is submitted
		var object = {};
		object[field] = event.target.value;
		this.setState(object);
	}
	
	render () {
		return (<Form onSubmit={this.onButtonPress}>
			
			<Input
				label='Name'
				name='pcname'
				placeholder='The name of the player' 
				value={this.state.pcname}
					
				onChange={this.setValue.bind(this,'pcname')}
				/>
			<Input 
				label='Proficiencies'
				name='proficiencies'
				onChange={this.setValue.bind(this,'proficiencies')}
				value={this.state.proficiencies}
				/>		
			<Input 
				label='Languages' 
				name='languages'
				onChange={this.setValue.bind(this,'languages')}
				value={this.state.languages}
				/>
		{/*}
			<h3>Stats</h3>
			<Input 
				label='STR'
				 placeholder='10' 
				name='str'
				onChange={this.setValue.bind(this,'str')}
				/>
			<Input 
				label='DEX' 
				name='dex'
				onChange={this.setValue.bind(this,'dex')}
				placeholder='10' 
				/>
			<Input 
				label='CON' 
				name='con'
				onChange={this.setValue.bind(this,'con')}
				placeholder='10' 
				/>
			<Input 
				label='WIS' 
				name='wis' 
				onChange={this.setValue.bind(this,'wis')}
				placeholder='10' 
				/>
			<Input 
				label='INT' 
				name='int' 
				onChange={this.setValue.bind(this,'int')}
				placeholder='10' 
				/>
			<Input 
				label='CHA' 
				name='cha' 
				onChange={this.setValue.bind(this,'cha')}
				placeholder='10' 
				/>
				<br/>
	*/}
			
			<Button type="submit" value="Submit" >Export Statblock</Button>
			
			<Form.TextArea 
				name="jsonfield" 
				label="JSON Output" 
				placeholder="The text output for the current statblock will appear here. Copy and save the text here to resume working on this statblock" 
				rows='3' 
				onChange={this.setValue.bind(this,'output')}
				value={this.state.output}
				/>
			<Button onClick={this.importJson}>Import JSON</Button>
			
			</Form>)
	}

			
			}
			export default StatblockForm