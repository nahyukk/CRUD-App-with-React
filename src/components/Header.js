import React from 'react'

const Header = ({notificationAdd, notificationDel, notificationEdit, notificationDelAll}) => {
	return (
		<div>
			{notificationAdd && <div className='notification-add'>{notificationAdd}</div>}
			{notificationDel && <div className='notification-del'>{notificationDel}</div>}
			{notificationEdit && <div className='notification-edit'>{notificationEdit}</div>}
			{notificationDelAll && <div className='notification-delall'>{notificationDelAll}</div>}
			
		<h1>Budget Caculator</h1>
		</div>
	)
}

export default Header