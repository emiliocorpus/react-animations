var Pokedex = React.createClass({
	getInitialState:function(){
		return {
			currentPokedex: this.props.pokemon
		}
	},
	removePokemon:function(pokemon){
		debugger
		var index = this.state.currentPokedex.indexOf(pokemon)
		debugger
		var newPokedex= React.addons.update(this.state.currentPokedex, {$splice: [[index,1]]})
		debugger
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
				<FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
					{this.pokemonGenerator()}
		        </FlipMove>
			</div>
		)
	}
})