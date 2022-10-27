import React, { useEffect } from "react";
import "./Form.css";

function Form(props) {
	const [nominal, setNominal] = React.useState("");
	const [type, setType] = React.useState("");
	const [image, setImage] = React.useState("");
	const [kurs, setKurs] = React.useState(0);
	const [simbol, setSimbol] = React.useState(0);
	const [nominalIsValid, setNominalIsValid] = React.useState(null)
	const [formIsValid, setFormIsValid] = React.useState(false);

	
	const submitHandler = (event) => { 
		event.preventDefault();
		if (formIsValid) {
			console.log({nominal, type});
			props.onAddMoney({ nominal: nominal, type: type, kurs:kurs, image:image, simbol:simbol});

			//* Reset form
			setNominal("");
			setType("");
			setKurs("");
		} else {
			alert("Form tidak valid");
		}
	};

	const changeNominalHandler = (event) => {
		//* Set the value of the nama input to the value of the input

		setNominalIsValid(event.target.value.trim().length> 0);

		setNominal(event.target.value);
	};

	const handleSubmitUSD=()=>{
		setType("USD");
		setKurs(0.00006);
		setImage("USD.jpg");
		setSimbol("$");
	  }

	const handleSubmitEURO=()=>{
		setType("EURO");
		setKurs(0.00007);
		setImage("EURO.jpg");
		setSimbol("€")
	  }


	const handleSubmitYEN=()=>{
		setType("YEN");
		setKurs(0.00957);
		setImage("YEN.jpg");
		setSimbol("¥")
	  }
	
	useEffect(() => {

		// Similiar to componentDidMount and componentDidUpdate:
		//? This is called after the first render and after every update
			
		setFormIsValid(nominalIsValid);
		console.log(`${Form.nominal}: ${formIsValid}`);

	}, [nominalIsValid]);


	return (
			<>
				<form onSubmit={submitHandler}>
					<label htmlFor="nominal">Rupiah</label>
					<input
						className={nominalIsValid === false ? "invalid" : ""}
						autoComplete="off"
						type="number"
						id="nominal"
						nama="nominal"
						value={nominal}
						onChange={changeNominalHandler}
						onBlur={changeNominalHandler}
					/>

					<button onClick={handleSubmitUSD}>RP > USD</button>
					<button onClick={handleSubmitEURO}>RP > EURO</button>
					<button onClick={handleSubmitYEN}>RP > YEN</button>

				</form>
			</>
		);

	}

export default Form;
