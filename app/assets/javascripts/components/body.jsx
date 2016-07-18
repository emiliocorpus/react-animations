var Body = React.createClass({
	render:function() {
		return(
			<div className="body-container debugger">
				<Pokedex pokemon={this.props.data} />
			</div>
		)
	}
})