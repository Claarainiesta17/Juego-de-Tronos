import { Link } from "react-router-dom";
import "./Footer.css"
import { useTranslation } from "react-i18next";

export default function Footer(){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    return(
        <div className="footer">
        <ul>
        <li><Link to="/characters">{t("characters")}</Link></li>
        <li><Link to="/casas">{t("houses")}</Link></li>
        <li><Link to="/cronologia">{t("cronology")}</Link></li>
        </ul>
        </div>
    )

}