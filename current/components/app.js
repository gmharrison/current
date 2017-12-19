import React from 'react';
import {TopWave} from "./svgs";
import BarChart from "./charts";

export default class App extends React.Component {
    render () {
        return (
            <div className="project-container">
                <Header />
                <Market />
            </div>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <div className="header container-fluid">
                <div className="row">
                    <div className="col-md-5 col-md-offset-1">
                        <div className="title-container">
                            <h1>Current Multi-Media Platform</h1>
                            <p className="subtitle">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-line">
                </div>
                <TopWave/>
            </div>
        )
    }
}

export class Market extends React.Component {
    render () {
        return (
            <div className="market container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="topic-header">
                            <div className="circle"><h3>1</h3></div>
                            <div className="left-line"></div>
                            <h2>The Market Frustration</h2>
                        </div>
                        <p className="body-text">Ad-supported streaming & subscription services are driving down the value of content,
                            as views and exposure are going up.  The shift to a streaming majority has removed the
                            ability to dictate monetization from the artists and producers.  Social and big data are
                            cutting out others as the new publishers, and brands are serving as content producers.
                            Services and subscriptions have trouble differentiating as they compete on price,
                            and struggle with sterility, interactivity, and discoverability.
                        </p>
                    </div>
                </div>
                <BarChart data={[142,61,30,8,82,4,175,2]} size={[500,500]}/>
            </div>
        )
    }
}