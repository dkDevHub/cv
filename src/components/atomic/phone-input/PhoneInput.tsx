"use client"
import { Phone } from "lucide-react";
import Input from "../input/Input";
import options from "./mask";
import { useMaskito } from "@maskito/react";

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