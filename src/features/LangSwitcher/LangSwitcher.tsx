import React, {memo, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import TranslateIcon from "./../../shared/assets/icons/Translate.svg";
import {Icon} from "../../shared/ui/Icon/Icon";
interface LangSwitcherProps {

}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    useEffect(() => { document.title = t('Наша погода') }, [i18n.language]);

    return (
        <div className={cls.wrapper}>
            <button className={cls.button} onClick={toggle}>
                <Icon Svg={TranslateIcon} width={32} height={32}/>
            </button>
        </div>
    );
});