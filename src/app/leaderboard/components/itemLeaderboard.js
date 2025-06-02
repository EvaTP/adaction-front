"use client";
import Image from "next/image";
import styles from "../page.module.css";
import layoutStyles from "../../styles/layout.module.css";
import { useState, useEffect } from "react";

export default function ItemLeaderboard({ volunteer }) {
  return (
    <div className={styles.volunteer_item}>
      <div className={styles.volunteer_info}>
        <h3 className={styles.volunteer_info_name}>
          {volunteer.firstname}
        </h3>
        <p className={styles.volunteer_info_p}>
          {volunteer.total_points} points</p>
      </div>
    </div>
  );
}
