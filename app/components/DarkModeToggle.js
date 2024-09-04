import { useEffect, useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('dark-mode') === 'true';
        setIsDarkMode(savedMode);
        document.documentElement.classList.toggle('dark', savedMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('dark-mode', newMode);
    };

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (
                <FaMoon size={20} className="text-[#0C0D42] cursor-pointer" />
            ) : (
                <BsSunFill size={20} className="text-[#ffffff] cursor-pointer" />
            )}
        </button>
    );
};

export default DarkModeToggle;
