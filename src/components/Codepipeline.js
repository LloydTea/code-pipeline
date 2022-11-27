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
      this.setState((prevState) => ({
        Idea: [...prevState.Idea, this.state.NewItem],
      }));

      //print the new list of ideas
      //Set Input Back To default
      event.target.value = "";
    }
  };

  Ideamove = (event) => {
    //get the index of the element
    const index = this.state.Idea.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      this.setState((prevState) => ({
        //if left clicked move button to development stage
        Development: [...prevState.Development, event.target.value],
        //Remove Button From Idea List
        Idea: prevState.Idea.filter((_, i) => i !== index),
      }));
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      // Remove button from Idea List
      this.setState((prevState) => ({
        //Remove Button From Idea List
        Idea: prevState.Idea.filter((_, i) => i !== index),
      }));
    }
  };

  DevMove = (event) => {
    //get the index of the element
    const index = this.state.Development.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      this.setState((prevState) => ({
        //Add Button To Testing Stage List
        Testing: [...prevState.Testing, event.target.value],
        //Remove Button From Development List
        Development: prevState.Development.filter((_, i) => i !== index),
      }));
      //if left clicked move button to development stage
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.setState((prevState) => ({
        //Send Button To Top Idea Stage
        Idea: [event.target.value, ...prevState.Idea],
        // Remove button from Deployment Stage
        Development: prevState.Development.filter((_, i) => i !== index),
      }));
    }
  };

  TestMove = (event) => {
    //get the index of the element
    const index = this.state.Testing.indexOf(event.target.value);
    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      this.setState((prevState) => ({
        //Add Button To Deployment Stage
        Deployment: [...prevState.Deployment, event.target.value],
        //Remove Button From Testing Stage
        Testing: prevState.Testing.filter((_, i) => i !== index),
      }));
      //if left clicked move button to development stage
    }

    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.setState((prevState) => ({
        //Add Button To Development Stage
        Development: [event.target.value, ...prevState.Development],
        //Remove Button From Testing Stage
        Testing: prevState.Testing.filter((_, i) => i !== index),
      }));
    }
  };

  Depmove = (event) => {
    //get the index of the element
    const index = this.state.Deployment.indexOf(event.target.value);

    //if statement for right-click and left-click conditions
    if (event.type === "click") {
      //Remove Button From Idea List
      this.setState((prevState) => ({
        // Remove button from Development Stage
        Deployment: prevState.Deployment.filter((_, i) => i !== index),
      }));
    }
    //If Right-clicked
    else if (event.type === "contextmenu") {
      this.setState((prevState) => ({
        //Add Button To Testing Stage
        Testing: [event.target.value, ...prevState.Testing],
        // Remove button from Development Stage
        Deployment: prevState.Deployment.filter((_, i) => i !== index),
      }));
    }
  };
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
