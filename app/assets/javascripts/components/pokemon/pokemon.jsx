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
				
				

				<div className="poke-id">
					<h4>{this.props.pokemon.id}</h4>
				</div>

				<div className="poke-name">
					<h3>{this.props.pokemon.name}</h3>	
				</div>
				<div className="poke-image">
					<img src={this.props.pokemon.picture_url} className=''/>
				</div>

				<div className="remove-poke-container">
					{display}
					</div>
				<p className="poke-description">
					<b>Description:</b> {this.props.pokemon.description}
					
				</p>
				
			</div>
		)
	}
})