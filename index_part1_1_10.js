import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
		choses: {
			hyva: 0,
			neutraali: 0,
			huono: 0
		}
    }
  }

  
  klik = (valinta) => {
	return () => {
		const choses = this.state.choses
		choses[valinta] = choses[valinta] + 1
		this.setState(choses)
	}
	
  }
  

  render() {
    
	const yht = (this.state.choses['hyva'] + this.state.choses['neutraali'] + this.state.choses['huono'])
	let palaute = ""
	let ka = 0
	let pros = 0
	if (yht < 1.0) {
		palaute = "ei yhtään palautetta annettu"
	}
	else {
		ka = (this.state.choses['hyva'] + this.state.choses['neutraali']*0 + this.state.choses['huono']*-1)/yht
		pros = (100*this.state.choses['hyva'])/yht
	}
	return (
      <div>
		<div><h1>Anna palautetta</h1></div>
        <div>
			<Button
				handleClick={this.klik("hyva")}
				text="Hyvä"
			/>
			<Button
				handleClick={this.klik("neutraali")}
				text="Neutraali"
			
			/>
			<Button
				handleClick={this.klik("huono")}
				text="Huono"
			/>
        </div>
		
		<div>
			<Statistics tila={this.state.choses} ka={ka} pros={pros} palaute={palaute}/>
		</div>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => {
	return (
	<button onClick={handleClick}>
		{text}
	</button>
	)
}

const Statistic = ({text, number}) => (
	<div>{text} {number}</div>
)
	
	
const Statistics = ({tila, ka, pros, palaute}) => {
	if (palaute.length > 1) {
		return (
			<div>{palaute}</div>
		)
	}
	else {
		return (
			<div>
				<div><h1>Statistiikkaa</h1></div>
				<Statistic text="hyvä" number={tila.hyva} />
				<Statistic text="neutraali" number={tila.neutraali} />
				<Statistic text="huono" number={tila.huono} />
				<Statistic text="keskiarvo" number={ka} />
				<Statistic text="positiivisia" number={pros} />
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'))

