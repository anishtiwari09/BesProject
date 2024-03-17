import { Box, Drawer, List } from "@mui/material";
import React from "react";
import DataItemLIst from "./DataListItem";

export default function DrawerMenu({ onClose, data }) {
  return (
    <div>
      <Drawer open={true} onClose={onClose} anchor={"right"}>
        <Box sx={{ width: 250 }} role="presentation">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <DataItemLIst data={data} parentPath="" />
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
