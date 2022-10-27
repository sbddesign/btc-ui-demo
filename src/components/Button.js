const Button = (props) => {
	let styles = {}
	
	let classes = "rounded-[5px] font-sans font-medium"
	
	if(props.size === 'large') classes += " px-[20px] py-[19px] space-x-10 text-[21px]"
	else if(props.size === 'small') classes += " px-[15px] py-[6px] space-x-10 text-[15px]"
	else classes += " px-[20px] py-[14px] space-x-10 text-[18px]"
	
	if(props.style === 'free') classes += " text-black disabled:text-light-neutral-5"
	else if(props.style === 'outline') classes += " border-light-neutral-5 border-2 text-black disabled:text-light-neutral-5"
	else classes += " bg-light-orange text-white disabled:bg-light-neutral-4"
	
	return(
		<div>
			<button style={styles} className={classes} disabled={props.disabled}>
				{props.text}
			</button>
		</div>
	)
}

export default Button
