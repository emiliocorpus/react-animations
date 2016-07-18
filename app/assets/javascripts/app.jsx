var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var App = React.createClass({
	render:function(){
		return (
			<div className="page-container debugger">
  				<Body data={this.props.data}/>
	        </div> 		
		)
	}
})