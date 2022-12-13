import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import styles from "../styles/ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
    const [isColorPicking, setIsColorPicking] = useState(false);
    const [hue, setHue] = useLocalStorage("Todo-color" ,"200");

    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage("Todo-theme", defaultDark ? "dark" : "light");

    useEffect(() => { 
        document.documentElement.setAttribute("color-scheme", theme);
    }, [theme]);
    
    useEffect(() => { 
        document.documentElement.style.setProperty("--_hue", hue);
    }, [hue]);

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <aside className={styles.wrapper} style={{backgroundColor: isColorPicking ? 'hsl(var(--muted) / .6)' : "transparent"}}>
            {isColorPicking ? (
                <>
                    <button className={`btn ${styles.close}`} aria-label="color picking close" onClick={() => setIsColorPicking(false)}><span aria-label="delete" role="img">❌</span></button>
                    <input type="range" className={styles.picker} name="slider" id="slider" min="0" max="360" aria-label="Color Slider" value={hue} onInput={(e) => setHue(e.target.value)} />
                </>
            ) : (
                <div className={styles.btns}>
                    <button className="btn" onClick={handleTheme} aria-label={`Change theme to ${theme === 'light' ? 'dark' : 'light'} Mode`}> <span aria-label="theme-mode" role="img">{theme === 'light' ? <>🌜</> : <>☀️</>}</span></button>
                    <button className="btn" onClick={() => setIsColorPicking(true)} aria-label="Enable color picking mode"><span aria-label="color-configuration" role="img">🛠️</span></button>
                </div>
            )}
        </aside>
    )
}

export default ThemeSwitcher;