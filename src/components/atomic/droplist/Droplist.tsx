import { ChevronRight } from "lucide-react";
import cl from "./Droplist.module.css"
import { ReactNode } from "react";

interface DroplistProps {
    children: ReactNode;
}

function Droplist({ children }: DroplistProps) {
    return <div className={cl.droplist}>{children}</div>;
};

interface ChildProps {
    defaultChecked?: boolean;
    children: ReactNode;
}

function Title({ children, defaultChecked }: ChildProps) {
    return (
        <label className={cl.trigger}>
            <div className={cl.title}>
                <span>{children}</span>
                <ChevronRight size={20} strokeWidth={2.25} />
            </div>
            <input type="checkbox" defaultChecked={defaultChecked} />
        </label>
    );
}

function Content({ children }: ChildProps) {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>{children}</div>
        </div>
    );
}

Droplist.Title = Title;
Droplist.Content = Content;

export default Droplist;