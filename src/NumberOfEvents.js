import React from "react";

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
