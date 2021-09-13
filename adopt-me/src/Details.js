import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Details extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`,
    )

    const json = res.json()
    this.setState(Object.assign({ loading: false }, json.pets[0]))
  }

  render() {
    console.log(this.state.loading)
    return (
      <div>
        <h2>hi</h2>
      </div>
    )
  }
}

export default withRouter(Details)
