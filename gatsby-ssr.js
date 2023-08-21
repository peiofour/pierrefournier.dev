import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<link
			key='circular-std-book'
			rel='preload'
			href='/fonts/Circular_Std_Book.woff2'
			as='font'
			type='font/woff2'
			crossOrigin='anonymous'
		/>,
		<link
			key='circular-std-bold'
			rel='preload'
			href='/fonts/Circular_Std_Bold.woff2'
			as='font'
			type='font/woff2'
			crossOrigin='anonymous'
		/>,
		<link
			key={`circular-std-medium`}
			rel='preload'
			href='https://db.onlinewebfonts.com/t/9475d6a0b79c164f9f605673714e75d9.woff2'
			as='font'
			type='font/woff2'
			crossOrigin='anonymous'
		/>,
	])
}
