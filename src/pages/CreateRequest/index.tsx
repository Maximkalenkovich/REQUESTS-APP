import React from "react";
import { useNavigate } from "react-router-dom";
import { addRequest } from "../../features/requests/model/slice";
import { RequestForm } from "../../features/requests/ui/RequestForm";
import styles from "./styles.module.css";
import type { RequestItem } from "../../entities/request/types";
import { useTranslation } from "react-i18next";
import { BackButton } from "../../utils/ButtonBack/ButtonBack";
import { useAppDispatch } from "../../app/store/useAppDispatch";

export const CreateRequest: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleSubmit = (data: Omit<RequestItem, "id" | "createdAt">) => {
    dispatch(addRequest(data));
    navigate("/requests");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackButton />
        <h1>{t("createNewRequest")}</h1>
      </div>
      <RequestForm onSubmit={handleSubmit} buttonText={t("createRequest")} />
    </div>
  );
};
