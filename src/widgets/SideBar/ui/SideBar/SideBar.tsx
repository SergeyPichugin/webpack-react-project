import { classNames } from 'shared/config/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
}
const SideBar = ({ className }: SideBarProps) => {
    const { t } = useTranslation('sidebar');
    const [collapsed, setCollapsed] = useState(false);
    const onToogle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button onClick={onToogle}>{t('Переключить')}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
export default SideBar;
