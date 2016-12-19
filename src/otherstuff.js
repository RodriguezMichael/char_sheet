
			<Form.Group>
				<Form.Field>
					<h3>Stats</h3>
					<Form.Input label='STR' value={this.state.str} placeholder='10' />
					<Form.Input label='DEX' value={this.state.dex} placeholder='10' />
					<Form.Input label='CON' value={this.state.con} placeholder='10' />
					<Form.Input label='WIS' value={this.state.wis} placeholder='10' />
					<Form.Input label='INT' value={this.state.int} placeholder='10' />
					<Form.Input label='CHA' value={this.state.cha} placeholder='10' />
				</Form.Field>
				
				<Form.Field>
					<h3>Modifiers</h3>
					<Form.Input label='STR' value={this.state.str_mod} placeholder='10' />
					<Form.Input label='DEX' value={this.state.dex_mod} placeholder='10' />
					<Form.Input label='CON' value={this.state.con_mod} placeholder='10' />
					<Form.Input label='WIS' value={this.state.wis_mod} placeholder='10' />
					<Form.Input label='INT' value={this.state.int_mod} placeholder='10' />
					<Form.Input label='CHA' value={this.state.cha_mod} placeholder='10' />
				</Form.Field>
				
				<Form.Field>
					<h3>Saves</h3>
					<Form.Input label='STR' value={this.state.str_save} placeholder='10' />
					<Form.Input label='DEX' value={this.state.dex_save} placeholder='10' />
					<Form.Input label='DEX' value={this.state.con_save} placeholder='10' />
					<Form.Input label='WIS' value={this.state.wis_save} placeholder='10' />
					<Form.Input label='INT' value={this.state.int_save} placeholder='10' />
					<Form.Input label='CHA' value={this.state.cha_save} placeholder='10' />
				</Form.Field>
				
				<Form.Field>
					<h3>Skills</h3>
					<Form.Input label='Acrobatics (Dex)' value={this.state.acrobatics_dex} placeholder='' />
					<Form.Input label='Animal Handling (Wis)' value={this.state.animal_handling_wis} placeholder='' />
					<Form.Input label='Arcana (Int)' value={this.state.arcana_int} placeholder='' />
					<Form.Input label='Athletics (Str)' value={this.state.athletics_str} placeholder='' />
					<Form.Input label='Deception (Cha)' value={this.state.deception_cha} placeholder='' />
					<Form.Input label='History (Int)' value={this.state.history_int} placeholder='' />
					<Form.Input label='Insight (Wis)' value={this.state.insight_wis} placeholder='' />
					<Form.Input label='Intimidation (Cha)' value={this.state.intimidation_cha} placeholder='' />
					<Form.Input label='Investigation (Int)' value={this.state.investigation_int} placeholder='' />
					<Form.Input label='Medicine (Wis)' value={this.state.medicine_wis} placeholder='' />
					<Form.Input label='Nature (Int)' value={this.state.nature_int} placeholder='' />
					<Form.Input label='Perception (Wis)' value={this.state.perception_wis} placeholder='' />
					<Form.Input label='Persuasion (Cha)' value={this.state.persuasion_cha} placeholder='' />
					<Form.Input label='Religion (Int)' value={this.state.religion_int} placeholder='' />
					<Form.Input label='Slight of Hand (Dex)' value={this.state.slight_of_hand_dex} placeholder='' />
					<Form.Input label='Stealth (Dex)' value={this.state.stealth_dex} placeholder='' />	
					<Form.Input label='Survival (Wis)' value={this.state.survival_wis} placeholder='' />				
				</Form.Field>
			</Form.Group>
			
			
			<Form.Group widths='3'>
				
				
				
			</Form.Group>
			
			
			
			<Form.Group>
				<Form.Input label='Armor Class' value={this.state.ac} placeholder='10' />
				<Form.Input label='Initiative' value={this.state.init} placeholder='+0' />
				<Form.Input label='Speed' value={this.state.speed} placeholder='30' />
			</Form.Group>
			<Form.Group>
				<Form.Input label='Hit Points' value={this.state.hp} placeholder='0' />
				<Form.Input label='Hit Dice' value={this.state.hit_die} placeholder='1d6' />
				<Form.Input label='Passive Perception' value={this.state.perception_passive} placeholder='10' />
			</Form.Group>
			
			
			<Form.Group>
				<Form.Input label='Class & Level' value={this.state.class} placeholder='Class chosen' />
				<Form.Input label='Background' value={this.state.background} placeholder='' />
				<Form.Input label='Player Name' value={this.state.player_name} placeholder='Player Name' />
				
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Race' value={this.state.race} placeholder='' />
				<Form.Input label='Alignment' value={this.state.alignment} placeholder='' />
				<Form.Input label='Experience Points' value={this.state.xp} placeholder='' />
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Age' value={this.state.age} placeholder='' />
				<Form.Input label='Height' value={this.state.height} placeholder='' />
				<Form.Input label='Weight' value={this.state.weight} placeholder='' />
			</Form.Group>
			
			<Form.Group>
				<Form.Input label='Eyes' value={this.state.eyes} placeholder='' />
				<Form.Input label='Skin' value={this.state.skin} placeholder='' />
				<Form.Input label='Hair' value={this.state.hair} placeholder='' />
			</Form.Group>
			
			
			<Form.Input label='Senses' value={this.state.senses} placeholder='' />
			<Form.Input label='Features & Traits' value={this.state.features} placeholder='' />
			
			<Form.TextArea label='Equipment & Gear' value={this.state.equipment} placeholder='' />	
			
			<Form.TextArea label='Actions' value={this.state.actions} placeholder='' />		
			<Form.TextArea label='Bonus Actions' value={this.state.actions_bonus} placeholder='' />		
			<Form.TextArea label='Reactions' value={this.state.reactions} placeholder='' />		
			