import React from "react";
import styles from "./styles.module.css";
import type { RequestItem } from "../../entities/request/types";

interface RequestCardProps {
  request: RequestItem;
  onClick: () => void;
}

export const RequestCard: React.FC<RequestCardProps> = ({
  request,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.content}>
        <h3 className={styles.title}>{request.title}</h3>
        <p className={styles.category}>{request.category}</p>
        <p className={styles.description}>
          {request.description.substring(0, 100)}...
        </p>
      </div>
      <div className={styles.footer}>
        <span className={styles.date}>
          {new Date(request.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};
