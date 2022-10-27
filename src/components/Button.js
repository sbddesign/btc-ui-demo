import React from 'react';

const Button = (props) => {
	let classes = "rounded-[5px] font-sans font-medium flex flex-row space-x-[10px] items-center"
	
	// Size
	if(props.size === 'large') classes += " px-[20px] py-[19px] text-[21px]"
	else if(props.size === 'small') classes += " px-[15px] py-[6px] text-[15px]"
	else classes += " px-[20px] py-[14px] text-[18px]"
	
	// Style
	if(props.style === 'free') classes += " text-black disabled:text-light-neutral-5"
	else if(props.style === 'outline') classes += " border-light-neutral-5 border-2 text-black disabled:text-light-neutral-5"
	else classes += " bg-light-orange text-white disabled:bg-light-neutral-4"
	
	const Icon = () => <span className={props.size === 'small' ? 'w-[15px] h-[15px]' : 'w-[30px] h-[30px]'}>{props.icon}</span>
	
	return(
		<div>
			<button className={classes} disabled={props.disabled}>
				{props.label && props.icon ? <span>{props.text}</span> : ''}
				<Icon />
			</button>
		</div>
	)
}

export default Button
