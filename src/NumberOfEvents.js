import React from "react";
import { ErrorAlert } from "./alert";

class NumberOfEvents extends React.Component {
  state = {
    NumberOfEvents: 12,
    message: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 1 || number > 100) {
      this.setState({
        message: "Enter number between 1 and 100",
      });
    } else {
      this.setState({
        NumberOfEvents: number,
        message: "",
      });
    }
  };

  render() {
    return (
      <div className="CitySearch">
        <ErrorAlert text={this.state.infoText} />
        <input
          type="text"
          className="numberOfEvents"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
