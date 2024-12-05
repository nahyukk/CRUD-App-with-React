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
	
	// 넣기
	const addGold = (newGold) => {
		setGolds((prevGolds) => [...prevGolds, newGold]);
	}
	

	// 지우기
	const onDelete = (index) => {
		setGolds((prevGolds) => prevGolds.filter((_, i)=>i !==index));
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
		const updatedGolds = golds.map((gold, i) => 
		i === index ? {name: editName, cost: editCost} : gold);

		setGolds(updatedGolds);
		setIsEditing(null);
		setEditName('');
    setEditCost('');
	}

	const onDeleteAll = () => {
		setGolds([])
	}

  return (
    <div className="App">
      <header className="App-header">
				<Header />
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
