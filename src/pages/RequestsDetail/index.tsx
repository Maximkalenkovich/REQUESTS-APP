import React, { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/store";
import {
  deleteRequest,
  updateRequest,
} from "../../features/requests/model/slice";
import { Button } from "../../shared/ui/Button";
import { EditRequestModal } from "../../features/editRequest/ui/EditRequestModal";
import type { RequestItem } from "../../entities/request/types";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { BackButton } from "../../utils/ButtonBack/ButtonBack";
import { useAppDispatch } from "../../app/store/useAppDispatch";

export const RequestDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { t } = useTranslation();

  const request = useSelector((state: RootState) =>
    state.requests.requests.find((req) => req.id === id)
  );

  if (!request) {
    return <div>{t("requestNotFound")}</div>;
  }

  const handleDelete = () => {
    dispatch(deleteRequest(request.id));
    navigate("/requests");
  };

  const handleUpdate = useCallback(
    (updatedRequest: RequestItem) => {
      dispatch(updateRequest(updatedRequest));
      setIsEditModalOpen(false);
    },
    [dispatch]
  );

  return (
    <div className={styles.wrapper}>
      <BackButton />
      <div className={styles.backButtonContainer}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{request.title}</h1>
          <div className={styles.actions}>
            <Button
              variant="secondary"
              onClick={() => setIsEditModalOpen(true)}
            >
              {t("edit")}
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              {t("delete")}
            </Button>
          </div>
        </div>

        <div className={styles.meta}>
          <span>
            {t("category")}: {request.category}
          </span>
          <span>
            {t("createdAt")}: {new Date(request.createdAt).toLocaleString()}
          </span>
        </div>

        <div className={styles.content}>
          <p>{request.description}</p>
        </div>

        <EditRequestModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          request={request}
          onSubmit={handleUpdate}
        />
      </div>
    </div>
  );
};
