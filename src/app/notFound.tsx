import { useNavigate } from "react-router-dom";
import styles from "./styles/NotFound.module.css";
import { Button } from "../shared/ui/Button";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.status}>404</div>
        <h1 className={styles.title}>{t("pageNotFound")}</h1>
        <p className={styles.message}>{t("pageNotFoundDescription")}</p>
        <div className={styles.actions}>
          <Button
            onClick={() => navigate(-1)}
            className={`${styles.button} ${styles.secondary}`}
          >
            {t("goBack")}
          </Button>
          <Button
            onClick={() => navigate("/requests")}
            className={`${styles.button} ${styles.primary}`}
          >
            {t("goToMain")}
          </Button>
        </div>
      </div>
    </div>
  );
}
