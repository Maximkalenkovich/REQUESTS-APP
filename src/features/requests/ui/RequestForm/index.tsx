import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { Category } from "../../model/types";
import { Button } from "../../../../shared/ui/Button";
import { Input } from "../../../../shared/ui/Input";
import { Textarea } from "../../../../shared/ui/Textarea";
import type { RequestItem } from "../../../../entities/request/types";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

interface RequestFormProps {
  onSubmit: SubmitHandler<Omit<RequestItem, "id" | "createdAt">>;
  initialValues?: Omit<RequestItem, "id" | "createdAt">;
  buttonText?: string;
}

const categories: Category[] = ["Technical", "Billing", "General", "Other"];

export const RequestForm: React.FC<RequestFormProps> = ({
  onSubmit,
  initialValues = { title: "", description: "", category: "General" },
  buttonText,
}) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<RequestItem, "id" | "createdAt">>({
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        label={t("title")}
        error={errors.title}
        {...register("title", { required: "requiredField" })}
      />

      <Textarea
        label={t("description")}
        error={errors.description}
        {...register("description", { required: "requiredField" })}
      />

      <div className={styles.formGroup}>
        <label>{t("category")}</label>
        <select {...register("category")} className={styles.select}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {t(category.toLowerCase())}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">{buttonText || t("submit")} </Button>
    </form>
  );
};
