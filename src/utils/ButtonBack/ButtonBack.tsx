import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./styles.module.css";
import { Button } from "../../shared/ui/Button";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      onClick={handleGoBack}
      className={styles.backButton}
      variant="secondary"
    >
      <FiArrowLeft className={styles.icon} />
    </Button>
  );
};
