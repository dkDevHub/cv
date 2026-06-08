import { ReactNode } from "react";
import Header from "@/components/sections/header/Header";
import { cn } from "@/lib/utils";
import FilterSvg from "../atomic/filter-svg/FilterSvg";

interface Props {
    children: ReactNode;
    classname?: string;
}

function AppLayout({ children, classname }: Props) {
    return (
        <>
            <Header />
            <main className={cn("section flex-1 gap-[100px] pb-28", classname)}>
                {children}
            </main>
            <FilterSvg/>
        </>
    );
}

export default AppLayout;
