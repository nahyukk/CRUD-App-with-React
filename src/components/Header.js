import React from 'react'

const Header = ({notificationAdd, notificationDel, notificationEdit, notificationDelAll, notificationInvalidCost}) => {
	return (
		<div>
			{notificationAdd && <div className='notification-add'>{notificationAdd}</div>}
			{notificationDel && <div className='notification-del'>{notificationDel}</div>}
			{notificationEdit && <div className='notification-edit'>{notificationEdit}</div>}
			{notificationDelAll && <div className='notification-delall'>{notificationDelAll}</div>}
			{notificationInvalidCost && <div className="notification-invalid">{notificationInvalidCost}</div>}
			
		<h1>Budget Caculator</h1>
		</div>
	)
}

export default Header