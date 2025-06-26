import React from "react";
import { RequestForm } from "../../../requests/ui/RequestForm";
import type { Category } from "../../../requests/model/types";
import styles from "./styles.module.css";
import type { RequestItem } from "../../../../entities/request/types";
import { useTranslation } from "react-i18next";

interface EditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: RequestItem;
  onSubmit: (data: RequestItem) => void;
}

export const EditRequestModal: React.FC<EditRequestModalProps> = ({
  isOpen,
  onClose,
  request,
  onSubmit,
}) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleSubmit = (data: Omit<RequestItem, "id" | "createdAt">) => {
    onSubmit({
      ...request,
      ...data,
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{t("editRequest")}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label={t("close")}
          >
            &times;
          </button>
        </div>
        <RequestForm
          onSubmit={handleSubmit}
          initialValues={{
            title: request.title,
            description: request.description,
            category: request.category as Category,
          }}
          buttonText={t("saveChanges")}
        />
      </div>
    </div>
  );
};
