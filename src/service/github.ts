import { externalApiFetch } from "@/lib/apiFetch";
import { GitHubUserResponse } from "@/types/github";

abstract class GithubService {
    static async getUser(username: string) {
        return externalApiFetch<GitHubUserResponse>(`https://api.github.com/users/${username}`, {
            next: { revalidate: 3600 * 6 }
        });
    }
}

export { GithubService };