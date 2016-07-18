var Ghastly = React.createClass({
	render:function(){
		return (
			<div className="ghastly-container debugger" >
				<div>
					<h3>A ghastly should appear soon</h3>
		  				<FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)" enterAnimation="elevator" leaveAnimation="elevator" >
		  				    <img src="./assets/ghastly.png" />	
				        </FlipMove>	
	        	</div>
           	</div>		
		)
	}
})