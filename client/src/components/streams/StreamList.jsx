import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreams = () => {
    return (
      <div className="ui container">
        {this.props.streams.map((stream) => {
          return (
            <div key={stream.id} style={{ margin: "20px" }}>
              <h3>{stream.title}</h3>
              <p>{stream.description}</p>
              <p>id: {stream.id}</p>
              {this.renderAdmin(stream)}
            </div>
          );
        })}
      </div>
    );
  };

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="ui buttons">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui secondary button"
          >
            Edit
          </Link>

          <button className="ui negative button">Delete</button>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    console.log("streams:", this.props.streams);
    return (
      <div>
        <h3>StreamList</h3>
        <div>{this.renderStreams()}</div>
        <Link to="/streams/details">Go to stream details</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
