import React, { Component } from 'react';
import './App.css';
import '../Components/Card';
import '../Components/Header';
import '../Components/Textbox';
import Header from '../Components/Header';
import Textbox from '../Components/Textbox';
import Card from '../Components/Card';
import 'tachyons';

class App extends Component {
  constructor(){
    super()
    this.state = {
      inputfield: '',
      sentiment_id: ''
    }
  }
  onInput = (event) => {
    this.setState(
      {inputfield: event.target.value}
    )
  }
  getSentiment = () => {
    fetch("https://ts-sentiment-analysis-8991.herokuapp.com/api/v1/getsentiment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        phrase: this.state.inputfield
      })
    }).then(res => {return res.json()})
      .then(sentiment => {
        this.setState({sentiment_id:sentiment.sentiment_id})
      })
      .catch(alert)
  }
  render(){
    return(
    <div className='tc'>
      <Header />
      <Textbox getSentiment={this.getSentiment} onInput={this.onInput}/>
      <Card sentiment_id={this.state.sentiment_id}/>
    </div>
    )
  }
}

export default App;
