import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Title from './components/Title';
import Result from './components/Result';
import Submit from './components/Submit';

class App extends Component {
	constructor() {
		super();

		this.state = {
			recipes: [],
			search: '',
			url: 'http://localhost:8080/api/'
		}

		this.getRecipes = this.getRecipes.bind(this);
  	}

	getRecipes(){
		console.log('inside getRecipes')
		const endpoint = this.state.url + 'all/';

		axios
			.get(endpoint)
			.then(response => this.setState({ recipes: response.data.recipes }))
			.catch(err => console.error(err));
	}

	submitIngredients(e){
		console.log('inside submitIngredients');
		e.preventDefault();

		//console.log(this.state.search);

		// GRAB VALUE FROM STATE
		let ingr = this.state.search;

		let endpoint = this.state.url + 'new/'

		axios.post(endpoint, {
			'ingr': ingr
		})
		.then((data) => {
			console.log('sent to DB correctly ', data)
		})
		.catch(err => console.error(err));
	}

	handleChange(e){
		console.log('inside handleChange')
		console.log(e.target.value)
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
		  <div className="App">
			  <Title/>
			  <Submit 
				  submitIngredients={this.submitIngredients.bind(this)}
				  handleChange={this.handleChange.bind(this)}
				  search={this.state.search}
			  />
				<div onClick={() => {this.getRecipes()}}> View Saved </div>
			  <Result 
				  recipes={this.state.recipes}
			  /> 
			</div>
		);
	}
}

export default App;
