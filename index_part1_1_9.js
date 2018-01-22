import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
	  neutraali: 0,
	  huono: 0
    }
  }

  klikHyva = () => {
    this.setState({
		hyva: this.state.hyva + 1
	})
  }

  klikNeutraali = () => {
    this.setState({
		neutraali: this.state.neutraali + 1
	})
  }
  
  klikHuono = () => {
    this.setState({
		huono: this.state.huono + 1
	})
  }
  

  render() {
    
	const yht = (this.state.hyva + this.state.neutraali + this.state.huono)
	let palaute = ""
	let ka = 0
	let pros = 0
	if (yht < 1.0) {
		palaute = "ei yhtään palautetta annettu"
	}
	else {
		ka = (this.state.hyva + this.state.neutraali*0 + this.state.huono*-1)/yht
		pros = (100*this.state.hyva)/yht
	}
	return (
      <div>
		<div><h1>Anna palautetta</h1></div>
        <div>
			<Button
				handleClick={this.klikHyva}
				text="Hyvä"
			/>
			<Button
				handleClick={this.klikNeutraali}
				text="Neutraali"
			
			/>
			<Button
				handleClick={this.klikHuono}
				text="Huono"
			/>
        </div>
		
		<div>
			<Statistics tila={this.state} ka={ka} pros={pros} palaute={palaute}/>
		</div>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => (
	<button onClick={handleClick}>
		{text}
	</button>
  )

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

