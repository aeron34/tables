import React from 'react';
import ReactDOM, {Component} from 'react';
import './css/chat.css'

class Chat extends Component {
  state = {
    hosts: ['mm', 'hank', 'walt'],
    mods: ['ltg','wings','dood', 'mm', 'hank', 'walt'],
    conversations: ['s','sda','aan','saj','sdas','asdas',
    'sada','asdaw','as','sagajw','sage']
  }

  render() {
    let chat_meta = ['hosts', 'mods', 'conversations'];

    return (
      <article className='outer'>

        <div className='sidebar'>
          <div style={{paddingTop: '80px'
          }}>{
            chat_meta.map(name => {
              return(
                <div id={name} style={{paddingLeft: '20px',
                width:'80%'}}>

                  <h2 style={{textAlign: 'left',
                  fontSize: '14px'}}>{name.toUpperCase()}</h2>
                  <div style={{ padding: '10px', marginBottom: '10px',
                  backgroundColor: ' rgba(10,10,10,1)'}}>{this.state[name].map(user => {
                    return <p style={{color:'white', fontSize: '12px',
                    paddingLeft:'10%', display:'block'}}>{user}</p>
                  })}</div>
                </div>
              )
            })
          }</div>
        </div>

        <div className='chatbox'>
          <div className='mediabox'>
            <iframe className='spotify' src="https://open.spotify.com/embed/album/0jipZxGtkTDHjVerLkzO80"
            width="275" height="175" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div className='message_box'>

            <div className='messages'>
                <div style={{height:'1204%'}}></div>
            </div>

            <div className='messenger'>
              <input style={{width: '75%', height: '20%',
                backgroundColor: 'rgba(15,13,13,1)', padding:'10px',
                 border:'none', color:'white'}}/>
            </div>
          </div>
        </div>

        <div className='sidebar'>

        </div>
      </article>
    )
  }
}

export default Chat;
