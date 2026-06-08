import { Slider } from "@base-ui/react/slider";
import cl from "./SliderRange.module.css"
import { cn } from "@/lib/utils";

interface Props extends Slider.Root.Props {
    defaultValue?: [number, number];
    value?: [number, number];
    className?: string;
}

function SliderRange({ className, defaultValue = [15, 60], ...props }: Props) {
    return (
        <Slider.Root defaultValue={defaultValue} {...props} className={cn(className, "m-0")}>
            <Slider.Control className={cl.control}>
                <Slider.Track className={cl.track}>
                    <Slider.Indicator className={cl.indicator} />
                    <Slider.Thumb index={0} aria-label="Minimum value" className={cl.thumb} />
                    <Slider.Thumb index={1} aria-label="Maximum value" className={cl.thumb} />
                </Slider.Track>
            </Slider.Control>
        </Slider.Root>
    );
}

export default SliderRange;
