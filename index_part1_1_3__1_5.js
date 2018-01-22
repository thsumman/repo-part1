import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<div>
			<h1>{props.kurssi}</h1>
		</div>
	)
}
const Sisalto = (props) => {
	return (
		<div>
			<Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
			<Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
			<Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
		</div>
	)
}

const Osa = (props) => {
	return (
		<div>
			<p>{props.osa}  {props.tehtavia}</p>
		</div>
	)
}

const Yhteensa = (props) => {
	const te1 = props.osat[0].tehtavia
	const te2 = props.osat[1].tehtavia
	const te3 = props.osat[2].tehtavia
	return (
		<div>
			<p>yhteensä {te1 + te2 + te3} tehtävää</p>
		</div>
	)
}


const App = () => {
	const kurssi = {
		nimi: 'Half Stack -sovelluskehitys',
		osat: [
			{
				nimi: 'Reactin perusteet',
				tehtavia: 10
			},
			{
				nimi: 'Tiedonvälitys propseilla',
				tehtavia: 7
			},
			{
				nimi: 'Komponenttien tila',
				tehtavia: 14
			}
		]
	}
	return (
			<div>
						<Otsikko kurssi={kurssi.nimi}/>
						<Sisalto osat={kurssi.osat} />
						<Yhteensa osat={kurssi.osat} />
			</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
