"use client";
import Image from "next/image";
import styles from "../page.module.css";
import layoutStyles from "../../styles/layout.module.css";
import { useState, useEffect } from "react";

export default function ItemVolunteer({ volunteer }) {
  return (
    <div className={styles.volunteer_item}>
      <div className={styles.volunteer_info}>
        <h3>
          {volunteer.firstname} {volunteer.lastname}
        </h3>
        <p>{volunteer.location}</p>
      </div>

      <div className={styles.volunteer_actions}>
        <button className={`${styles.action_btn} ${styles.edit_btn}`}>
           <Image
          // className={styles.logo}
          src="/pen.svg"
          alt="icon-edit"
          width={40}
          height={40}
          priority
        />
        </button>
        <button className={`${styles.action_btn} ${styles.delete_btn}`}>
          <Image
          // className={styles.logo}
          src="/trash-red.svg"
          alt="icon-delete"
          width={40}
          height={40}
          priority
          />
        </button>
      </div>
    </div>
  );
}
