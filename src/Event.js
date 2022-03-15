import React, { Component } from "react";

class Event extends Component {
  render() {
    const { events } = this.props;
    return (
      <div className="summary">
        <h1>{events.description}</h1>
      </div>
    );
  }
}
export default Event;
