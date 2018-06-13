import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'
import { updateColors, updateChildColors } from './updateColor.js';


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={updateColors.bind(this)} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
      </div>
    )
  }
}
