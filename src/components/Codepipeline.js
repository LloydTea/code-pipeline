import React, { Component } from "react";

class Codepipeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      NewItem: "",
      Idea: [],
      Development: [],
      Testing: [],
      Deployment: [],
    };

    this.RegNewEnter = this.RegNewEnter.bind(this);
    this.Ideamove = this.Ideamove.bind(this);
  }

  HandleOnChange = (event) => {
    this.setState({ NewItem: event.target.value });
  };

  RegNewEnter = (event) => {
    //On Click Of Enter Key And If Value Is Not Null
    if (event.key === "Enter" && event.target.value !== "") {
      //Add new element to the Idea list
      this.state.Idea.push(this.state.NewItem);

      //print the new list of ideas
      console.log(this.state.Idea);

      //Set Input Back To default
      event.target.value = "";
    }
  };

  Ideamove = (event) => {
    //get the index of the element
    const index = this.state.Idea.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      //if left clicked move button to development stage
      this.state.Development.push(event.target.value);

      //Remove Button From Idea List
      this.state.Idea.splice(index, 1);
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      // Remove button from Idea List
      this.state.Idea.splice(index, 1);
    }
  };

  DevMove = (event) => {
    //get the index of the element
    const index = this.state.Development.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      //if left clicked move button to development stage
      this.state.Testing.push(event.target.value);

      //Remove Button From Idea List
      this.state.Development.splice(index, 1);
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.state.Idea.unshift(event.target.value);

      // Remove button from Idea List
      this.state.Development.splice(index, 1);
    }
  };

  TestMove = (event) => {
    //get the index of the element
    const index = this.state.Testing.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      //if left clicked move button to development stage
      this.state.Deployment.push(event.target.value);

      //Remove Button From Idea List
      this.state.Testing.splice(index, 1);
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.state.Development.unshift(event.target.value);

      // Remove button from Idea List
      this.state.Testing.splice(index, 1);
    }
  };

  Depmove = (event) => {
    //get the index of the element
    const index = this.state.Deployment.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      //Remove Button From Idea List
      this.state.Deployment.splice(index, 1);
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.state.Testing.unshift(event.target.value);

      // Remove button from Idea List
      this.state.Deployment.splice(index, 1);
    }
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
  }
  // TODO add your code here.
  // Feel free to use a functional component.
  // Don't forget about candidate-written-response.md
  // when you finish coding!

  render() {
    return (
      <div>
        <label> Add an item: </label>
        <input
          type='text'
          name='NewEntry'
          id='NewEntry'
          className='assembly-add-item'
          value={this.state.value}
          onKeyPress={this.RegNewEnter}
          onChange={this.HandleOnChange}></input>
        <br></br>
        <div className='row'>
          <div className='assembly-stage'>
            Idea
            {this.NewBu}
            <IdeaBtn
              NewIdea={this.state.Idea}
              Ideatrigger={this.Ideamove}></IdeaBtn>
          </div>
          <div className='assembly-stage'>
            Development
            <Developmentbtn
              NewDev={this.state.Development}
              DevTrigger={this.DevMove}></Developmentbtn>
          </div>
          <div className='assembly-stage'>
            Testing
            <Testingbtn
              NewTest={this.state.Testing}
              TestTrigger={this.TestMove}></Testingbtn>
          </div>
          <div className='assembly-stage'>
            Deployment
            <Deploymentbtn
              NewDep={this.state.Deployment}
              DepTrigger={this.Depmove}></Deploymentbtn>
          </div>
        </div>
      </div>
    );
  }
}

function IdeaBtn(props) {
  return props.NewIdea.map((btn, index) => (
    <button
      onClick={props.Ideatrigger}
      onContextMenu={props.Ideatrigger}
      value={btn}
      className='assembly-item'
      key={index}>
      {btn}
    </button>
  ));
}

function Developmentbtn(props) {
  return props.NewDev.map((btn, index) => (
    <button
      className='assembly-item'
      key={index}
      onClick={props.DevTrigger}
      onContextMenu={props.DevTrigger}
      value={btn}>
      {btn}
    </button>
  ));
}

function Testingbtn(props) {
  return props.NewTest.map((btn, index) => (
    <button
      className='assembly-item'
      key={index}
      value={btn}
      onClick={props.TestTrigger}
      onContextMenu={props.TestTrigger}>
      {btn}
    </button>
  ));
}

function Deploymentbtn(props) {
  return props.NewDep.map((btn, index) => (
    <button
      className='assembly-item'
      key={index}
      value={btn}
      onClick={props.DepTrigger}
      onContextMenu={props.DepTrigger}>
      {btn}
    </button>
  ));
}
export default Codepipeline;
