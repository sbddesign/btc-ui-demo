const Button = (props) => {
	let styles = {}
	
	if(props.style === 'filled') styles = {backgroundColor: '#ff9500', color: '#fff', border:0}
	else if(props.style === 'outline') styles = {background: 'none', borderColor: '#ff9500', borderWidth: '2px', color: '#ff9500', borderStyle: 'solid'}
	
	return(
		<div>
			<button style={styles}>
				{props.text}
			</button>
		</div>
	)
}

export default Button
