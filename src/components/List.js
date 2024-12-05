import React from 'react'
import Item from './Item'


const List = ({ golds, onEdit, onDelete, onDeleteAll }) => {
	
	return (
		<>
			<div 
				className='list'
			>
				{golds.map((gold, index) => (
					<Item
						
						key={index}
						name={gold.name}
						cost={gold.cost}
						onEdit={() => onEdit(index)}
            onDelete={() => onDelete(index)} >
					</Item>
				))}
			</div>

			<div>
				<button className='del-all' onClick={onDeleteAll}>
					싹 지우기
					<img src='/delete-all.svg' alt='delAll' />
				</button>
			</div>
		</>
	)
}

export default List