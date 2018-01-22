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
	const ka = (this.state.hyva + this.state.neutraali*0 + this.state.huono*-1)/yht
	let pros = 0
	console.log(yht)
	if (yht < 1.0) {
		console.log("nolla")
		pros = "ei arvoa"
	}
	else {
		console.log("muu")
		pros = (100*this.state.hyva)/yht
	}
	return (
      <div>
		<div><h1>Anna palautetta</h1></div>
        <div>
			<button onClick={this.klikHyva}>hyvä</button>
			<button onClick={this.klikNeutraali}>neutraali</button>
			<button onClick={this.klikHuono}>huono</button>
        </div>
		<div>Statistiikkaa</div>
		<div>
			<p>hyva {this.state.hyva}</p>
			<p>neutraali {this.state.neutraali}</p>
			<p>huono {this.state.huono}</p>
			<p>keskiarvo {ka}</p>
			<p>positiivisia {pros}</p>
			
		</div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))

