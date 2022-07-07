import React from "react";
import Player from "./Modalsecond";
import "../Components/video.css";
import Play from '../images/playplay.svg';

class Videosecond extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState((prevState) => ({
      open: !prevState.open
    }));
  };

  render() {
    return (
      <div className="modal-play">
        <img className="reactangle" src={Play} onClick={this.onOpenModal} />    
        <Player open={this.state.open} toggleModal={this.onOpenModal} />
      </div>
    );
  }
}

export default Videosecond;

