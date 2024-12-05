import React from 'react'

const Total = ({golds}) => {

	const totalCost = golds.reduce((sum, gold) => {
		return sum + gold.cost; }, 0);



	return (
		<div className='total'>
			<h2>₩ {totalCost}</h2>
			<h3>을 썼어요</h3>
		</div>
	)
}

export default Total