import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const {
          latitude,
          longitude
        } = position.coords

        this.setState({
          lat: latitude
        })
      },
      (err) => console.log(err)
    );
  };



  render() {

    return ( <
      div >
      Alexis Flores {
        this.state.lat
      } <
      /div>
    );
  };
};

ReactDOM.render( <
  App / > ,
  document.querySelector("#root")
);