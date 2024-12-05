import React, { useState } from 'react'
import "./Form.css"

const Form = ({ addGold, isEditing, editName, editCost, setEditName, setEditCost, onSave }) => {
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const handleClick = () => {
		if (name && cost) {
			addGold( {name, cost: parseInt(cost, 10) });
			setName("");
			setCost("");
		} else {
			console.log("다 입력해라");
		}
	}

	return (
		<div className='form'>
			<div className='form-input'>
				<div className='form-name'>
					<p>지출 항목</p>
					<input 
					
					className='form-input-box'
					value={isEditing !== null ? editName : name}
					onChange={(e) => (isEditing !== null ? setEditName(e.target.value) : setName(e.target.value))}
					placeholder='예) 육쌈냉면'
					/>
				</div>
				<div className='form-cost'>
					<p>비용</p>
					<input className='form-input-box'
					value={isEditing !== null ? editCost : cost}
					onChange={(e) => (isEditing !== null ? setEditCost(e.target.value) : setCost(e.target.value))}
					/>
				</div>
			</div>
			<div >
				{isEditing !== null ? 
					(<button className='form-btn' onClick={() => onSave(isEditing)}>
						수정
						<img src='/send.svg' alt='send' />	
					</button> ) : (
					<button className='form-btn' onClick={handleClick}>
						입력
						<img src='/send.svg' alt='send' />	
					</button> )
				}
				
			</div>
		</div>
	)
}

export default Form

