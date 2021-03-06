import React from 'react';
import {FirstChart, SecondChart, TopWave, Cycle, ThirdChart, FourthChart} from "./svgs";
import Wave from '!file-loader!../static/img/wave.svg'
import Wave2 from '!file-loader!../static/img/wave2.svg'
import Wave3 from '!file-loader!../static/img/wave3.svg'
import Wave4 from '!file-loader!../static/img/wave4.svg'
import Whale from '../static/img/whale.svg'
import Unlock1 from '!file-loader!../static/img/unlock1.svg'
import Unlock2 from '!file-loader!../static/img/unlock2.svg'
import Unlock3 from '!file-loader!../static/img/unlock3.svg'

export const list = [{
    id: 1,
    text: "With a song download, receive exclusive video content",
    img: Unlock1
    }, {
    id: 2,
    text: "With an album pre-order, receive exclusive physical merchandise",
    img: Unlock2
    }, {
    id: 3,
    text: "Sell concert livestreams and festival merch on the same platform",
    img: Unlock3
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
                <Data />
                <Sources />
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
                        <div className="col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-2 col-xs-10 col-xs-offset-1">
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
            <div className="background-image" id="wave-2" style={{backgroundImage:`url(${Wave2})`}}>
                <div className="market container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
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
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div className="scroll-container charts-container">
                                <div className="flex">
                                    <div className="blue-container chart">
                                        <h4>Music Subscription Access</h4>
                                        <FirstChart/>
                                    </div>
                                    <div className="blue-container chart">
                                        <h4>The music streaming market in the US, 2016</h4>
                                        <ThirdChart/>
                                    </div>
                                    <div className="blue-container chart">
                                        <h4>The digital music market in the US, 2016</h4>
                                        <SecondChart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                            <div className="blue-container">
                                <h4>The US Recorded Music Market, 1990-2016</h4>
                                <FourthChart/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <p className="footnote">
                                RIAA Year-End Industry Shipment and Revenue Statistics, via <a href="https://musicbusinessresearch.wordpress.com/2017/05/05/3340/">
                                    musicbusinessresearch.wordpress.com
                                </a>
                            </p>
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
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
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
                            Set complementary media together: Podcasts with News/Editorials, Albums with Concert streams,
                            Interviews with Video Features.  Can also play similarly with brand synergy: Complex Media
                            alongside Vice and Revolt content, Rapradar with Genius, etc.  Cater to
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
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="col-sm-6">
                            <div className="blue-container text">
                                <h5>Blue Ocean Strategy</h5>
                                <p className="light-text">
                                    Create open “blue ocean” of uncontested market space, as opposed to fighting for tiny
                                    portions of market share in highly contested “red oceans.”
                                </p>
                                <div className="ocean-line"></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="blue-container text">
                                <h5>Whales</h5>
                                <p className="light-text">
                                    Appeal to the “whales”: 10% of users make up 70% of in-app purchases, equating to 59%
                                    of total revenue of those using a free-to-play model.
                                    More than 80% of mobile app ad revenue is generated by
                                    20% of its users. This 20% of high-value users in the first month continue to drive 67%
                                    of revenue in the subsequent month (equating to ~6x more revenue than other users).
                                </p>
                                <div className="whale-line"></div>
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
                    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                        <div className="diagram-container">
                            <Cycle/>
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
            <div className="content background-image" id="wave-3" style={{backgroundImage:`url(${Wave3})`}}>
                <div className="content container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="header-container">
                                <h2>Unlocking Premium Content</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="scroll-container">
                                <UnlockBox data={list}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
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

export class Data extends React.Component{
    render(){
        return (
            <div className="data container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                        <div className="topic-header">
                            <div className="circle"><h3>3</h3></div>
                            <div className="left-line"></div>
                            <h2>Aggregation of Data</h2>
                        </div>
                        <p className="body-text">
                            Access to unique, valuable consumer data (location, age, consumer habits) – purchases vs
                            streams, pre-orders, physical/merchandise, concert streams, ticket sales. Available to
                            artists, labels, publishers, sponsors for better understanding of base & trends.  Metrics
                            from the platform can be further monetized.
                            <br /> <br />
                            Pay model would take % of per item sale to apply toward streaming royalties. Can charge a
                            premium for downloads, if they are platform agnostic.  With purchase tied to access, there
                            is always an incentive for more purchases, creating a positive loop within the platform ecosystem.
                            <br /> <br />
                            Brands and multi-media content coexist on the platform, targeting users with recommendations,
                            and advertisements meshed streaming content.  Capitalize by curating their own content,
                            establish their own pricing, collecting and using consumer data to individualize the user
                            experience with their media, further driving consumption.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export class Sources extends React.Component {
    render(){
        return (
            <div className="sources background-image" id="wave-4" style={{backgroundImage:`url(${Wave4})`}}>
                <div className="sources container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="topic-header">
                                <div className="circle"><h3>4</h3></div>
                                <div className="left-line"></div>
                                <h2>Additional Sources</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="blue-container">
                                <a href="https://musicbusinessresearch.wordpress.com/2017/05/05/3340/" target="_blank">The US Recorded Music Market in a Long-term Perspective, 1990-2016</a>
                            </div>
                            <div className="blue-container">
                                <a href="https://medium.com/tapjoy/the-top-personas-of-free-to-play-mobile-gamers-and-how-to-treat-them-f36cb443e8c4" target="_blank">
                                    The Top Personas of Free-to-Play Mobile Gamers — and How to Treat Them
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                            <div className="blue-container">
                                <a href="https://www.bloomberg.com/news/articles/2016-09-20/spotify-apple-drive-u-s-music-industry-s-8-first-half-growth" target="_blank">
                                    The Music Industry Is Finally Making Money on Streaming
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}