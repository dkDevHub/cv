import Wrapper from "@/components/templates/Wrapper";
import cl from "./Header.module.css"
import { cn } from "@/lib/utils";
import Link from "@/components/atomic/link/Link";

function Header() {
    return (
        <header className={`section ${cl.header}`}>
            <Wrapper className="items-center">
                <div className={cl.block}>
                    <nav className={cl.content + " bg-glass"}>
                        <ul className={cl.navigation}>
                            <li><Link href="#hero">Hero</Link></li>
                            <li><Link href="#tech">Tech stack</Link></li>
                            <li><Link href="#about">About me</Link></li>
                            <li><Link href="#ui">UI Kit</Link></li>
                        </ul>
                    </nav>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;