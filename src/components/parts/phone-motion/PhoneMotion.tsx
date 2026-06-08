import cl from "./PhoneMotion.module.css";

function PhoneMotion() {
    return (
        <div className={cl.phone_motion}>
            <div className={cl.screen}>
                <video
                    className={cl.video}
                    loop
                    playsInline
                    muted
                    autoPlay
                    preload="auto"
                    poster="https://static.mocortech.com/image-host/index/homepage-download-propaganda-poster.eebda5dfc5e2.jpg"
                >
                    <source
                        src="https://static.mocortech.com/image-host/index/homepage-download-propaganda-optimized.eebda552cb73.webm"
                        type="video/webm"
                    />
                </video>
            </div>
        </div>
    );
}

export default PhoneMotion;
