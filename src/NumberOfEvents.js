import React from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    message: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 100) {
      this.setState({
        message: "Enter number between 1 and 100",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        message: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="newValue"
          value={this.state.NumberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
