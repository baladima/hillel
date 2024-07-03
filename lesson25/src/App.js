import React from "react";
import EmojiItem from './components/EmojiItem';
import Results from './components/Results';
import './App.css';

const emojis = [
  { id: 1, symbol: "😀" },
  { id: 2, symbol: "😊" },
  { id: 3, symbol: "😎" },
  { id: 4, symbol: "🤩" },
  { id: 5, symbol: "😍" },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {},
      winner: null
    }
  }

  componentDidMount() {
    const storedVotes = localStorage.getItem('emojiVotes');
    if (storedVotes) {
      this.setState({votes: JSON.parse(storedVotes)});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.votes) {
      localStorage.setItem('emojiVotes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = (id) => {
    this.setState((prevState) => {
      const newVotes = { ...prevState.votes, [id]: (prevState.votes[id] || 0) + 1 };
      return { votes: newVotes};
    })
  }

  showResult = () => {
    const { votes } = this.state;
    const maxVotes = Math.max(...Object.values(votes));
    const winnerId = Object.keys(votes).find(id => votes[id] === maxVotes);
    this.setState({ winner: emojis.find(emoji => emoji.id === parseInt(winnerId)) })
  }

  clearResults = () => {
    localStorage.removeItem('emojiVotes');
    this.setState({ votes: {}, winner: null});
  }

  render() {
    const { votes, winner } = this.state;

    return (
        <div className="app">
          <h1>Voting</h1>
          <div className="emoji-list">
            {emojis.map((emoji) => (
                <EmojiItem key={emoji.id} emoji={emoji} votes={votes[emoji.id]} onVote={this.handleVote}/>
            ))}
          </div>
          <button onClick={this.showResult}>Show Results</button>
          <button onClick={this.clearResults}>Clear Results</button>
          { winner && <Results winner={winner} votes={votes} />}
        </div>
    );
  }
}

export default App;
