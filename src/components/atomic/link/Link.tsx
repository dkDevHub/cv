import { cn } from "@/lib/utils";
import cl from "./Link.module.css"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({ children, className, ...props }: Props) {
    return (
        <a {...props} className={cn(className, cl.link)}>
            {children}
        </a>
    );
};

export default Link;