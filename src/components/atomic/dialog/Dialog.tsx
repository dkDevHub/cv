import { Dialog } from "@base-ui/react/dialog";
import cl from "./Dialog.module.css"
import Button from "../button/Button";
import { Trash2, X } from "lucide-react";
import { buttonVariants } from "../button/variants";
import { cn } from "@/lib/utils";

export default function ExampleDialog() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className={cn(buttonVariants({ variant: "neutral" }), "w-max")}>Open dialog</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop className={cl.backdrop} />
                <Dialog.Popup className={cl.popup}>
                    <div className={cl.intro}>
                        <Dialog.Title className={cl.title}>Confirm delete</Dialog.Title>
                        <Dialog.Description className={cl.decs}>
                            This action cannot be undone. This will permanently delete your item and all associated
                            data.
                        </Dialog.Description>
                    </div>
                    <div className={cl.close}>
                        <Dialog.Close className={buttonVariants({ size: "icon-sm", variant: "ghost" })}>
                            <X size={16} strokeWidth={2.5} />
                        </Dialog.Close>
                    </div>
                    <div className={cl.actions}>
                        <Dialog.Close className={buttonVariants({ size: "sm", variant: "ghost" })}>Cancel</Dialog.Close>
                        <Button size="sm" className="bg-destructive! text-foreground! hover:bg-destructive/75!">
                            <Trash2 size={16} strokeWidth={2.5} />
                            <span>Delete</span>
                        </Button>
                    </div>
                </Dialog.Popup>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
