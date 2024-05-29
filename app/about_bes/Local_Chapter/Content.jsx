"use client";
import React from "react";
import styles from "../content.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import Link from "next/link";
export default function Content({ db }) {
  return (
    <div
      className={
        "flex flex-col max-w-[800px] m-auto p-4 " + styles.content_container
      }
    >
      <h2 className="text-[26px] font-bold">Commitees</h2>

      <div>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell>Chapter</StyledTableCell>
              <StyledTableCell>Chairperson</StyledTableCell>
              <StyledTableCell>Hon. Secretary</StyledTableCell>
              <StyledTableCell>Hon. Treasurer</StyledTableCell>
              <StyledTableCell>Mobile No.</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {db.map((item, key) => {
              return (
                <StyledTableRow key={item.id}>
                  <StyledTableCell>{key + 1}</StyledTableCell>
                  <StyledTableCell>{item.nameOfCommitees}</StyledTableCell>
                  <StyledTableCell>{item?.chairman}</StyledTableCell>
                  <StyledTableCell>
                    {item?.email ? (
                      <Link href={"mailto:" + item.email}>{item.email}</Link>
                    ) : (
                      ""
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "orange",
      color: theme.palette.common.white,
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      textAlign: "center",
    },
  };
});
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
