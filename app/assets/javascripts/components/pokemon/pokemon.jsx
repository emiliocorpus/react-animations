var Pokemon = React.createClass({
	getInitialState:function(){
		return {
			showDelete:false
		}
	},
	showRemove:function(e){
		e.preventDefault()
		this.replaceState({
			showDelete:true
		})
	},
	hideRemove:function(e){
		e.preventDefault()
		this.replaceState({
			showDelete:false
		})
	},
	handleRemove:function(e){
		e.preventDefault()
		this.props.handleRemove(this.props.pokemon)
	},
	render:function() {
		var display
		if (this.state.showDelete) {
			display = <div className="remove-poke"><a href="#" onClick={this.handleRemove}>X</a></div>
		}
		return (
			<div className="pokemon-container" onMouseOver={this.showRemove} onMouseLeave={this.hideRemove}>
				
				<div className="remove-poke-container">
					{display}
				</div>

				<div className="poke-id">
					<h2>{this.props.pokemon.id}</h2>
				</div>

				<div className="poke-name">
					<h1>{this.props.pokemon.name}</h1>	
				</div>
				<div className="poke-image">
					<img src={this.props.pokemon.picture_url} />
				</div>
				<p className="poke-description">
					Description: {this.props.pokemon.description}
				</p>
				
			</div>
		)
	}
})