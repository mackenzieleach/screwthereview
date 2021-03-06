/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import title from './Images/RouletteLogo.png';
import selector from './Images/selector.png';
import Result from './Result';
import LocationSearchBar from './LocationSearchBar';
import './App.css';

const WHEELSIZE = 8;

class Roulette extends React.Component {
  // search bar
  constructor(props) {
    super(props);
    this.callBackFunctionSearchBar = this.callBackFunctionSearchBar.bind(this);
    this.setViewState = this.setViewState.bind(this);

    this.state = {
      listTitle: [],
      listAlias: [],
      radius: 75, // PIXELS
      rotate: 0, // DEGREES
      easeOut: 0, // SECONDS
      angle: 0, // RADIANS
      top: null, // INDEX
      offset: null, // RADIANS
      net: null, // RADIANS
      result: 0, // INDEX
      spinning: false,
      searchValue: '',
      resultValue: '',
      seeResult: false,
    };
  }

  componentDidMount() {
    // generate canvas wheel on load
    this.renderWheel();
  }

  setViewState = () => {
    this.setState((prevState) => ({ seeResult: !prevState.seeResult }));
  }

  setViewState = () => {
    this.setState((prevState) => ({ seeResult: !prevState.seeResult }));
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
      offset: degreesOff,
    });
  };

  spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    const randomSpin = Math.floor(Math.random() * 900) + 500;
    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const {
      angle, top, offset, listTitle,
    } = this.state;
    const netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel -= angle;
      count -= 1;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = listTitle.length + count;
    }

    // set state variable to display result
    this.setState({
      net: netRotation,
      result,
    });
  };

  reset = () => {
    // reset wheel and result
    this.setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false,
    });
  };

  callBackFunctionSearchBar = (childData) => {
    this.setState({ searchValue: childData });
  }

  // callBackFunctionResult = (childData) => {
  //   this.setState({ resultValue: childData });
  // }

  renderWheel() {
    const categories = [];
    const aliases = [];
    const categoryMap = new Map(
      [['Arts & Entertainment', 'arts'],
        ['Active Life', 'active'],
        ['Bakeries', 'bakeries'],
        ['Coffee & Tea', 'coffee'],
        ['Frozen Treats', 'icecream'],
        ['Speciality Food', 'gourmet'],
        ['Street Vendors', 'streetvendors'],
        ['Tours', 'tours'],
        ['Nightlife', 'nightlife'],
        ['Restaurants', 'restaurants'],
        ['Shopping', 'shopping'],
        ['Media Stores', 'media']],
    );

    const canvas = document.getElementById('wheel');
    const radius = canvas.width / 4;

    const keys = Array.from(categoryMap.keys());
    const values = Array.from(categoryMap.values());
    // randomly select categories to populate wheel
    let selectedCategory;
    let selectedAlias;
    let rand;
    for (let i = 0; i < WHEELSIZE; i += 1) {
      rand = Math.floor(Math.random() * keys.length);
      selectedCategory = keys[rand];
      selectedAlias = values[rand];
      categories.push(selectedCategory);
      aliases.push(selectedAlias);
      keys.splice(rand, 1);
      values.splice(rand, 1);
    }
    // determine number/size of sectors that need to created
    const numOptions = WHEELSIZE;
    const arcSize = (2 * Math.PI) / numOptions;
    this.setState({
      listTitle: categories,
      listAlias: aliases,
      angle: arcSize,
      radius,
    }, () => {
      // get index of starting position of selector
      this.topPosition(numOptions / 4, arcSize);

      // dynamically generate sectors from state list
      let angle = 0;

      // list of colors for wheel segments
      const colors = ['rgba(255,3,3,1)', 'rgba(77,216,255,1)', 'rgba(255,79,205,1)', 'rgba(255,204,77,1)'];
      const numColors = colors.length;
      for (let j = 0; j < numOptions; j += 1) {
        const text = this.state.listTitle[j];
        this.renderSector(j + 1, text, angle, arcSize, colors[j % numColors]);
        angle += arcSize;
      }
    });
  }

  renderSector(index, text, start, arc, color) {
    const canvas = document.getElementById('wheel');
    const ctx = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const { radius } = this.state;
    const startAngle = start;
    const endAngle = start + arc;
    const angle = index * arc;
    const baseSize = radius * 3.33;
    const textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = '17px Arial';
    ctx.fillStyle = 'black';
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius - 165,
      baseSize + Math.sin(angle - arc / 2) * textRadius - 165,
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 60);
    ctx.restore();
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
                    }s ease-out`,
                  }}
                />
              </Row>
            </Col>
            <Col sm={{ span: 5, offset: 1 }}>
              <Row>
                <img alt="roulette" src={title} style={{ width: '-webkit-fill-available' }} />
              </Row>
              <Row>Ready to try something new? Spin the wheel for your new experience!</Row>
              <Row id="search-row">
                <Col sm={12}>
                  <LocationSearchBar parentCallbackSearchBar={this.callBackFunctionSearchBar} />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  {this.state.spinning ? (
                    <button className="str-button" type="button" id="reset" onClick={this.reset}>
                      Reset
                    </button>
                  ) : (
                    <button className="str-button" type="button" id="spin" onClick={this.spin} style={{ marginBottom: '20px' }}>
                      Screw that Review!
                    </button>
                  )}
                </Col>
                <Col sm={6}>
                  <button type="button" id="see-result" className="str-button" onClick={this.setViewState}>Get my Result</button>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <Row>
            <Result
              location={this.state.searchValue ? this.state.searchValue : 'seattle'}
              category={this.state.listAlias[this.state.result]}
              price=""
              radius="10"
            />
          </Row>
        )}
      </Container>
    );
  }
}

export default Roulette;
