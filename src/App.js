import "./App.css";
import React, { useEffect } from "react";
// App.js
import Form from "./component/Form";
import Card from "./component/Card";


function App() {
	const [Money, setMoney] = React.useState(null);

	const addMoneyHandler = (data) => {
		console.log(data);
		setMoney(data);
	};

	const removeMoneyHandler = () => {
		setMoney(null);
	};

	return (

		<div className="App">
			<h1>Konversi Rupiah</h1>
			<img className="ava" src="rupiah.png" alt="Avatar" />
			<Form onAddMoney={addMoneyHandler}/>
			{/* Conditional rendering */}
			
			{Money && (
				<>
					<button className="delete" onClick={removeMoneyHandler}> Hapus</button>
					<Card 
						nominal={Money.nominal} 
						type={Money.type}
						kurs={Money.kurs}
						image={Money.image}
						simbol={Money.simbol}
					 />
				</>
			)}
		</div>
	);
}

export default App;
