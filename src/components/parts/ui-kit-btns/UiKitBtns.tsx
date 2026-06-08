"use client"
import { ShoppingCart, User } from "lucide-react";
import Button from "@/components/atomic/button/Button";
import Divider from "@/components/atomic/divider/Divider";
import { useState } from "react";

function UiKitBtns() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 700);
    }
    

    return (
        <>
            <h3 className="h4">Buttons</h3>
            <Divider>
                <span className="text-muted-foreground font-medium">Variants</span>
            </Divider>
            <div className="flex flex-wrap gap-2">
                <Button variant="neutral">Neutral</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button>Primary</Button>
            </div>
            <Divider>
                <span className="text-muted-foreground font-medium">Icon</span>
            </Divider>
            <div className="flex flex-wrap gap-2">
                <Button size="icon" variant="neutral" aria-label="neutral icon button">
                    <ShoppingCart size={20} strokeWidth={2.25} />
                </Button>
                <Button size="icon" variant="ghost" aria-label="ghost icon button">
                    <ShoppingCart size={20} strokeWidth={2.25} />
                </Button>
                <Button variant="neutral">
                    <ShoppingCart size={20} strokeWidth={2.25} />
                    <span>Shopping</span>
                </Button>
            </div>
            <Divider>
                <span className="text-muted-foreground font-medium">State</span>
            </Divider>
            <div className="flex flex-wrap gap-2">
                <Button size="icon" variant="outline" isLoading={true} aria-label="loading state on button">
                    <ShoppingCart size={20} strokeWidth={2.25} />
                </Button>
                <Button className="w-32" variant="neutral" isLoading={loading} onClick={handleClick}>
                    <User size={20} strokeWidth={2.25} />
                    Click
                </Button>
                <Button variant="neutral" disabled>
                    Disabled
                </Button>
            </div>
        </>
    );
}

export default UiKitBtns;
