import React from 'react'
import './Style/GiftBoxCSS.css';

class Game extends React.Component
{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="contain">
        <div className="background">
          <div className="status"> {MyString} <br/></div>
        </div>
      </div>
    );
  }
}

function GiftBox(props)
{
  return (
    <Game />
  )
}

export default GiftBox