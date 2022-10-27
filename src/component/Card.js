import React, { useEffect } from "react";
import "./Card.css";


function Card(props) {
	useEffect(() => {
		alert("Hasil Konversi Mata Uang Ditampilkan");
		return () => {
			alert("Hasil konversi mata uang akan dihapus");
		};
	}, []);

	return (
		<div className="card">
		<img src={props.image} alt="Avatar" />
			<div className="container">
				<h3>{props.type}</h3>
				<h4> {props.simbol} {props.nominal * props.kurs}</h4>
			</div>
		</div>
	);
	}

export default Card;
