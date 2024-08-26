import { useTranslation } from "react-i18next";

export default function ErrorPage() {

    const { t } = useTranslation();

    return (
        <main className="w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-lg">{t('notfound')}</h2>
        </main>
    );
}