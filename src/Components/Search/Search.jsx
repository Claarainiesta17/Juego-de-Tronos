import { useForm } from "react-hook-form";
import './Search.css';
import { useTranslation } from "react-i18next";
export default function Search(onSubmit){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    const {register, handleSubmit}= useForm();
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("characterName")} type="text"></input>



    </form>

}