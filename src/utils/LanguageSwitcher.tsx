import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: "en" | "ru") => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${
          i18n.language === "en" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={`${styles.button} ${
          i18n.language === "ru" ? styles.active : ""
        }`}
        onClick={() => changeLanguage("ru")}
      >
        RU
      </button>
    </div>
  );
};
