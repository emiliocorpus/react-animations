var Pokedex = React.createClass({
	getInitialState:function(){
		return {
			currentPokedex: this.props.pokemon
		}
	},
	removePokemon:function(pokemon){
		var index = this.state.currentPokedex.indexOf(pokemon)
		var newPokedex= React.addons.update(this.state.currentPokedex, {$splice: [[index,1]]})
		this.replaceState({
			currentPokedex: newPokedex
		})
	},
	pokemonGenerator:function(){
		var pokedex = this.state.currentPokedex
		var pokemon = []
		for (var i = 0; i <= pokedex.length -1; i++) {
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

					<div className="btn btn-primary debugger">
						Shuffle
					</div>

					<div className="btn btn-success debugger">
						Display More
					</div>
				</div>
				<FlipMove enterAnimation="elevator" leaveAnimation="accordianVertical">
					{this.pokemonGenerator()}
				</FlipMove>
			</div>
		)
	}
})