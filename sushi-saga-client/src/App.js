import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";
import SushiWallet from "./components/SushiWallet";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSushi: [],
      showSushi: [],
      eatenSushi: [],
      index: 4,
      dollar: 200,
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((sushiData) => {
        // const updatedSushi = sushiData.map(sushi => ({...sushi, eaten: false}))
        this.setState({
          allSushi: sushiData,
          showSushi: sushiData.slice(0, 4),
        });
      });
  }

  showMoreSushi = () => {
    this.setState((prevState) => ({
      showSushi: prevState.allSushi.slice(prevState.index, prevState.index + 4),
      index: prevState.index + 4 > prevState.allSushi.length ? 0 : prevState.index + 4,
    }));
  };

  plateClicked = (sushi) => {
    if (this.state.dollar > sushi.price) {
      this.setState((prevState) => ({
        eatenSushi: [...prevState.eatenSushi, sushi],
        dollar: prevState.dollar - sushi.price,
      }));
    }
  };

  handleForm = (amount) => {
    this.setState((prevState) => ({
      dollar: prevState.dollar + parseInt(amount, 10),
    }));
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.showSushi}
          eatenSushi={this.state.eatenSushi}
          showMoreSushi={this.showMoreSushi}
          plateClicked={this.plateClicked}
        />
        <Table plates={this.state.eatenSushi} dollar={this.state.dollar} />
        <SushiWallet handleForm={this.handleForm} />
      </div>
    );
  }
}

export default App;
