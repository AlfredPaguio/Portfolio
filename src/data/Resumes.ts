import { Octokit } from "octokit";
import { REPOSITORIES, REPO_OWNER } from "./Repositories";

const octokit = new Octokit({
  userAgent: "alfred-paguio-portfolio/v0.1.5",
});

export const fetchLatestResumes = async () => {
  try {
    const { data } = await octokit.rest.repos.getLatestRelease({
      owner: REPO_OWNER,
      repo: REPOSITORIES.CVs,
    });
    return data.assets;
  } catch (e) {
    console.error("Failed to fetch resumes", e);
    return [];
  }
};
