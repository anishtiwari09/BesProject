"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./side.module.css";
export default function SideNavMap({ db, parentPath }) {
  const pathname = usePathname();

  return (
    <ul className="pl-2">
      {db.map((item, key) => (
        <li key={item.id}>
          <Link
            href={parentPath + item.path}
            className={`${
              pathname == parentPath + item.path ? styles.selected : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
