import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import { IoIosGlobe } from "react-icons/io";
import { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LINGUAGENS } from "../../constants";
import { FaCheck } from "react-icons/fa6";

const URL_BANDEIRAS = "https://flagcdn.com/"

type BotaoTraduzirProps = {
    className?: string
}

export default function BotaoTraduzir({ className }: BotaoTraduzirProps) {
    const { i18n: {changeLanguage, language} } = useTranslation();

    const handleChangeLanguage = (linguagem: string) => {
      changeLanguage(linguagem);
    }

    const isCurrentLanguage = (linguagem: string): boolean => {
        return linguagem === language;
    }

    useEffect(() => {
        localStorage.setItem('linguagem', language);
    //    document.title = "teste" 
    }, [language])

    return (
        <Menu>
            <MenuButton >
                    <IoIosGlobe className={`cursor-pointer ${className}`}></IoIosGlobe>
            </MenuButton>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <MenuItems anchor="bottom" className="flex flex-col p-2 z-20 origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-neutral-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {LINGUAGENS.map((linguagem) => (
                        <MenuItem key={linguagem.id}>
                            <button className={`${isCurrentLanguage(linguagem.linguagem) && "text-blue-700"} self-start px-5 my-2 data-[focus]:text-blue-500 flex items-center justify-between w-full`} onClick={() => handleChangeLanguage(linguagem.linguagem)}>
                                <div className="flex gap-2 items-center">
                                    <img src={`${URL_BANDEIRAS}${linguagem.bandeira}.svg`} alt={`Bandeira ${linguagem.bandeira}`} className=" object-cover rounded" width={40}/>
                                    <span>{linguagem.descricao}</span>
                                </div>
                                {isCurrentLanguage(linguagem.linguagem) && (
                                    <FaCheck/>
                                )}
                            </button>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    )
}