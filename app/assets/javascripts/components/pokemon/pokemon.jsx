var Pokemon = React.createClass({
	handleRemove:function(e){
		e.preventDefault()
		debugger
		this.props.handleRemove(this.props.pokemon)
	},
	render:function() {
		return (
			<div>
				<FlipMove enterAnimation="elevator" leaveAnimation="elevator">
					<div className="pokemon-container">
						<h3>{this.props.pokemon.name}</h3>
						<div className="pokeimage-container">
							<img src={this.props.pokemon.picture_url} />
						</div>
						<p className="poke-description">
							{this.props.pokemon.description}
						</p>
						<div>
							<a href="#" onClick={this.handleRemove}>X</a>
						</div>
					</div>
				</FlipMove>
			</div>
		)
	}
})