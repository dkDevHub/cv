"use client";
import * as React from "react";
import { Combobox as ComboboxUi } from "@base-ui/react/combobox";
import cl from "./Combobox.module.css";
import { ChevronDown, LucideProps, X } from "lucide-react";
import { ComponentProps } from "react";
import { ComboboxItem } from "@/types/types";
import { cn } from "@/lib/utils";

type RootProps = ComponentProps<typeof ComboboxUi.Root>;

interface Props extends RootProps {
    icon?: React.ComponentType<LucideProps>;
    values: ComboboxItem[] | null;
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    onClear?: () => void;
    ignoreFilledStyle?: boolean;
}

function Combobox({ icon: Icon, values, onInputValueChange, placeholder, name, id, required, ignoreFilledStyle, ...rootProps }: Props) {
    const classes = `${cl.input_group} ${Icon ? cl.input_icon : ""}`;

    const emptyTitle = values ?  "Нічого не знайдено" : "Введіть 3 букви";

    return (
        <ComboboxUi.Root onInputValueChange={onInputValueChange} {...rootProps}>
            <ComboboxUi.InputGroup className={cn(classes, { [cl.ignore_filled_state]: ignoreFilledStyle })}>
                {Icon && <Icon size={16} strokeWidth={2.25} className={cl.icon} />}
                <ComboboxUi.Input
                    placeholder={placeholder}
                    className={cl.input}
                    name={name}
                    id={id}
                    required={required}
                    autoComplete="off"
                />
                <div className={cl.buttons}>
                    <ComboboxUi.Clear className={cl.clear} aria-label="Clear selection">
                        <X size={18} />
                    </ComboboxUi.Clear>
                    <ComboboxUi.Trigger className={cl.trigger} aria-label="Open popup">
                        <ChevronDown size={18} />
                    </ComboboxUi.Trigger>
                </div>
            </ComboboxUi.InputGroup>

            <ComboboxUi.Portal>
                <ComboboxUi.Positioner className={cl.positioner} sideOffset={12}>
                    <ComboboxUi.Popup className={cl.popup}>
                        <ComboboxUi.Empty>
                            <div className={cl.empty}>{emptyTitle}</div>
                        </ComboboxUi.Empty>
                        <ComboboxUi.List className={cl.list}>
                            {(item: ComboboxItem) => (
                                <ComboboxUi.Item key={item.label} value={item} className={cl.item}>
                                    <span className={cl.item_text}>{item.label}</span>
                                </ComboboxUi.Item>
                            )}
                        </ComboboxUi.List>
                    </ComboboxUi.Popup>
                </ComboboxUi.Positioner>
            </ComboboxUi.Portal>
        </ComboboxUi.Root>
    );
}

export default Combobox;
