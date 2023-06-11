import { classNames } from 'shared/config/lib/classNames/classNames';
import { Theme, useTheme } from 'app/provaiders/ThemeProvaider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toogleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
export default ThemeSwitcher;
