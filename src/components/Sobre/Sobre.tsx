import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Sobre() {
  const IMG_URL = "https://github.com/igormbonfim.png";
  const CARGO = "cargo";
  const SOBRE = "sobre";
  const URL_CURRICULO = "linkCurriculo";
  const URL_WHATSAPP = "https://api.whatsapp.com/send?phone=5527992523204";
  const BTN_CONTATO = "btn.contato";

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  const { t } = useTranslation();
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-col items-center gap-4">
        <motion.img
          src={IMG_URL}
          alt="Igor Bonfim - Desenvolvedor de Software Full-Stack"
          className="rounded-full max-w-64"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        />
        <motion.h2
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-3xl"
        >
          {t(CARGO)}
        </motion.h2>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-4 font-light text-justify"
        >
          {t(SOBRE)}
        </motion.p>
        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 text-lg"
        >
          <a
            href={URL_WHATSAPP}
            target="_blank"
            className="rounded-xl bg-blue-700 hover:bg-blue-600 p-4"
          >
            {t(BTN_CONTATO)}
          </a>
          <a
            href={t(URL_CURRICULO)}
            target="_blank"
            className="rounded-xl border border-blue-700 text-blue-700 hover:text-zinc-100 hover:bg-blue-700 p-4"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
