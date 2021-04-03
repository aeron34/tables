import React from 'react'
import logo from './invert.png'


function Nav()
{
  return (<div className='box'style={{width: '100%',
  borderBottom: '1px solid rgba(27,27,27,1)',
  height: '10vh'}}>

    <img src={logo} style={{width: '30px', marginRight: '2.5%'}}/>
    <h2>T A B L E S</h2>
  </div>);

}

export default Nav;
