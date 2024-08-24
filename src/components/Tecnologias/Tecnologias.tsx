import { useTranslation } from "react-i18next"
import { SiCsharp } from "react-icons/si";
import { SiDotnet  } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Tecnologia from "../Tecnologia/Tecnologia";

export default function Tecnologias() {

    const { t } = useTranslation();
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h1 className="my-20 text-center text-3xl">{t('tecnologias')}</h1>
            <article className="flex flex-wrap items-center justify-center gap-4">
                <Tecnologia>
                    <SiCsharp className="text-6xl text-violet-800"></SiCsharp>
                </Tecnologia>
                <Tecnologia>
                    <SiDotnet className="text-6xl text-violet-700"></SiDotnet>
                </Tecnologia>
                <Tecnologia>
                    <SiTypescript className="text-6xl text-sky-600"></SiTypescript>
                </Tecnologia>
                <Tecnologia>
                    <RiAngularjsLine className="text-6xl text-white-600"></RiAngularjsLine>
                </Tecnologia>
                <Tecnologia>
                    <RiReactjsLine className="text-6xl text-cyan-400"></RiReactjsLine>
                </Tecnologia>
                <Tecnologia>
                    <SiMysql className="text-6xl text-cyan-700"></SiMysql>
                </Tecnologia>
                <Tecnologia>
                    <SiMongodb className="text-6xl text-green-500"></SiMongodb>
                </Tecnologia>
                <Tecnologia>
                    <DiRedis className="text-6xl text-red-600"></DiRedis>
                </Tecnologia>
                <Tecnologia>
                    <FaGitAlt className="text-6xl text-orange-600"></FaGitAlt>
                </Tecnologia>
                <Tecnologia>
                    <FaDocker className="text-6xl text-cyan-600"></FaDocker>
                </Tecnologia>
                <Tecnologia>
                    <FaAws className="text-6xl text-gray-100"></FaAws>
                </Tecnologia>
            </article>
        </section>
    )
}