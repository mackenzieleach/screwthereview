import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Wheel from './CategoryWheel.png'
import './App.css';

var WHEELSIZE = 8;

class Roulette extends React.Component {
  state = {

    list: [],
    radius: 75, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false
  };

  componentDidMount() {

    // generate canvas wheel on load
    this.renderWheel();
  }

  renderWheel() {
    let categories = [];
    const categoryMap = new Map(
      [["Arts & Entertainment", "arts"],
      ["Active Life", "active"],
      ["Bakeries", "bakeries"],
      ["Coffee & Tea", "coffee"],
      ["Frozen Treats", "icecream"],
      ["Speciality Food", "gourmet"],
      ["Street Vendors", "streetvendors"],
      ["Tours", "tours"],
      ["Nightlife", "nightlife"],
      ["Restaurants", "restaurants"],
      ["Shopping", "shopping"],
      ["Media Stores", "media"]]
    );

    let canvas = document.getElementById("wheel");
    let radius = canvas.width / 4;


    let keys = Array.from(categoryMap.keys());
    // randomly select categories to populate wheel
    let selectedCategory;
    let rand;
    for (var i = 0; i < WHEELSIZE; i++) {
      rand = Math.floor(Math.random() * keys.length)
      selectedCategory = keys[rand]
      categories.push(selectedCategory);
      keys.splice(rand, 1);
    }
    // determine number/size of sectors that need to created
    let numOptions = WHEELSIZE;
    let arcSize = (2 * Math.PI) / numOptions;
    this.setState({
      list: categories,
      angle: arcSize,
      radius: radius
    }, () => {
      console.log(this.state.radius);
      // get index of starting position of selector
      this.topPosition(numOptions, arcSize);

      // dynamically generate sectors from state list
      let angle = 0;
      
      // list of colors for wheel segments
      let colors = ['rgba(255,3,3,1)', 'rgba(77,216,255,1)', 'rgba(255,79,205,1)', 'rgba(255,204,77,1)']
      let numColors = colors.length;
      for (let j = 0; j < numOptions; j++) {
        let text = this.state.list[j];
        this.renderSector(j + 1, text, angle, arcSize, colors[j % numColors]);
        console.log(angle);
        console.log(arcSize);
        angle += arcSize;
      }
    }
    );
  }

  topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    this.setState({
      top: topSpot - 1,
      offset: degreesOff
    });
  };

  renderSector(index, text, start, arc, color) {
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = this.state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius - 165,
      baseSize + Math.sin(angle - arc / 2) * textRadius - 165
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 60);
    ctx.restore();
  
  }

  getColor() {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  }

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = spin => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const { angle, top, offset, list } = this.state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    this.setState({
      net: netRotation,
      result: result
    });
  };

  reset = () => {
    // reset wheel and result
    this.setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false
    });
  };

  render() {
    return (
      <Container className="App">
        <div className="font-large">Spinning Prize Wheel React</div>
        <Container id="wheel-container">
          <Row>
            <span id="selector" className="col-4 offset-1 text-center">&#9660;</span>
          </Row>
          <Row>
              <canvas
                id="wheel"
                width="500"
                height="500"
                className="col-4 offset-1"
                style={{
                  WebkitTransform: `rotate(${this.state.rotate}deg)`,
                  WebkitTransition: `-webkit-transform ${
                    this.state.easeOut
                  }s ease-out`
                }}
            />
            <div className="col-4 offset-2">
              <img alt="roulette" src={Wheel} className="row" style={{ width: '-webkit-fill-available' }}/>
              <Row>Ready to try something new? Spin the wheel for your new experience!</Row>
            </div>
          </Row>
        </Container>
        <Row>
        {this.state.spinning ? (
          <button type="button" id="reset" onClick={this.reset}>
            reset
          </button>
        ) : (
          <button type="button" id="spin" onClick={this.spin}>
            SCREW THE REVIEW
          </button>
          )}
          </Row>
        <Row class="display row">
          <span id="readout">
            YOU WON:{"  "}
            <span id="result">{this.state.list[this.state.result]}</span>
          </span>
        </Row>
      </Container>
    );
  }
}

export default Roulette;
