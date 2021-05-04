import React, { Component } from 'react';
import PandaExpress from './PandaExpress.png';
import Map from './Map.png'
import './App.css';
 
class Result extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col font-large">Panda Express</div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img alt="panda express" src={PandaExpress} style={{ width: '-webkit-fill-available' }}/>
                    </div>
                    <div className="col-6">
                        <div className="font-medium">About</div>
                        <div>Bringing people together to share joy has been our family’s inspiration
                        since the opening of the first Panda Express in 1983 in Glendale,
                        California. As we continue to open restaurants from coast to coast
                        and around the world, the bold flavors of Chinese cuisine inspire our
                        cooking, while our extended family of guests and associates remain
                        at the heart of what we do. Welcome to our family’s Chinese kitchen.</div>
                        <div className="row">
                            <div className="col-7">
                                <img alt="map" src={Map} className="img-responsive fit-image col-12" />
                            </div>
                            <div className="col-5">
                                <div className="font-medium">Hours</div>
                                <div>Monday      10:30AM-9:30PM</div>
                                <div>Tuesday     10:30AM-9:30PM</div>
                                <div>Wednesday   10:30AM-9:30PM</div>
                                <div>Thursday    10:30AM-9:30PM</div>
                                <div>Friday      10:30AM-9:30PM</div>
                                <div>Saturday    10:30AM-9:30PM</div>
                                <div>Sunday      10:30AM-9:30PM</div>
                            </div>
                        </div>
                    <div className="row">
                            <div className="col-6">
                                <div className="font-medium">Location</div>
                                <div>12513 Lake City Way</div>
                                <div>Seattle, WA 98123</div>
                            </div>
                            <div className="col-6">
                                <span className="font-medium button">Get Directions
                                </span>
                            </div>
                    </div>
                </div>
                </div>
                </div>
        );
    }
}
 
export default Result;