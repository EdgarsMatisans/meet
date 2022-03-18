import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { events } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="summary">
        <h4>{events.description}</h4>
        <p className="location">
          {events.summary} {events.location}
          {events.start.dateTime} {events.start.timeZone}
        </p>
        <button
          variant="outline-info"
          className={`${collapsed ? "show" : "hide"}-details`}
          onClick={this.handleClick}
        >
          {collapsed ? "Details" : "Hide Details"}
        </button>
        {!collapsed && (
          <div
            className={`extra-details ${
              this.state.collapsed ? "hide" : "show"
            }`}
          >
            <h3>Details:</h3>

            <p className="event-description">{events.description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
