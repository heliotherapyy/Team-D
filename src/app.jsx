import React from 'react';
import './lib/firebaseConfig.js';
import {facebookAPI} from './lib/apiConfig.js';
import ReactTooltip from 'react-tooltip';
import ProgressLabel from 'react-progress-label';

// Add components inside curly brackets
import {Platform, VisualCue, Title} from './components';

export default class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      isFB: "",
      isInsta:"",
      isFBMetrics:"",
      isInstaMetrics:"",
    };

    this.handleFBChange = this.handleFBChange.bind(this);
    this.handleInstaChange = this.handleInstaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReadMoreFB = this.handleReadMoreFB.bind(this);
    this.handleReadMoreInsta = this.handleReadMoreInsta.bind(this);

  }

  componentDidMount() {
    facebookAPI();
  }


  handleFBChange(e) {
    if(e.target.checked){
      this.setState({
        isFB:"Facebook",
      })
    } else{

      this.setState({
        isFB: ""
      })
    }
  }

  handleInstaChange(e) {
    if(e.target.checked){
      this.setState({
        isInsta:"Instagram"

      })
    } else{
      this.setState({
        isInsta:""
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleReadMoreFB(e) {
    if(e.target.checked){
      this.setState({
        isFBMetrics:"ShowMoreFBmetrics"

      })
    } else {
      this.setState({
        isFBMetrics:""
      })
    }
  }

  handleReadMoreInsta(e) {
    if(e.target.checked){
      this.setState({
        isInstaMetrics:""

      })
    } else {
      this.setState({
      isInstaMetrics:"ShowMoreInstametrics"
      })
    }
  }

  render() {

    var progress = "80";
    var textStyle = {
      'fill': '#ffffff',
      'textAnchor': 'middle'
    };
    var textStyle2 = {
      'fill': '#FFDD57',
      'textAnchor': 'middle',
      'font-size': "50px"
    };


    return (
      <section className="container">
        <Title />

        {/* Platform Selection */}
        <Platform handleSubmit={this.handleSubmit}
                  handleFBChange={this.handleFBChange}
                  handleInstaChange={this.handleInstaChange}
        />



        {/* Temporary
        <section id="labels">
          <VisualCue isFB={this.state.isFB} />

          <ProgressLabel
                style={{display: this.state.isInsta ? 'block' : 'none', top: "150px" }}
                data-tip
                data-for="2"
                progress={45.15}
                startDegree={0}
                progressWidth={8}
                trackWidth={30}
                cornersWidth={4}
                size={340}
                fillColor="black"
                trackColor="white"
                progressColor="#fbad50">
                <text data-tip data-for="score" x="170" y="160" style={textStyle}>Nova Score:</text>
                <text data-tip data-for="score" x="170" y="210" style={textStyle2}>45.15</text>
          </ProgressLabel>
          <ReactTooltip id="2" effect='solid'>
            <span>Total Video Views</span>
            <ul>
              <li>Facebook: 674</li>
              <li>Instagram: 230</li>
            </ul>
          </ReactTooltip>

        </section>
        */}

        {/* Left Video */}
        <div id="left-half">
          <article>
            <h1 id="title1"></h1>
            <div id="img">
              <iframe id="image1"></iframe>
            </div>
            <div  style={{display: this.state.isFBMetrics? 'block' : 'none', top: '120px'}}></div>
            <ul id="content1"></ul>
          </article>
        </div>

        {/* Right Video */}
        <div id="right-half">
          <article>
            <h1 id="title2"></h1>
            <div id="img">
              <iframe id="image2"></iframe>
            </div>
            <div style={{display: this.state.isInstaMetrics ? 'block' : 'none', top: '150px'}}></div>
            <ul id="content2">
              <li>Total Views: 230</li>
              <li>Engagement: 44</li>
              <li>Total Reach: 291</li>
              <li>Likes: 41</li>
              <li>Comments: 2</li>
              <li>Impressions: 450</li>
            </ul>
          </article>
        </div>
      </section>
    )
  }
}
