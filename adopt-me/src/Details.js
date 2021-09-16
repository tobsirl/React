import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import ThemeContext from './ThemeContext'
import Modal from './Modal'

class Details extends Component {
  state = { loading: true, showModal: false }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`,
    )

    const json = await res.json()
    this.setState(Object.assign({ loading: false }, json.pets[0]))
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal })

  adopt = () => (window.location = 'http://bit.ly/pet-adopt')

  render() {
    const { animal, breed, city, state, description, name, images } = this.state

    if (this.state.loading) {
      return <h2>Loading...</h2>
    }

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

const DetailsWithRouter = withRouter(Details)

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  )
}
