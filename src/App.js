import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import { useState } from 'react';
import Total from './components/Total';

function App() {
	// const golds = [
	// 	{name: "냉면", cost: 8000},
	// 	{name: "커피", cost: 4300}
	// ]
	const [golds, setGolds] = useState([{name: "냉면", cost: 8000},
			{name: "커피", cost: 4300}]);
	
	// 알림 띄우기
	const [notificationAdd, setNotificationAdd] = useState("");
	const [notificationDel, setNotificationDel] = useState("");
	const [notificationEdit, setNotificationEdit] = useState("");
	const [notificationDelAll, setNotificationDelAll] = useState("");

	const [notificationInvalidCost, setNotificationInvalidCost] = useState('');

	const validateCost = (cost) => {
		if (!/^\d+$/.test(cost)) {
			setNotificationInvalidCost('숫자를 입력하세요.');
			setTimeout(() => {
				setNotificationInvalidCost(''); 
			}, 3000);
			return false;
		}
		return true;
	};
	
	
	// 넣기
	const addGold = (newGold) => {
		
		setGolds((prevGolds) => [...prevGolds, newGold]);

		setNotificationAdd('새로운 아이템을 추가했어요')

		setTimeout(() => {
			setNotificationAdd('');
		}, 3000);
	}
	

	// 지우기
	const onDelete = (index) => {
		setGolds((prevGolds) => prevGolds.filter((_, i)=>i !==index));
		setNotificationDel('아이템을 삭제했어요')
		
		setTimeout(() => {
			setNotificationDel('');
		}, 3000);
	}

	const [isEditing, setIsEditing] = useState(null);
	const [editName, setEditName] = useState('');
	const [editCost, setEditCost] = useState('');

	const onEdit = (index) => {
		setIsEditing(index);
		setEditName(golds[index].name);
		setEditCost(golds[index].cost);
		
	}

	const onSave = (index) => {
		if (!validateCost(editCost)) return;

		const updatedGolds = golds.map((gold, i) => 
		i === index ? {name: editName, cost:Number(editCost)} : gold);

		setGolds(updatedGolds);
		setIsEditing(null);
		setEditName('');
    setEditCost('');
		setNotificationEdit('아이템을 수정 했어요')

		setTimeout(() => {
			setNotificationEdit('');
		}, 3000);
	}

	const onDeleteAll = () => {
		setGolds([])
		setNotificationDelAll('아이템을 모두 삭제했어요')

		setTimeout(() => {
			setNotificationDelAll('');
		}, 3000);
	}



  return (
    <div className="App">
      <header className="App-header">
				<Header 
					notificationAdd={notificationAdd}
					notificationDel={notificationDel}
					notificationEdit={notificationEdit}
					notificationDelAll={notificationDelAll}
					notificationInvalidCost={notificationInvalidCost}
				/>
      </header>
			<div className='App-container'>
				<Form 
					addGold={addGold}
					isEditing={isEditing}
					editName={editName}
					editCost={editCost}
					setEditName={setEditName}
					setEditCost={setEditCost}
					onSave={onSave}
					validateCost={validateCost}
				/>
				<List 
					golds={golds}
					onDelete={onDelete}
					onEdit={onEdit}
					onDeleteAll={onDeleteAll}
				/>
				
			</div>
			<Total 
				golds={golds}
			/>
    </div>
  );
}

export default App;
