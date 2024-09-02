import { ReactNode } from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface TecnologiaProps {
    children: ReactNode;
    tooltipId?: string;
    tooltipContent?: string;
    tooltipPlace?: PlacesType;
    link?: string;
}

export default function Tecnologia({
    link,
    children,
    tooltipId,
    tooltipContent,
    tooltipPlace,
}: TecnologiaProps) {
    return (
        <a
            href={link}
            target="_blank"
            className={`${link} && "cursor-pointer"} rounded-2xl border-2 border-neutral-800 p-4`}
            data-tooltip-id={tooltipId}
            data-tooltip-content={tooltipContent}
            data-tooltip-place={tooltipPlace}
        >
            <Tooltip id={tooltipId} />
            {children}
        </a>
    );
}
