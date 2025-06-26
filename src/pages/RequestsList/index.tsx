import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import { RequestCard } from "../../widgets/RequestCard";
import { Button } from "../../shared/ui/Button";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const RequestsList: React.FC = () => {
  const navigate = useNavigate();
  const { requests } = useSelector((state: RootState) => state.requests);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{t("requestsTitle")}</h1>
        <Button onClick={() => navigate("/requests/new")}>
          {t("createRequest")}
        </Button>
      </div>

      {requests.length === 0 ? (
        <div className={styles.empty}>{t("noRequests")}</div>
      ) : (
        <div className={styles.list}>
          {requests.map((request) => (
            <RequestCard
              key={request.id}
              request={request}
              onClick={() => navigate(`/requests/${request.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
