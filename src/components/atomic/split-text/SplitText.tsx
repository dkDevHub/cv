"use client"
import { isHeadlessBrowser } from "@/lib/utils";
import { ReactNode, useEffect, useId } from "react";
import SplitType from "split-type";

interface Props {
    children: ReactNode
}

function SplitText({children}: Props) {
    const id = useId();

    useEffect(() => {
        if (isHeadlessBrowser()) {
            document.getElementById(id)?.classList.add("is-headless");
            return;
        };

        const split = SplitType.create(`#${id}`, { types: 'words' })

        split.words?.forEach((elem, i) => {
            elem.style.setProperty("--i", i.toString())
            elem.classList.add('js-show-anim')

            const parent = elem.parentElement

            if (parent && parent.classList.contains("text-gradient")) {
                parent.classList.forEach(cl => elem.classList.add(cl))
                parent.classList.remove("text-gradient")
            }
        });

        return () => split.revert();
    }, [id])

    return (
        <div id={id} className="split-type">
            {children}
        </div>
    );
};

export default SplitText;