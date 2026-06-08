"use client";
import CardBase from "@/components/atomic/card-base/CardBase";
import cl from "./CardGitHub.module.css"
import Image from "next/image";
import GitHubImg from "@/assets/brand/github.png";
import Input from "@/components/atomic/input/Input";
import Button from "@/components/atomic/button/Button";
import { useState } from "react";
import { GithubService } from "@/service/github";
import { useService } from "@/hooks/useService";
import GitHubRes from "@/components/parts/github-res/GitHubRes";

const defaultUsername = "oven-sh";

function CardGitHub() {
    const [username, setUsername] = useState<string>(defaultUsername);
    const serviceData = useService(() => GithubService.getUser(username));

    return (
        <CardBase>
            <div className="flex gap-2 items-center">
                <h3 className="h4">GitHub</h3>
                <Image className="w-5.5 h-5.5 accent-glow-sm" width={32} height={32} src={GitHubImg.src} alt="github" />
            </div>
            <div className={cl.content}>
                <div className={cl.form}>
                    <div className={cl.field}>
                        <label htmlFor="username" className={cl.label}>
                            Username
                        </label>
                        <Input
                            id="username"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            ignoreFilledStyle
                        />
                    </div>
                    <Button variant="neutral" onClick={serviceData.refetch}>
                        Search
                    </Button>
                </div>
                <div className="min-h-14 flex items-center">
                    <GitHubRes serviceData={serviceData} />
                </div>
            </div>
        </CardBase>
    );
};

export default CardGitHub;