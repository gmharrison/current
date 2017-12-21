import React from 'react';
import {FirstChart, SecondChart, TopWave, Cycle} from "./svgs";
import Wave from '!file-loader!../static/img/wave.svg'
import Whale from '../static/img/whale.svg'
import Wave3 from '!file-loader!../static/img/wave3.svg'
import Unlock from '!file-loader!../static/img/unlock1.svg'

export const list = [{
    id: 1,
    text: "With a song download, receive exclusive video content",
    img: Unlock
    },
    {
    id: 2,
    text: "With an album pre-order, receive exclusive physical merchandise"},
    {
    id: 3,
    text: "Sell concert livestreams andfestival merch on the same platform",
}]


export default class App extends React.Component {
    render () {
        return (
            <div className="project-container">
                <Header />
                <Market />
                <Solution />
                <Purchase />
                <Content />
            </div>
        )
    }
}

export class Header extends React.Component {
    render() {
        return (
            <div className="background-image" id="cover-image" style={{backgroundImage:`url(${Wave})`}}>
                <div className="header container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-md-offset-1 col-sm-6">
                            <div className="title-container">
                                <h1>Current Multi-Media Platform</h1>
                                <p className="subtitle">
                                    A freemium distribution platform with integrated CRM for content producers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-line">
                    </div>
                </div>
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
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="blue-container">
                            <FirstChart/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="blue-container">
                            <SecondChart/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Solution extends React.Component {
    render () {
        return (
            <div className="solution container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="topic-header">
                            <div className="circle"><h3>2</h3></div>
                            <div className="left-line"></div>
                            <h2>The Answer</h2>
                        </div>
                        <p className="body-text">
                            Create a platform that integrates and monetizes all content - asserting its value - by creating a
                            place where artists, producers, and brands can control publishing. Each purchase unlocks (timed)
                            access to more content from that brand, incentivizing app usage, and exposure.  Capitalize on our
                            ability to distribute audio/visual media,editorials, and merchandise through a unified platform.
                            Serves business vertically and horizontally.
                            <br></br>
                            <br></br>
                            Aggregate brands and the content that they curate to distill each brand into monetized components.
                            Set synergistic and complimentary brands together: The New Yorker on the same platform as
                            The New York Times, Complex Media alongside Vice, and target users appropriately. Cater to
                            consumers desires for options and abundance while avoiding the perceived commitment of
                            subscription, hooking them into a loop of purchases. Serves as a better tool for putting
                            value in each piece of media, and streamlines the experiences for content producers and users
                            alike. Supports data collection, multi-media targeting, increased exposure, evolving into unique
                            experiences for users.
                        </p>
                        <div className="topic-header">
                            <h2>The Method</h2>
                        </div>
                        <p className="body-text">
                            Bring users into multi-media platform with constant waves and exposure to varied content.
                            Incentivize purchases to give more access, each purchase and each wave of content offers
                            further access are users are more deeply entrenched into the platform.  Build a multi-media
                            service more akin to a blog community with 24 hour updates, rather than a sterile, utilitarian
                            application.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="col-sm-6">
                            <div className="blue-container text">
                                <h5>Blue Ocean Strategy</h5>
                                <p className="light-text">
                                    Create open “blue ocean” of uncontested market space, as opposed to fighting for tiny
                                    portions of market share in highly contested “red oceans.”
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="blue-container text">
                                <h5>Whales</h5>
                                <p className="light-text">
                                    Appeal to the “whales”: 10% of users make up 70% of in-app purchases, 59% of app
                                    revenue in free-to-play model.  More than 80% of mobile app ad revenue is generated by
                                    20% of its users. This 20% of high-value users in the first month continue to drive 67%
                                    of revenue in the subsequent month (equating to ~6x more revenue than other users).
                                </p>
                            </div>
                        </div>
                        <Whale/>
                        <p className="body-text">
                            Prioritize the Whale that will spend and engage.  With push notifications and constant content
                            additions, increase the “gamification” of the app/service.  Users will constantly be looking
                            for the best value, breaking news, and exclusive content.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export class Purchase extends React.Component{
    render() {
        return (
            <div className="purchase container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="diagram-container">
                            <div className="cycle-step" id="step-one">
                                <h5>Purchase</h5>
                                <p className="body-text">
                                    Pay-per-item, prices set by
                                    producer/brand. Permanent access via platform and download option.
                                </p>
                            </div>
                            <Cycle/>
                            <div className="row">
                                <div className="col-md-4">
                                <div className="cycle-step" id="step-three">
                                    <h5>Exposure</h5>
                                    <p className="body-text">
                                        The streaming access exposes users to more content available for purchase, receive targeted
                                        recommendations, offers to purchase exclusive physical
                                        merchandise. Push notification for updates.  Aggregate updates RSS reader style in some
                                        part of the UI/UX. Tie more advertising into unlocked streamed content, Ad-free only if content is purchased.
                                    </p>
                                </div>
                                </div>
                                <div className="col-md-4 col-md-offset-4">
                                <div className="cycle-step" id="step-two">
                                    <h5>Streaming</h5>
                                    <p className="body-text">
                                        Timed access to other media of the same artist/producer/brand. Tiered unlocks
                                        based on levels of purchase.
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Content extends React.Component {
    render() {
        return (
            <div className="background-image" id="wave-3" style={{backgroundImage:`url(${Wave3})`}}>
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="header-container">
                                <h2>Unlocking Premium Content</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="scroll-container">
                                <UnlockBox data={list}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <p className="white-text">
                                Further monetizing the multi-media infrastructure in place creates a unique,
                                exclusive platform for comprehensive artist content.  Integration of services
                                incentivize user activity, in-app browsing, and checking release dates to
                                maximize content exposure.  Further differentiation and added value by including a
                                constant feed of updates, 24 hour/blog style editorial content, limited merchandise,
                                targeted ticket sales, giveaways.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class UnlockBox extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let scrollBox = this.props.data.map(function(datum, i) {
                return(
                    <div className="blue-container" key={i}>
                        <p className="light-text" key={i}>{datum.text}</p>
                        <img src={datum.img} />
                    </div>
                )
            });
            return (
                <div className="flex">
                    {scrollBox}
                </div>
            )
        }
}