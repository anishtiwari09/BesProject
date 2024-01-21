import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";

export default function MenuCompoenent({ data, index, open, setOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = (index) => {
    setAnchorEl(null);
    setOpen(-1);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(index);
  };
  return (
    <>
      <div>
        <Button
          aria-controls={"basic-menu"}
          onClick={handleClick}
          className="text-white"
        >
          {data?.name}
        </Button>
        {data?.isExpandable && data?.subChildren.length ? (
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {data.subChildren.map((item, key) => (
              <MenuItem onClick={handleClose} key={item.id}>
                {item?.isExpandable && item?.subChildren.length ? (
                  <>
                    <div>
                      <h3 className="font-bold">{item?.name}</h3>
                      <ul className="p-2 flex-col gap-1 flex">
                        {item.subChildren?.map((sub_item, sub_key) => (
                          <li key={sub_item.id}>{sub_item.name}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  item.name
                )}
              </MenuItem>
            ))}
          </Menu>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
