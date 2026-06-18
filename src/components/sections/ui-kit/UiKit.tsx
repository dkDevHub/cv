import Section from "@/components/templates/Section";
import cl from "./UiKit.module.css";
import { cn } from "@/lib/utils";
import UiKitCards from "@/components/parts/ui-kit-cards/UiKitCards";
import Divider from "@/components/atomic/divider/Divider";
// import CardNp from "@/components/parts/card-np/CardNp";
// import CardBinance from "@/components/parts/card-binance/CardBinance";
// import CardGitHub from "@/components/parts/card-github/CardGitHub";
//import UiKitPhone from "@/components/parts/ui-kit-phone/UiKitPhone";
import dynamic from "next/dynamic";

const UiKitPhone = dynamic(() => import("@/components/parts/ui-kit-phone/UiKitPhone"));
const CardNp = dynamic(() => import("@/components/parts/card-np/CardNp"));
const CardBinance = dynamic(() => import("@/components/parts/card-binance/CardBinance"));
const CardGitHub = dynamic(() => import("@/components/parts/card-github/CardGitHub"));

function UiKit() {
    return (
        <Section className={cn(cl.uiKit)}>
            <div className={cl.content}>
                <h2 id="ui" className="h1 headline-shadow">
                    UI Kit
                </h2>
                <UiKitPhone/>
                <Divider>
                    <span className="text-muted-foreground font-semibold">API Integration</span>
                </Divider>
                <div className={cl.api}>
                    <CardNp/>
                    <CardBinance/>
                    <CardGitHub/>
                </div>
                <Divider>
                    <span className="text-muted-foreground font-semibold">Components</span>
                </Divider>
                <UiKitCards />
                <div className={cl.bg}>
                    <video className={cl.video} autoPlay loop playsInline preload="metadata">
                        <source src="https://static.mocortech.com/image-host/index/seeusinwild-bg-optimized.5e4c0ee8298e.webm" type="video/webm" />
                    </video>
                </div>
            </div>
        </Section>
    );
}

export default UiKit;