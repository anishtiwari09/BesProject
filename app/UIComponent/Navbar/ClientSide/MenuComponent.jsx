import { Button, Menu, MenuItem } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function MenuCompoenent({ data, index, open, setOpen }) {
  const timerRef = useRef(null);
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
  const pathName = usePathname();

  const handleMouseMovement = (e) => {
    if (e.target.className?.includes("MuiBackdrop-invisible")) handleClose();
  };
  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);
  return (
    <>
      <div className="flex items-end">
        <Button
          aria-controls={"basic-menu"}
          onMouseEnter={handleClick}
          className="text-white"
          style={{
            color: "white",
            position: "relative",
            zIndex: 1301,
          }}
        >
          <a
            className={`header2_menu_list ${
              open
                ? "header2_menu_list_open"
                : pathName.startsWith(data.path) && data.path
                ? "header2_menu_list_open"
                : ""
            }`}
          >
            {data?.name}
          </a>
        </Button>
        {data?.isExpandable && data?.subChildren.length ? (
          <Menu
            open={open}
            anchorEl={anchorEl}
            onMouseMove={handleMouseMovement}
            onClose={handleClose}
            className="menu_drop"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            id="menu_drop"
          >
            {data.subChildren.map((item, key) => {
              let parentPath = item?.isSeprateParentPath
                ? item?.parentPath
                : data.path;

              return item?.isExpandable && item?.subChildren.length ? (
                <div key={key}>
                  <h3 className="font-bold" style={{ padding: "6px 16px" }}>
                    {item?.name}
                  </h3>
                  <ul className="flex-col gap-1 flex">
                    {item.subChildren?.map((sub_item, sub_key) => {
                      let newPath = sub_item?.isSeprateParentPath
                        ? sub_item?.parentPath
                        : parentPath + item.path;
                      return (
                        <li key={sub_item.id}>
                          <MenuItem
                            onClick={handleClose}
                            style={{ padding: "6px 30px" }}
                          >
                            <a href={newPath + sub_item.path}>
                              {sub_item.name}
                            </a>
                          </MenuItem>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <MenuItem onClick={handleClose} key={key}>
                  <a href={parentPath + item.path}>{item.name}</a>
                </MenuItem>
              );
            })}
          </Menu>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
