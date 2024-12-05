import React from 'react'
import "./Item.css"

const item = ({name, cost, onEdit, onDelete}) => {
	
	return (
		<div className='items'>
			<p className='item-name'>{name}</p>
			<p className='item-cost'>₩ {cost}</p>
			<div className='item-btns'>
				<button className="item-btn" onClick={onEdit}>
					<img src={`${process.env.PUBLIC_URL}/edit.svg`} alt='edit'/>
				</button>
				<button className="item-btn" onClick={onDelete}>
					<img src={`${process.env.PUBLIC_URL}/delete.svg`} alt='delete' />
				</button>
			</div>
		</div>
	)
}

export default item

