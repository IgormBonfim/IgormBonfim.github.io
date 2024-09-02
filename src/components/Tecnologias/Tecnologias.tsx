import { useTranslation } from "react-i18next";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
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
            <h2 className="my-20 text-center text-3xl">{t("tecnologias")}</h2>
            <article className="flex flex-wrap items-center justify-center gap-4">
                <Tecnologia
                    tooltipId="c#"
                    tooltipContent="C#"
                    tooltipPlace="top"
                    link="https://dotnet.microsoft.com/pt-br/languages/csharp"
                >
                    <SiCsharp className="text-6xl text-violet-800"></SiCsharp>
                </Tecnologia>
                <Tecnologia
                    tooltipId=".net"
                    tooltipContent=".NET"
                    tooltipPlace="top"
                    link="https://dotnet.microsoft.com/pt-br/"
                >
                    <SiDotnet className="text-6xl text-violet-700"></SiDotnet>
                </Tecnologia>
                <Tecnologia
                    tooltipId="typescript"
                    tooltipContent="TypeScript"
                    tooltipPlace="top"
                    link="https://www.typescriptlang.org/pt/docs/"
                >
                    <SiTypescript className="text-6xl text-sky-600"></SiTypescript>
                </Tecnologia>
                <Tecnologia
                    tooltipId="angular"
                    tooltipContent="Angular"
                    tooltipPlace="top"
                    link="https://angular.dev/"
                >
                    <RiAngularjsLine className="text-6xl text-white-600"></RiAngularjsLine>
                </Tecnologia>
                <Tecnologia
                    tooltipId="react"
                    tooltipContent="React"
                    tooltipPlace="top"
                    link="https://react.dev/"
                >
                    <RiReactjsLine className="text-6xl text-cyan-400"></RiReactjsLine>
                </Tecnologia>
                <Tecnologia
                    tooltipId="mysql"
                    tooltipContent="MySQL"
                    tooltipPlace="top"
                    link="https://www.mysql.com/"
                >
                    <SiMysql className="text-6xl text-cyan-700"></SiMysql>
                </Tecnologia>
                <Tecnologia
                    tooltipId="mongodb"
                    tooltipContent="MongoDB"
                    tooltipPlace="top"
                    link="https://www.mongodb.com/"
                >
                    <SiMongodb className="text-6xl text-green-500"></SiMongodb>
                </Tecnologia>
                <Tecnologia
                    tooltipId="redis"
                    tooltipContent="Redis"
                    tooltipPlace="top"
                    link="https://redis.io/"
                >
                    <DiRedis className="text-6xl text-red-600"></DiRedis>
                </Tecnologia>
                <Tecnologia
                    tooltipId="git"
                    tooltipContent="Git"
                    tooltipPlace="top"
                    link="https://git-scm.com/"
                >
                    <FaGitAlt className="text-6xl text-orange-600"></FaGitAlt>
                </Tecnologia>
                <Tecnologia
                    tooltipId="docker"
                    tooltipContent="Docker"
                    tooltipPlace="top"
                    link="https://www.docker.com/"
                >
                    <FaDocker className="text-6xl text-cyan-600"></FaDocker>
                </Tecnologia>
                <Tecnologia
                    tooltipId="aws"
                    tooltipContent="AWS"
                    tooltipPlace="top"
                    link="https://aws.amazon.com/pt/"
                >
                    <FaAws className="text-6xl text-gray-100"></FaAws>
                </Tecnologia>
            </article>
        </section>
    );
}
