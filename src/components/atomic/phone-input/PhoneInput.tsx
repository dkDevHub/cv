"use client"
import { Phone } from "lucide-react";
import options from "./mask";
import { useMaskito } from "@maskito/react";
import dynamic from "next/dynamic";

const Input = dynamic(() => import("@/components/atomic/input/Input"), {
    ssr: false,
});
interface Props {
    id?: string;
    name?: string;
    required?: boolean;
}

function PhoneInput({ id, name, required }: Props) {
    const maskedInputRef = useMaskito({ options });
    
    return (
        <Input id={id} name={name} icon={Phone} placeholder="+38 (063) 123 45 67" ref={maskedInputRef} required={required} />
    )
};

export default PhoneInput;