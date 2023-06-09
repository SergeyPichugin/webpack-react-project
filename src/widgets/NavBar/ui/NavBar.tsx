import { classNames } from 'shared/config/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                    className={cls.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export default NavBar;
