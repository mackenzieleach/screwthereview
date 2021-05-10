import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import title from './Images/RouletteLogo.png'
import selector from './Images/selector.png'
import Result from './Result';
import './App.css';

var WHEELSIZE = 8;

class Roulette extends React.Component {
  // search bar
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
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
    spinning: false,
    searchValue: '',
    seeResult: false,
  };

  handleChange(event) {
      this.setState({searchValue: event.target.value});
  }

  handleSubmit(event) {
      alert('A name was submitted: ' + this.state.searchValue);
      event.preventDefault();
  }

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
      // get index of starting position of selector
      this.topPosition(numOptions/4, arcSize);

      // dynamically generate sectors from state list
      let angle = 0;
      
      // list of colors for wheel segments
      let colors = ['rgba(255,3,3,1)', 'rgba(77,216,255,1)', 'rgba(255,79,205,1)', 'rgba(255,204,77,1)']
      let numColors = colors.length;
      for (let j = 0; j < numOptions; j++) {
        let text = this.state.list[j];
        this.renderSector(j + 1, text, angle, arcSize, colors[j % numColors]);
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

  setViewState = () => {
    this.setState({
      seeResult: !this.state.seeResult
    });
  }

  render() {
    return (
      <Container fluid className="App page-container">
        {!this.state.seeResult ? (
          <Row id="wheel-container" data-testid="wheel-container">
            <Col sm={6}>
              <Row>
                <span className="selector-span">
                  <img id="selector" alt="selector" src={selector} />
                </span>
                <canvas
                  id="wheel"
                  width="500"
                  height="500"
                  style={{
                    WebkitTransform: `rotate(${this.state.rotate}deg)`,
                    WebkitTransition: `-webkit-transform ${this.state.easeOut
                      }s ease-out`
                  }}
                />
              </Row>
            </Col>
            <Col sm={{ span: 5, offset: 1 }}>
              <Row>
                <img alt="roulette" src={title} style={{ width: '-webkit-fill-available' }} />
              </Row>
              <Row>Ready to try something new? Spin the wheel for your new experience!</Row>
              {/* <Row style={{ flexWrap: 'inherit' }}>
                <span className="font-medium">Location: </span>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label id="location-label">
                      <input className="form-control" id="inputdefault" labelledby="location-label" type="text" placeholder="" value={this.state.searchValue} onChange={this.handleChange} style={{ minWidth: '260px' }} />
                    </label>
                  </div>
                </form>
              </Row> */}
              <Row id="search-row">
                  <label for="location" id="search-text" >Location</label>
                  <select class="options" id="location" onChange={this.handleChange} data-testid="location-dropdown">
                      {/* 50 Most Populated WA Cities (Hardcoded*/}
                      <option>Select City</option>
                      <option>Auburn, WA</option>
                      <option>Bainbridge Island, WA</option>
                      <option>Bellevue, WA</option>
                      <option>Bellingham, WA</option>
                      <option>Bothell, WA</option>
                      <option>Bremerton, WA</option>
                      <option>Burien, WA</option>
                      <option>Des Moines, WA</option>
                      <option>Edmonds, WA</option>
                      <option>Everett, WA</option>
                      <option>Federal Way, WA</option>
                      <option>Graham, WA</option>
                      <option>Issaquah, WA</option>
                      <option>Kennewick, WA</option>
                      <option>Kirkland, WA</option>
                      <option>Kent, WA</option>
                      <option>Lacey, WA</option>
                      <option>Lake Stevens, WA</option>
                      <option>Lakewood, WA</option>
                      <option>Longview, WA</option>
                      <option>Lynnwood, WA</option>
                      <option>Marysville, WA</option>
                      <option>Maple Valley, WA</option>
                      <option>Mill Creek East, WA</option>
                      <option>Mercer Island, WA</option>
                      <option>Mount Vernon, WA</option>
                      <option>Olympia, WA</option>
                      <option>Orchards, WA</option>
                      <option>Pasco, WA</option>
                      <option>Parkland, WA</option>
                      <option>Pullman, WA</option>
                      <option>Puyallup, WA</option>
                      <option>Redmond, WA</option>
                      <option>Renton, WA</option>
                      <option>Richland, WA</option>
                      <option>Sammamish, WA</option>
                      <option>Seattle, WA</option>
                      <option>SeaTac, WA</option>
                      <option>Shoreline, WA</option>
                      <option>South Hill, WA</option>
                      <option>Spanaway, WA</option>
                      <option>Spokane, WA</option>
                      <option>Spokane Valley, WA</option>
                      <option>Tacoma, WA</option>
                      <option>University Place, WA</option>
                      <option>Vancouver, WA</option>
                      <option>Walla Walla, WA</option>
                      <option>Wenatchee, WA</option>
                      <option>Yakima, WA</option>
                  </select>
              </Row>
              <Row>
                <Col sm={6}>
                {this.state.spinning ? (
                  <button className="str-button" type="button" id="reset" onClick={this.reset}>
                    Reset
                  </button>
                ) : (
                  <button className="str-button" type="button" id="spin" onClick={this.spin}>
                    Screw that Review!
                  </button>
                  )}
                </Col>
                <Col sm={6}>
                  <button id="see-result" className="str-button" onClick={this.setViewState}>Get my Result</button>
                  </Col>
                </Row>
              </Col>
          </Row>
        ) : (
          <Row>
            <Result location={this.state.searchValue ? this.state.searchValue : "seattle"} category={this.state.list[this.state.result]}></Result>
          </Row>
        )}
        </Container>
    );
  }
}

export default Roulette;
