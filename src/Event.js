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
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="events">
        <p className="summary"> {event.summary}</p>

        <div className="start-date">
          {event.start.dateTime}
          <p className="start-time"></p>
          {event.start.timeZone}
        </div>

        <p className="location">
          {event.summary} | {event.location}
        </p>

        {!collapsed && (
          <div
            className={`extra-details ${
              this.state.collapsed ? "hide" : "show"
            }`}
          >
            <h4 className="about">More Info</h4>

            <p className="event-description">{event.description}</p>
          </div>
        )}
        <button
          className={`${collapsed ? "show" : "hide"}-details-btn`}
          onClick={this.handleClick}
        >
          {collapsed ? "Want to go?" : "Maybe not"}
        </button>
      </div>
    );
  }
}
export default Event;
