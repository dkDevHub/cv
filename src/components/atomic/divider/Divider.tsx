import cl from "./Divider.module.css"
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

function Divider({children}: Props) {
    return (
        <div className={cl.divider}>
            <div className={cl.left}></div>
            {children && <div className={cl.content}>{children}</div>}
            <div className={cl.right}></div>
        </div>
    );
};

export default Divider;