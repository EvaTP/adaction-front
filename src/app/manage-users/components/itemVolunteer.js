"use client";
import Image from "next/image";
import styles from "./page.module.css";
import styles from "../styles/layout.module.css";
import styles from "../styles/globals.css";

import { useState, useEffect } from "react";

export default function ItemVolunteer({ volunteer }) {
  return (
    <div className={styles.volunteer - item}>
      <div className={styles.volunteer - info}>
        <h3>
          {volunteer.firstname} {volunteer.lastname}
        </h3>
        <p>{volunteer.location}</p>
      </div>

      <div className={styles.volunteer - actions}>
        <button className={`${styles.actionBtn} ${styles.editBtn}`}>
           <Image
          className={styles.logo}
          src="/pen.svg"
          alt="icon-edit"
          width={160}
          height={160}
          priority
        />
        </button>
        <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
           <Image
          className={styles.logo}
          src="/trash-red.svg"
          alt="icon-delete"
          width={160}
          height={160}
          priority
        />
        </button>
      </div>
    </div>
  );
}
