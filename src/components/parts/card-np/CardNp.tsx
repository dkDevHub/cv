import NpCity from "@/components/atomic/np-city/NpCity";
import NpWarehouse from "@/components/atomic/np-warehouse/NpWarehouse";
import Image from "next/image";
import NpImg from "@/assets/brand/np.webp";
import CardBase from "@/components/atomic/card-base/CardBase";

function CardNp() {
    return (
        <CardBase>
            <div className="flex gap-2 items-center">
                <h3 className="h4">Nova Poshta</h3>
                <Image className="w-7 h-7 accent-glow-sm" width={32} height={32} src={NpImg.src} alt="nova poshta" />
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="np-city" className="text-sm text-muted-foreground">
                        Місто
                    </label>
                    <NpCity name="np-city" id="np-city" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="warehouse" className="text-sm text-muted-foreground">
                        Відділення нової пошти
                    </label>
                    <NpWarehouse name="warehouse" id="warehouse" />
                </div>
            </div>
        </CardBase>
    );
}

export default CardNp;
