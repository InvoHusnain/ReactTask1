import React, { useState } from 'react';
import ReactPlayer from "react-player";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const Videomodal = () => {
    const [open, setOpen] = useState(false);
  
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  
    return (
      <div>
        <button onClick={onOpenModal}>Open modal</button>
        <Modal open={open} onClose={onCloseModal} center>
        <ReactPlayer
          url="https://vimeo.com/291715535"
        />
        </Modal>
      </div>
    );
}

export default Videomodal;