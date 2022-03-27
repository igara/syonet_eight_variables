var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  backupHatenaDetailURI: () => backupHatenaDetailURI,
  backupHatenaListURI: () => backupHatenaListURI,
  backupQiitaDetailURI: () => backupQiitaDetailURI,
  backupQiitaListURI: () => backupQiitaListURI,
  githubProfileURI: () => githubProfileURI
});
var backupQiitaListURI = "https://api.github.com/repos/igara/qiita-export/contents/data/igara";
var backupHatenaListURI = "https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119";
var backupHatenaDetailURI = (hatenaPostTitle) => `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`;
var backupQiitaDetailURI = (qiitaPostTitle) => `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`;
var githubProfileURI = "https://raw.githubusercontent.com/igara/igara/master/README.html";
