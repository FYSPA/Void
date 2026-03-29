export default function LightTop() {
    return (
        /* Contenedor relativo para posicionar las luces */
        <div className="relative w-full flex justify-center">

            {/* 1. EL RESPLANDOR PÚRPURA (Capa de fondo) */}
            <div className="absolute top-0 w-[90%] h-40 bg-white/30 blur-[120px] rounded-full z-10" />

            {/* 2. LA LÍNEA BLANCA (Capa superior) */}
            <div className="relative h-2 z-20 w-[90%] bg-white/90 blur-[25px] rounded-full border-t border-white" />

        </div>
    )
}