import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SignupBox from "../SignupBox/SignupBox";

export default function LoginForm() {
  return (
    // <Card sx={{ minHeight: 200, minWidth: 200, padding: 2 }}>
    //   <Stack gap={1} justifyContent={"center"} margin={"auto"}>
    //     <Box>
    //       <Typography variant="h5">Member Login</Typography>
    //     </Box>
    //     <TextField placeholder="Registered Email Id" />

    //     <TextField placeholder="Password" />
    //     <Button
    //       variant="contained"
    //       style={{ background: "blue", width: "fit-content", margin: "auto" }}
    //     >
    //       Login
    //     </Button>
    //     <Button sx={{ border: "1px solid blue" }}>Create New Account</Button>
    //     <Button sx={{ border: "1px solid blue" }}>Forgot Password</Button>
    //   </Stack>
    // </Card>
    <SignupBox />
  );
}
