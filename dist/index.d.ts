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
export declare const backupHatenaDetailURI: (hatenaPostTitle: string) => string;
export declare const backupQiitaDetailURI: (qiitaPostTitle: string) => string;
export declare const backupZennArticleDetailURI: (zennPostTitle: string) => string;
export declare const githubProfileURI = "https://raw.githubusercontent.com/igara/igara/master/README.html";
