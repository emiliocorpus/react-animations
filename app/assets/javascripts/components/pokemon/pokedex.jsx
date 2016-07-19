var Pokedex = React.createClass({
	getInitialState:function(){
		return {
			currentPokedex: this.props.pokemon,
			limit: 4
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
			currentPokedex: currentPokedex
		})
	},
	increaseDisplay:function(){
		this.setState({
			limit: this.state.limit + 5
		})
	},
	pokemonGenerator:function(limit){
		var pokedex = this.state.currentPokedex
		var pokemon = []
		for (var i = 0; i <= limit; i++) {
			pokemon.push(<Pokemon pokemon={pokedex[i]} key={pokedex[i].id} handleRemove={this.removePokemon}/>)
		}
		return pokemon
	},
	render:function() {
		return (
			<div className="pokedex-container">
				<div className="container-fluid btns-container">
					<div className="btn btn-info debugger">
						Sort by:
					</div>

					<div className="btn btn-primary debugger" onClick={this.shuffle}>
						Shuffle
					</div>

					
				</div>
				<FlipMove enterAnimation="elevator" leaveAnimation="accordianVertical">
					{this.pokemonGenerator(this.state.limit)}
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