import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const OpenImage = ({ open, handleClose, imageSrc, imageAlt }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      style={{ zIndex: 9999999 }}
      PaperProps={{ style: { overflow: "hidden" } }}
    >
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: 0, overflow: "hidden" }}>
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{
            width: "100%",
            height: "auto",
            maxHeight: "calc(100vh - 64px)", // Subtract height for the close button and padding
            objectFit: "contain",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OpenImage;
