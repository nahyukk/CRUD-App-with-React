import React, { useState } from 'react'
import "./Form.css"

const Form = ({ addGold, isEditing, editName, editCost, setEditName, setEditCost, onSave, validateCost, setNotificationInvalidCost }) => {
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');
	const handleClick = () => {
		if (!name || !cost) {
			setNotificationInvalidCost('모든 값을 입력하세요.');
			setTimeout(() => {
				setNotificationInvalidCost('');
			}, 3000);
			return;
		}

		if (!validateCost(cost)) {
			return;
		}

		const validConst = cost === "" ? 0 : parseInt(cost, 10)
		addGold({ name, cost: validConst });
		setName('');
		setCost('');
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
					<input type='text' className='form-input-box'
					value={isEditing !== null ? editCost : cost}
					onChange={(e) => {if(!validateCost(e.target.value)) {return;} (isEditing !== null ? setEditCost(e.target.value) : setCost(e.target.value))}
				}/>
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

