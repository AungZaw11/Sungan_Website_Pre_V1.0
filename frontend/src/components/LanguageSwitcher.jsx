import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' }
    ];

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
        localStorage.setItem('i18nextLng', langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.language-dropdown')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative language-dropdown">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <FaGlobe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium hidden sm:inline">
                    {languages.find(l => l.code === currentLanguage)?.flag}
                    {' '}
                    {languages.find(l => l.code === currentLanguage)?.name}
                </span>
                <span className="text-sm font-medium sm:hidden">
                    {languages.find(l => l.code === currentLanguage)?.flag}
                </span>
            </button>

            <div className={`absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 transition-all z-50 
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg flex items-center gap-2 ${currentLanguage === lang.code ? 'text-primary font-semibold bg-primary/5' : 'text-body'
                            }`}
                    >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                        {currentLanguage === lang.code && (
                            <span className="ml-auto text-primary">✓</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}