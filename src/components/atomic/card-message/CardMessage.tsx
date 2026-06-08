import Image from "next/image";
import cl from "./CardMessage.module.css"
import { cn } from "@/lib/utils";

interface Props {
    name: string
    comment: string
    img: string
    classname?: string
}

function CardMessage({ name, comment, classname, img }: Props) {
    return (
        <div className={cn("bg-liquid-glass", cl.card_message, classname)}>
            <Image className={cl.avatar} width="44" height="44" src={img} alt="avatar"></Image>
            <div className={cl.text}>
                <span className={cl.name}>{name}</span>
                <p className={cl.comment}>{comment}</p>
            </div>
        </div>
    );
};

export default CardMessage;