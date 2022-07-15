import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "90%",
  overflow: "hidden",
  maxWidth: "lg",
  borderRadius: "12px",
};

export default function EpFrame({ open, handleClose, link }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <iframe
            title="title"
            src={link}
            width="100%"
            height="480"
            style={{
              overflowX: "hidden",
              display: "block",
              border: "none" /* Reset default border */,
              width: "calc(100% + 17px)",
              height: "80vh",
            }}
          ></iframe>
        </Box>
      </Fade>
    </Modal>
  );
}
