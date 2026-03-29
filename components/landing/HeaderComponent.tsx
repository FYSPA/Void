import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function HeaderComponent() {
    return (
        <header className="flex justify-between items-center w-full pl-10 pr-10 pt-2 z-10 bg-black font-space">
            <div className="flex justify-center items-center p-0 m-0 pl-10">
                <Image src="/ui/icon.png" alt="Logo" loading="eager" width={45} height={40} />
            </div>
            <nav className="flex justify-between pl-24">
                <ul className="flex w-full flex-row gap-10">
                    <a className="text-xs font-space flex items-center gap-2 " href="/">Home <FaChevronDown size={10} /></a>
                    <a className="text-xs font-space flex items-center gap-2 " href="/">Pricing <FaChevronDown size={10} /></a>
                </ul>
            </nav>
            <div className="flex gap-2 pr-10">
                <button className="text-xs font-space cursor-pointer bg-white/10 p-2 rounded-md border border-white/10"><a href="/"></a>Sin in</button>
                <button className="font-space text-xs cursor-pointer bg-white p-2 rounded-md text-black border border-white/10"><a href="/"></a>Registrarse</button>
            </div>
        </header>
    )
}