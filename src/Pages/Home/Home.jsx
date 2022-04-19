import "./Home.css";
import Footer from '../../Components/Footer/Footer';
import Navigator from "../../NavFooter/Navigator";
import { useTranslation } from "react-i18next";
export default function HomePage() {
    const { t, i18n } = useTranslation(["translation"]);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
};

return(
        <div className="home">

        <Navigator/>
        <h1 className="titulo">{t("title")}</h1>
        <Footer/>
        </div>
    )
}