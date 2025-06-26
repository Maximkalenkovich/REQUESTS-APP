import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        requestsTitle: "Requests",
        createRequest: "Create Request",
        noRequests: "No requests found",
        editRequest: "Edit request",
        createNewRequest: "Create New Request",
        edit: "Edit",
        delete: "Delete",
        category: "Category",
        createdAt: "Created",
        requestNotFound: "Request not found",
        title: "Title",
        description: "Description",
        technical: "Technical",
        billing: "Billing",
        general: "General",
        other: "Other",
        requiredField: "This field is required",
        submit: "Submit",
        pageNotFound: "Page Not Found",
        pageNotFoundDescription:
          "Sorry, we couldn't find the page you're looking for.",
        goBack: "Go Back",
        goToMain: "Go to Main",
        saveChanges: "Save Changes",
        close: "Close",
      },
    },
    ru: {
      translation: {
        requestsTitle: "Заявки",
        editRequest: "Редактировать заявку",
        createRequest: "Создать заявку",
        createNewRequest: "Создать новую заявку",
        noRequests: "Заявки не найдены",
        edit: "Редактировать",
        delete: "Удалить",
        category: "Категория",
        createdAt: "Создано",
        requestNotFound: "Заявка не найдена",
        title: "Название",
        description: "Описание",
        technical: "Технический",
        billing: "Биллинг",
        general: "Общий",
        other: "Другое",
        requiredField: "Это поле обязательно",
        submit: "Отправить",
        pageNotFound: "Страница не найдена",
        pageNotFoundDescription:
          "Извините, мы не смогли найти страницу, которую вы ищете.",
        goBack: "Назад",
        goToMain: "На главную",
        saveChanges: "Сохранить изменения",
        close: "Закрыть",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
