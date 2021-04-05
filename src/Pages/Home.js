import React from 'react';
import ReactDOM, {Component} from 'react';
import ProductCard from './ProductCard'
import './Home.css'
import Nav from './Nav'

class Home extends Component {

  constructor()
  {
    super();
    this.state = {
      on: true
    }
  }

  click = () => {
    this.setState({on: false})
  }
  click2 = () => {
    this.setState({on: false})
    document.getElementById('google').click();
  }
  render()
  {
    let on = this.state.on;

    let front = null;

    if(on)
    {
      front = (
        <>
      <h2>PICK A PLAN</h2>
      <div className='box'>
        <a onClick={this.click} href="#under_construction"><ProductCard tier='BASIC'color='green'feats={['Free','Host royalty-free Tables',
        'Up to 2 pictures per message',
        'Follow up to 20 Tables',
        'Join any type of Table']}/></a>

        <button onClick={this.click2}
        style={{backgroundColor: "transparent",
        border:'none'}}><ProductCard btn={()=>{}}tier='PREMIUM' color='yellow'
        feats={['$3.99/Month',
        'Host royalty Tables and receive profit from conversations',
        'Unlimited pictures and GIFs per messages',
        'Follow Unlimited Tables',
        'No Ads',
        'Receive donations for your Tables, \n from Fiat to Crypto,',
        'Embedd your twitch stream inside of your Tables']}/>
        </button>
      </div>
      </>
    )
  }else {
    front = (
      <div className='box'>
      <p style={{fontFamily: 'monospace',
      fontSize: '20px', width: '70%', textAlign: 'center',
      marginBottom: '5%'}}>We're sorry, Tables is currently under going an
      upgrade in infrastructure.
      But we'll be back bigger and better 😉</p>
      </div>
    )
  }
    return (
      <>
      <Nav />
      {front}
      </>
    );
  }
}

export default Home;
