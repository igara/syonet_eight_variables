export declare const backupQiitaListURI = "https://api.github.com/repos/igara/qiita-export/contents/data/igara";
export declare const backupHatenaListURI = "https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119";
export declare const backupZennArticleListURI = "https://api.github.com/repos/igara/zenn-export/contents/articles";
export declare type BackupHatenaList = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string | null;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
}[];
export declare type BackupQiitaList = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string | null;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
}[];
export declare type BackupZennArticleList = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string | null;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
}[];
export declare type BackupZennArticleDetailHistory = {
    sha: string;
    node_id: string;
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
        committer: {
            name: string;
            email: string;
            date: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        url: string;
        comment_count: number;
        verification: {
            verified: boolean;
            reason: string;
            signature: null;
            payload: null;
        };
    };
    url: string;
    html_url: string;
    comments_url: string;
    author: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    committer: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    parents: {
        sha: string;
        url: string;
        html_url: string;
    }[];
}[];
export declare const backupHatenaDetailURI: (hatenaPostTitle: string) => string;
export declare const backupQiitaDetailURI: (qiitaPostTitle: string) => string;
export declare const backupZennArticleDetailURI: (zennPostTitle: string) => string;
export declare const backupZennArticleDetailHistoryURI: (zennMarkdownName: string) => string;
export declare const githubProfileURI = "https://raw.githubusercontent.com/igara/igara/master/README.html";
