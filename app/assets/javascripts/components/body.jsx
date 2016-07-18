var Body = React.createClass({
	render:function() {
		return(
			<div className="body-container">
				<Pokedex pokemon={this.props.data} />
			</div>
		)
	}
})