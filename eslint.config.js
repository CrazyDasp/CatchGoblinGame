export default [
    {
      files: ["src/**/*.js"], // Укажите пути к вашим JavaScript-файлам
      rules: {
        // Пример правил ESLint
        "no-unused-vars": "error",
        "no-console": "warn",
      },
      languageOptions: {
        sourceType: "module",
      },
    },
  ];
  