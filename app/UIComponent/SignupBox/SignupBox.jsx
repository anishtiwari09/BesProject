import { Box, Card, Modal, Stack, TextField } from "@mui/material";
import React from "react";

export default function SignupBox() {
  return (
    <Modal fullWidth open={true}>
      <Stack sx={{ width: "100%", height: "100%", paddding: 10 }}>
        <Card sx={{ minHeight: 200, minWidth: "400px", margin: "auto" }}>
          <Stack></Stack>
        </Card>
      </Stack>
    </Modal>
  );
}
