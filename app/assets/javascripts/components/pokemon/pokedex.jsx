var Pokedex = React.createClass({
	getInitialState:function(){
		return {
			currentPokedex: this.props.pokemon,
			currentShown: [],
			limit: 5
		}
	},
	removePokemon:function(pokemon){
		var index = this.state.currentPokedex.indexOf(pokemon)
		var newPokedex= React.addons.update(this.state.currentPokedex, {$splice: [[index,1]]})
		this.setState({
			currentPokedex: newPokedex
		})
	},
	shuffle:function(){
		var currentPokedex = this.state.currentPokedex
		var currentIndex = currentPokedex.length, temporaryValue, randomIndex;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    // And swap it with the current element.
		    temporaryValue = currentPokedex[currentIndex];
		    currentPokedex[currentIndex] = currentPokedex[randomIndex];
		    currentPokedex[randomIndex] = temporaryValue;
		  }
		this.setState({
			currentShown: currentPokedex
		})
	},
	increaseDisplay:function(){
		this.setState({
			limit: this.state.limit + 5
		})
	},
	handleSearchChange:function(e){
		e.preventDefault()
		var searchPattern = new RegExp('^' + e.target.value);
		var matched = []
		for (var i = 0; i < this.state.currentPokedex; i++ ){
			var pokemon = this.state.currentPokedex[i]
			if (searchPattern.test(this.state.currentPokedex[i].name)) {
				matched.push(<Pokemon pokemon={pokemon} key={pokemon.id} handleRemove={this.removePokemon} />)
			}
		}
		if (matched.length == 0) {
			this.setState({
				matched: <div>No found matches</div>
			})
		}
		else {
			this.setState({
				currentShown: matched
			})
		}
	},
	preventSubmit:function(e){
		e.preventDefault()
	},
	pokemonGenerator:function(){
		var pokedex = this.state.currentPokedex
		var pokemon = []
		for (var i = 0; i < this.state.limit; i++) {
			pokemon.push(<Pokemon pokemon={pokedex[i]} key={pokedex[i].id} handleRemove={this.removePokemon}/>)
		}
		this.setState({
			currentShown: pokemon
		})
		return pokemon
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
					{this.pokemonGenerator()}
				</FlipMove>
				<div className="display-more debugger">
					<div className="btn btn-success debugger" onClick={this.increaseDisplay}>
						Show More
					</div>
				</div>
			</div>
		)
	}
})