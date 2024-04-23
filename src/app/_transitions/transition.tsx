'use client'

import { motion } from 'framer-motion'

export default function Transition({children}: {children: React.ReactNode}) {
    return (
        <motion.div
            initial={{y: 20, opacity: 0 }}
            animate={{y: 0, opacity: 1 }}
            /* exit={{ opacity: 0 }} */
            transition={{ ease: "easeInOut", duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

//para que esto funcione en todas las paginas, es necesario llevar esto a un archivo template.tsx Son similares a los layouts, pero vuelven a renderizar en cada peticion