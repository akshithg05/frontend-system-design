import { useContext } from "react";
import { ThemeContext } from "./App";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { setTheme, theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation("common");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <header
      className={`bg-${theme === "dark" ? "black" : "white"} flex flex-wrap justify-between`}
    >
      <div className="flex">
        <a href="/">
          <h1
            className={`px-10 py-5 text-2xl font-bold text-${theme === "dark" ? "white" : "black"}`}
          >
            {t("header.title")}
          </h1>
        </a>
        <nav
          className={`py-6 text-${theme === "dark" ? "white" : "black"} flex flex-wrap gap-4`}
        >
          <a href="/login">{t("nav.login")}</a>
          <a href="/about">{t("nav.about")}</a>
          <a href="/team">{t("nav.team")}</a>
        </nav>
      </div>
      <div className="flex">
        <button
          className="my-4 px-4 mx-3 bg-purple-700 hover:bg-purple-400 transition-colors duration-300 rounded-lg"
          onClick={handleThemeChange}
        >
          <p className="text-white">{t("header.changeTheme")}</p>
        </button>
        <select
          onChange={handleLanguageChange}
          className="my-4 px-4 mx-3 text-white bg-red-700 hover:bg-purple-red transition-colors duration-300 rounded-lg"
        >
          <option value="en">{t("languages.english")}</option>
          <option value="de">{t("languages.german")}</option>
        </select>
      </div>
    </header>
  );
}
