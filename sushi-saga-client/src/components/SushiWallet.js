import React from 'react'

class SushiWallet extends React.Component {

  constructor(){
    super()
    this.state = {
      wallet: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleForm(this.state.wallet)
    this.setState({
      wallet: ""
    })
  }

  render(){
    return(
      <div className="form" onSubmit={this.handleSubmit}>
        <h1>Add more money to your sushi wallet</h1>
        <form>
          <input id="wallet" name="wallet" type="text" value={this.state.wallet} onChange={this.handleChange}>

          </input>
          <input type="submit">
          </input>
        </form>
      </div>
    )
  }
}

export default SushiWallet