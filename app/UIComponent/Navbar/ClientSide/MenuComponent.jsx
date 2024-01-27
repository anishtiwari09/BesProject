import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect } from "react";

export default function MenuCompoenent({ data, index, open, setOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = (index) => {
    setAnchorEl(null);
    setOpen(-1);
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setOpen(index);
  };

  return (
    <>
      <div className="flex items-end">
        <Button
          aria-controls={"basic-menu"}
          onMouseEnter={handleClick}
          className="text-white"
        >
          <a
            className={`header2_menu_list ${
              open ? "header2_menu_list_open" : ""
            }`}
          >
            {data?.name}
          </a>
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
