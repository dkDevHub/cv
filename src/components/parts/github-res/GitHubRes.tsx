import { GitHubUserResponse } from "@/types/github";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface Props {
    serviceData: {
        data: GitHubUserResponse | null;
        isPending: boolean;
        isFetched: boolean;
        error: Error | null;
        refetch: () => void;
    };
}

function GitHubRes({ serviceData }: Props) {
    const { data: user, isPending, error, isFetched } = serviceData;

    if (isPending || !isFetched) return <p className="text-lg">Loading...</p>;
    if (error) return <p className="text-red-500 text-lg">Error: {error.message}</p>;
    if (!user) return <p className="text-red-500 text-lg">No user data</p>;

    return (
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-1 px-2 pr-4 hover:bg-muted rounded-lg transition-colors">
            <div className="flex items-center gap-4">
                <Image
                    className="w-12 h-12 rounded-full"
                    width={40}
                    height={40}
                    src={user.avatar_url}
                    alt="user avatar"
                />
                <div>
                    <span className="text-lg font-semibold">{user.name}</span>
                    <p className="text-muted-foreground text-sm">{user.login}</p>
                </div>
            </div>
            <ExternalLink size={20} strokeWidth={2} className="text-muted-foreground" />
        </a>
    );
};

export default GitHubRes;