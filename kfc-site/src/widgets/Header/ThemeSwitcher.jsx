import { useTheme } from "@/app/providers/theme";
import { useTranslation } from 'react-i18next'

const ThemeToggle = ({ styles }) => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme();

  return <button className={styles.header__themeSv} onClick={toggleTheme}>
    <span>{t('colorSheme')}</span> 
      {theme === 'dark' ? (
        <div className="icon_brightness_contrast"></div>
      ) : (
        <div className="icon_IcoMoon"></div>
      )}
    </button>
};

export default ThemeToggle;
