import cl from "./UiKitCards.module.css"
import CardBase from "@/components/atomic/card-base/CardBase";
import Input from "@/components/atomic/input/Input";
import UiKitBtns from "@/components/parts/ui-kit-btns/UiKitBtns";
import Button from "@/components/atomic/button/Button";
import { User } from "lucide-react";
import { RadioItem, RadioSelect } from "@/components/atomic/radio-select/RadioSelect";
import Checkbox from "@/components/atomic/checkbox/Checkbox";
import PhoneInput from "@/components/atomic/phone-input/PhoneInput";
import Droplist from "@/components/atomic/droplist/Droplist";
import Counter from "@/components/atomic/counter/Counter";
import UiKitPrice from "@/components/parts/ui-kit-price/UiKitPrice";
import ExampleDialog from "@/components/atomic/dialog/Dialog";

function UiKitCards() {
    return (
        <div className={cl.ui_grid}>
            <CardBase>
                <UiKitPrice />
            </CardBase>
            <CardBase>
                <h3 className="h4">Enter your name</h3>
                <div className="flex gap-2">
                    <Input placeholder="Dmytro" icon={User} />
                    <Button variant="neutral">Submit</Button>
                </div>
            </CardBase>
            <CardBase>
                <h3 className="h4">Modal</h3>
                <ExampleDialog />
            </CardBase>
            <CardBase>
                <UiKitBtns />
            </CardBase>
            <CardBase>
                <h3 className="h4">Phone number</h3>
                <PhoneInput />
            </CardBase>
            <CardBase>
                <h3 className="h4">Sort by</h3>
                <div className="flex gap-2 flex-wrap">
                    <RadioSelect>
                        <RadioItem name="sort" value="price" defaultChecked>
                            Relevance
                        </RadioItem>
                        <RadioItem name="sort" value="popularity">
                            Popularity
                        </RadioItem>
                        <RadioItem name="sort" value="name">
                            Name
                        </RadioItem>
                        <RadioItem name="sort" value="price">
                            Price
                        </RadioItem>
                        <RadioItem name="sort" value="any" disabled>
                            Disabled
                        </RadioItem>
                    </RadioSelect>
                </div>
                <h3 className="h4">Filters</h3>
                <div className="flex gap-2 flex-col">
                    <Checkbox defaultChecked>Sale</Checkbox>
                    <Checkbox>New</Checkbox>
                    <Checkbox>Recommended</Checkbox>
                </div>
            </CardBase>
            <CardBase>
                <h3 className="h4">Droplist</h3>
                <Droplist>
                    <Droplist.Title defaultChecked>Tech</Droplist.Title>
                    <Droplist.Content>
                        <Checkbox>TypeScript</Checkbox>
                        <Checkbox defaultChecked>Next.js</Checkbox>
                        <Checkbox>Zustand</Checkbox>
                    </Droplist.Content>
                </Droplist>
            </CardBase>
            <CardBase>
                <h3 className="h4">Counter</h3>
                <div className="flex flex-col gap-2">
                    <span className="text-muted-foreground">Pick a quantity</span>
                    <Counter initialValue={1} />
                </div>
            </CardBase>
        </div>
    );
};

export default UiKitCards;