import React, { Component } from 'react';

class Result extends Component {

	renderData(){
		return (
			<div>
				{this.props.recipes.map((ingredients, index) => {
					return (
						<div className="list" key={index}>
							Name: {ingredients.name} <br/>
							Calories: {ingredients.calories} <br/>
							Protein: {ingredients.protein} <br/>
							Sugar: {ingredients.sugar}<br/>
						</div>
					)
				})}
			</div>
		);
	}
	
	render(){
		return(
			<div>
				{this.renderData()}
			</div>
		);
	}
}

export default Result