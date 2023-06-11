import { FC, useMemo, useState } from 'react';
import {
    ThemeContext,
    Theme,
    LOCAL_STORAGE_THEME_KEY,
} from 'app/provaiders/ThemeProvaider/lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
const ThemeProvaider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toogleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    };
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvaider;
