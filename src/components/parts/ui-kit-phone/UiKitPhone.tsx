import { MexcQrSvg } from "@/components/atomic/svg/Svg";
import PhoneMotion from "../phone-motion/PhoneMotion";
import cl from "./UiKitPhone.module.css"

function UiKitPhone() {
    return (
        <div className={cl.ui_kit_phone}>
            <div className={cl.card}>
                <div className={cl.phone}>
                    <PhoneMotion />
                </div>

                <div className={cl.info}>
                    <div className="flex gap-6 items-center">
                        <MexcQrSvg width="120px" height="120px" className="w-22 h-22 sm:w-30 sm:h-30" />
                        <div className="flex flex-col">
                            <span className="text-muted-foreground">Scan for download app</span>
                            <span className="text-xl sm:text-3xl font-medium">iOS and Android</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <a className={cl.link} href="https://mexc.onelink.me/KTsj/Ios">
                            <img
                                className="w-8 h-8"
                                alt=""
                                src="https://www.mexc.com/api/file/download/F20241017155959290pxh4sfsyL1WgRp"
                            />
                            <span className="ellipsis-1">App Store</span>
                        </a>
                        <a
                            className={cl.link}
                            href="https://play.google.com/store/apps/details?id=com.mexcpro.client&pcampaignid=web_share"
                        >
                            <img
                                className="w-8 h-8"
                                alt=""
                                src="https://www.mexc.com/api/file/download/F202410171552249423UbUWarzQR3vPU"
                            />
                            <span className="ellipsis-1">Google Play</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UiKitPhone;