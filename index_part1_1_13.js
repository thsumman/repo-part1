import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
	  vote_table: {
		0:0,
		1:0,
		2:0,
		3:0,
		4:0,
		5:0}
    }
  }
  
  haeSatLuku = () => {
	return () => {
		const sat_luku = Math.floor(Math.random()*(6))
		this.setState({selected: sat_luku})
	}
  }
  
  addVote = () => {
	return () => {
		const votes = this.state.vote_table
		votes[this.state.selected] = votes[this.state.selected] +1
		this.setState(votes)
	}
  }

  render() {
    return (
		<div>
			
			<div>
			  {this.props.anecdotes[this.state.selected]}
			</div>
			<Display
				votes_for_selected={this.state.vote_table[this.state.selected]}
				/>
			<Button
				handleClick={this.haeSatLuku(this.state.selected)}
				text="Next anecdote"
				/>
			<Button
				handleClick={this.addVote()}
				text="Vote"
				/>
		</div>
    )
  }
}

const Display = ({votes_for_selected}) => {
	return (
		<div>has {votes_for_selected} votes</div>
	)
}

const Button = ({handleClick, text}) => {
	return (
		<button onClick={handleClick}>
		{text}
		</button>
	)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
  document.getElementById('root')
)