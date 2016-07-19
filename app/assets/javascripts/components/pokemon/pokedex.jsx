var Pokedex = React.createClass({
	getInitialState:function(){
		return {
			currentPokedex: this.props.pokemon,
			toBeShown: {errors:[], pokemon:this.props.pokemon},
			limit: 3
		}
	},
	removePokemon:function(pokemon){
		var index = this.state.toBeShown.pokemon.indexOf(pokemon)
		var updatedDisplay= React.addons.update(this.state.toBeShown.pokemon, {$splice: [[index,1]]})
		this.setState({
			toBeShown:{errors:[], pokemon:updatedDisplay}
		})
	},
	shuffle:function(){
		var currentShown = this.state.toBeShown.pokemon
		var currentIndex = currentShown.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    // And swap it with the current element.
		    temporaryValue = currentShown[currentIndex];
		    currentShown[currentIndex] = currentShown[randomIndex];
		    currentShown[randomIndex] = temporaryValue;
		  }
		this.setState({
			toBeshown: {errors:[], pokemon: currentShown } 
		})
	},
	increaseDisplay:function(){
		if (this.state.limit + 5 >= 151) {
			this.setState({
				limit: 151
			})
		}
		else {
			this.setState({
				limit: this.state.limit + 3
			})
		}
		
	},
	handleSearchChange:function(e){
		e.preventDefault()
		var searchString = e.target.value.toLowerCase()
		var searchStringRegEx = new RegExp(searchString)
		var found=[]
		var name;
		for (var i=0; i< this.state.currentPokedex.length; i++) {
			name = this.state.currentPokedex[i].name.toLowerCase()
			if (searchStringRegEx.test(name)) {
				found.push(this.state.currentPokedex[i])
			}
		}
		if (found.length > 0) {
			this.setState({
				toBeShown: {errors:[], pokemon: found}
			})
		}
		else {
			this.setState({
				toBeShown:{errors:['No matches found'], pokemon: found},
				limit:3
			})
		}
	},
	preventSubmit:function(e){
		e.preventDefault()
	},
	pokemonDisplayGenerator:function(limit){
		if (this.state.toBeShown.errors.length == 0) {
			var pokemon = this.state.toBeShown.pokemon
			if (limit > pokemon.length){
				var display = []
				for (var i = 0; i < pokemon.length; i++) {
					display.push(<Pokemon pokemon={pokemon[i]} key={pokemon[i].id} handleRemove={this.removePokemon}/>)
				}
			}
			else {
				var display = []
				for (var i = 0; i < limit; i++) {
					display.push(<Pokemon pokemon={pokemon[i]} key={pokemon[i].id} handleRemove={this.removePokemon}/>)
				}
			}
			return display
		}
		else {
			return <div className="search-error">No matches found</div>
		}
			
	},
	displayShowMore:function(){
		var displayShowMore
		
		if (this.state.limit < 151 ) {
			if (this.state.toBeShown.errors.length > 0){
				return
			}
			else {
				displayShowMore = <div className="display-more"><div className="btn btn-success" onClick={this.increaseDisplay}>Show More</div></div>
			}
		}
		return displayShowMore
	},
	render:function() {
		return (
			<div className="pokedex-container">

				<div className="container-fluid btns-container">
					<form className="form-inline" role="form" onSubmit={this.preventSubmit}>
					  <div className="form-group">
					    <input type="text" className="form-control" placeholder="Search" onChange={this.handleSearchChange}/>
					  </div>
					  <button type="button" className="btn btn-default" onClick={this.shuffle}>Shuffle</button>
					</form>
				</div>

				<FlipMove enterAnimation="elevator" leaveAnimation="accordianVertical">
					{this.pokemonDisplayGenerator(this.state.limit)}
				</FlipMove>

				{this.displayShowMore()}

			</div>
		)
	}
})