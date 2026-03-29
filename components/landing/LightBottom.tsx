export default function LightBottom() {
    return (
        /* Contenedor relativo */
        <div className="relative w-full flex justify-center">

            {/* 1. EL RESPLANDOR (Capa de fondo) - Ahora sube */}
            <div className="absolute 
                bottom-0               /* Se pega a la parte inferior del contenedor */
                w-[100%] h-60 
                bg-black
                blur-[100px] 
                rounded-full 
                z-10 
                -translate-y-2         /* Lo subimos un poco para que nazca justo en la línea */
            " />

            {/* 2. LA LÍNEA BLANCA (Capa superior) */}
            <div className="relative 
                z-20 
                w-[90%] h-px 
                bg-linear-to-r from-transparent via-black/50 to-transparent 
                shadow-[0_-5px_15px_rgba(0,0,0,0.4)] /* Sombra hacia ARRIBA */
            " />

        </div>
    )
}