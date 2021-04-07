import React from 'react';
import ReactDOM, {Component} from 'react';

import check from './cat.gif'

class Calculator extends Component {
  state = {
    users: 0,
    hours: 0,
    days: 0,
    functs: [(i) => {
      if(i == "")
      {
        i = 0;
      }
      this.setState({
        users: i
      })
    }, (i) => {
      if(i == "")
      {
        i = 0;
      }
      this.setState({
        hours: i
      })
    }, (i) => {
      if(i == "")
      {
        i = 0;
      }
      this.setState({
        days: i
      })
    }]
  }


  render()
  {
    const {functs, users, hours, days} = this.state
    let names = ['Participants',
    'Hours They Chat Per Day', 'How Many Days Per Month'],
    dollars = users *hours*days * 0.0005;
    return (
      <div style={{paddingTop:'10%', marginBottom: '5%'}}>

        <h2 style={{ marginBottom: '5%'}}>Get Paid A Royalty Rate Per User Interacting
        In Your Chat</h2>

        <img style={{marginLeft: 'auto',
        marginRight: 'auto', marginBottom: '5%',
        display: 'block'}}src={check}/>

        <h2 style={{ marginBottom: '5%'}}>Think of it like Spotify, but instead
        of plays it's people in chat.</h2>

        <h2>See what you could get</h2>

        <p style={{fontSize: '13px', display:'block',
        textAlign: 'center', color: 'grey'}}> The results produced
        by the Calculator are approximate </p>

        <p style={{fontSize: '13px', display:'block',
        textAlign: 'center', color: 'grey',
        marginBottom: '6%'}}> Factors such as whether
        Participants are Premium or Free could affect your payment  </p>

        <div className='box' style={{marginBottom: '9%',
        height: 'auto'}}>

          {names.map((elem,i) => {
            return (
              <input type='number' style={{
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
                margin: '10px',
                border: '1px solid blue'}}
            onChange={(e)=>{functs[i](e.target.value)}}
            placeholder={`${elem}`} />)
          })} <p> = Approximately ${parseFloat(dollars).toFixed(2)}/Month</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
