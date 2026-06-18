import { codeToHtml } from "shiki";

const code = `interface User {
    id: string;
    name: string;
    age: number;
    role: 'admin' | 'user';
}

function getPermissions(user: User) {
    return user.role === 'admin';
}

export { getPermissions };`;

async function CodeBlock() {
    const highlightedHtml = await codeToHtml(code, {
        lang: "typescript",
        theme: "dracula"
    });

    return (
        <div
            className="
                lg:*:text-base
                text-sm
                font-mono 
                overflow-x-auto 
                scrollbar-thin
                [&>pre]:bg-transparent! 
                [&>pre]:p-0 
                [&>pre]:m-0
                "
            dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
    );
}

export default CodeBlock
