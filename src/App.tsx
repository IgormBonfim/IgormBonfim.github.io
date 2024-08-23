import { useState } from 'react';
import './App.css'
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "ptBr" ? "enUs" : "ptBr";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center text-3xl font-bold">
        <h1>Bien Venido</h1>
        <div>
          <h2>
            Teste:
            {t('specificKey')}
          </h2>
          <button className="px-4 py-2 bg-gray-500 text-blue-600	" type='button' onClick={handleChangeLanguage}>Trocar</button>
        </div>
      </main>
    </>
  )
}

export default App
