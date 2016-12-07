import React from 'react';
import { render } from 'react-dom';
import { Button, Form, Input, TextArea, Group } from 'semantic-ui-react';
import FooterPage from './FooterPage.js';



class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			original_speech: ' ',
			converted_speech : ' ',
			value: ''
			}
		this.onTextChange = this.onTextChange.bind(this);
		this.storeSpeech = this.storeSpeech.bind(this);
	}
	
	onTextChange(e,inText){
		var _x =  inText.value;
		_x = String(_x).replace(/r/gi,'rr');
		_x = String(_x).replace(/s/gi,'sss');
		this.setState({
			value: e.target.value,
			original_speech: inText.value,
			converted_speech: _x
		});
	}
	
	storeSpeech(e){
		console.log(this.state);
		var _y = this.state.rowData;
		_y.push({original:this.state.original_speech, converted: this.state.converted_speech})
		
		this.setState({rowData:_y});
		
	}
	
	// in onGridReady, store the api for later use
	onGridReady(params) {
		this.api = params.api;
		this.columnApi = params.columnApi;
	}
	// use the api some point later!
	somePointLater() {
		this.api.selectAll();
		this.columnApi.setColumnVisible('country', visible);
	}
	
  render () {
	const stylemap = require('./index.scss');
    return (
	  <div>
		<div className="contentBody">
		<h1>Character Sheet Generator</h1>
		<p>Use this page to generate, save, and store a character sheet</p>
		<Form>
			<Form.Input label='Name' name='name' placeholder='Name' />
			
			<Form.Input label='Proficiencies' name='proficiencies' placeholder='' />		
			<Form.Input label='Languages' name='languages' placeholder='' />
			
			<Form.Group>
				<Form.Field>
					<h3>Stats</h3>
					<Form.Input label='STR' name='str' placeholder='10' size='2'/>
					<Form.Input label='DEX' name='dex' placeholder='10' size='2' />
					<Form.Input label='CON' name='con' placeholder='10' size='2' />
					<Form.Input label='WIS' name='wis' placeholder='10' size='2' />
					<Form.Input label='INT' name='int' placeholder='10' size='2' />
					<Form.Input label='CHA' name='cha' placeholder='10' size='2' />
				</Form.Field>
				
				<Form.Field>
					<h3>Modifiers</h3>
					<Form.Input label='STR' name='str_mod' placeholder='10' size='2' />
					<Form.Input label='DEX' name='dex_mod' placeholder='10' size='2' />
					<Form.Input label='CON' name='con_mod' placeholder='10' size='2' />
					<Form.Input label='WIS' name='wis_mod' placeholder='10' size='2' />
					<Form.Input label='INT' name='int_mod' placeholder='10' size='2' />
					<Form.Input label='CHA' name='cha_mod' placeholder='10' size='2' />
				</Form.Field>
				
				<Form.Field>
					<h3>Saves</h3>
					<Form.Input label='STR' name='str_save' placeholder='10' size='2' />
					<Form.Input label='DEX' name='dex_save' placeholder='10' size='2' />
					<Form.Input label='DEX' name='con_save' placeholder='10' size='2' />
					<Form.Input label='WIS' name='wis_save' placeholder='10' size='2' />
					<Form.Input label='INT' name='int_save' placeholder='10' size='2' />
					<Form.Input label='CHA' name='cha_save' placeholder='10' size='2' />
				</Form.Field>
				
				<Form.Field>
					<h3>Skills</h3>
					<Form.Input labelPosition='rightcorner' label='Acrobatics (Dex)' name='acrobatics_dex' placeholder='' />
					<Form.Input labelPosition='left' label='Animal Handling (Wis)' name='animal_handling_wis' placeholder='' />
					<Form.Input labelPosition='left' label='Arcana (Int)' name='arcana_int' placeholder='' />
					<Form.Input labelPosition='left' label='Athletics (Str)' name='athletics_str' placeholder='' />
					<Form.Input labelPosition='left' label='Deception (Cha)' name='deception_cha' placeholder='' />
					<Form.Input labelPosition='left' label='History (Int)' name='history_int' placeholder='' />
					<Form.Input labelPosition='left' label='Insight (Wis)' name='insight_wis' placeholder='' />
					<Form.Input labelPosition='left' label='Intimidation (Cha)' name='intimidation_cha' placeholder='' />
					<Form.Input labelPosition='left' label='Investigation (Int)' name='investigation_int' placeholder='' />
					<Form.Input labelPosition='left' label='Medicine (Wis)' name='medicine_wis' placeholder='' />
					<Form.Input labelPosition='left' label='Nature (Int)' name='nature_int' placeholder='' />
					<Form.Input labelPosition='left' label='Perception (Wis)' name='perception_wis' placeholder='' />
					<Form.Input labelPosition='left' label='Persuasion (Cha)' name='persuasion_cha' placeholder='' />
					<Form.Input labelPosition='left' label='Religion (Int)' name='religion_int' placeholder='' />
					<Form.Input labelPosition='left' label='Slight of Hand (Dex)' name='slight_of_hand_dex' placeholder='' />
					<Form.Input labelPosition='left' label='Stealth (Dex)' name='stealth_dex' placeholder='' />	
					<Form.Input labelPosition='left' label='Survival (Wis)' name='survival_wis' placeholder='' />				
				</Form.Field>
			</Form.Group>
			
			
			<Form.Group widths='3'>
				
				
				
			</Form.Group>
			
			
			
			<Form.Group>
				<Form.Input label='Armor Class' name='ac' placeholder='10' />
				<Form.Input label='Initiative' name='init' placeholder='+0' />
				<Form.Input label='Speed' name='speed' placeholder='30' />
			</Form.Group>
			<Form.Group>
				<Form.Input label='Hit Points' name='hp' placeholder='0' />
				<Form.Input label='Hit Dice' name='hit_die' placeholder='1d6' />
				<Form.Input label='Passive Perception' name='perception_passive' placeholder='10' />
			</Form.Group>
			
			
			<Form.Group>
				<Form.Input label='Class & Level' name='class' placeholder='Class chosen' />
				<Form.Input label='Background' name='background' placeholder='' />
				<Form.Input label='Player Name' name='player_name' placeholder='Player Name' />
				
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Race' name='race' placeholder='' />
				<Form.Input label='Alignment' name='alignment' placeholder='' />
				<Form.Input label='Experience Points' name='xp' placeholder='' />
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Age' name='age' placeholder='' />
				<Form.Input label='Height' name='height' placeholder='' />
				<Form.Input label='Weight' name='weight' placeholder='' />
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Eyes' name='eyes' placeholder='' />
				<Form.Input label='Skin' name='skin' placeholder='' />
				<Form.Input label='Hair' name='hair' placeholder='' />
			</Form.Group>
			
			
			<Form.Input label='Senses' name='senses' placeholder='' />
			<Form.Input label='Features & Traits' name='features' placeholder='' />
			
			<Form.TextArea label='Equipment & Gear' name='equipment' placeholder='' />	
			
			<Form.TextArea label='Actions' name='actions' placeholder='' />		
			<Form.TextArea label='Bonus Actions' name='actions_bonus' placeholder='' />		
			<Form.TextArea label='Reactions' name='reactions' placeholder='' />		
			
			 
			 
			 
			 
			
			
		</Form>
		
		
		</div>
		<FooterPage />
	  </div>
	);
  }
}

render(<App/>, document.getElementById('app'));