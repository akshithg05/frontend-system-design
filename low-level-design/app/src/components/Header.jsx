import { useContext } from "react";
import { Link } from "react-router-dom";
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
      className={`${theme === "dark" ? "bg-black" : "bg-white"} flex flex-wrap justify-between`}
    >
      <div className="flex">
        <Link to="/">
          <h1
            className={`px-10 py-5 text-2xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            {t("header.title")}
          </h1>
        </Link>
        <nav
          className={`py-6 ${theme === "dark" ? "text-white" : "text-black"} flex flex-wrap gap-4`}
        >
          <Link to="/login">{t("nav.login")}</Link>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/team">{t("nav.team")}</Link>
          <Link to="/accordion">{t("nav.accordion")}</Link>
          <Link to="/nestedComments">{t("nav.nested_comments")}</Link>
          <Link to="/imageSlider">{t("nav.image_slider")}</Link>
          <Link to="/pagination">{t("nav.pagination")}</Link>
          <Link to="/livechat">{t("nav.live_chat")}</Link>
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
