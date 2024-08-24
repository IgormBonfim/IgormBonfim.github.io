import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}  

export default function Tecnologia({ children }: Props) {
    return (
        <div className="rounded-2xl border-2 border-neutral-800 p-4">
            {children}
        </div>
    )
}