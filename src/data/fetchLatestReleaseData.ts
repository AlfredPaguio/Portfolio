import { Octokit } from "@octokit/rest";
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { REPOSITORIES, REPO_OWNER } from "./Repositories";

const octokit = new Octokit({
  userAgent: "alfred-paguio-portfolio/v0.1.0",
});

export type GitHubRelease = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.getLatestRelease
>;

export type Release = {
  main: GitHubRelease;
};

const fetchLatestRelease = async (): Promise<Release> => {
  const { data } = await octokit.repos.getLatestRelease({
    owner: REPO_OWNER,
    repo: REPOSITORIES.CVs,
  });

  return {
    main: data,
  };
};

export default fetchLatestRelease;
