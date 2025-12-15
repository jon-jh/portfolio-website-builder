"use client";
import { useEffect, useState } from "react";
import styles from "../styles/LoadingBar.module.scss";

export default function LoadingBar({ interval = 60, onRefresh }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    async function refresh() {
      if (onRefresh) await onRefresh();
      setProgress(100); // reset bar after refresh
    }

    // Refresh every X seconds (60)
    const refreshInterval = setInterval(refresh, interval * 1000);

    // Shrink bar every second
    const countdownInterval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 100 / interval : 0));
    }, 1000);

    return () => {
      clearInterval(refreshInterval);
      clearInterval(countdownInterval);
    };
  }, [interval, onRefresh]);

  return (
    <div className={styles.reloadContainer}>
      <span className={styles.reloadText}>
        Check https://stylepress4.wordpress.com/ each 60s
      </span>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
