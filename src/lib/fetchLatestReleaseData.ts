import { Octokit } from "@octokit/rest";
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

const octokit = new Octokit();

export type GitHubRelease = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.getLatestRelease
>;

export type Release = {
  main: GitHubRelease;
};

const fetchLatestRelease = async (): Promise<Release> => {
  const { data } = await octokit.repos.getLatestRelease({
    owner: "AlfredPaguio",
    repo: "CVs-and-Resumes",
  });

  return {
    main: data,
  };
};

export default fetchLatestRelease;
