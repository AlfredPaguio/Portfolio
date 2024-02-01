import React, { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { formatDate } from "../lib/formatDate";
const octokit = new Octokit();

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.getLatestRelease
>;

type AppRelease = {
  main: GitHubRelease;
};

const fetchLatestRelease = async (): Promise<AppRelease> => {
  const { data } = await octokit.repos.getLatestRelease({
    owner: "AlfredPaguio",
    repo: "CVs-and-Resumes",
  });

  return {
    main: data,
  };
};
const GithubReleaseDate = () => {
  const [release, setRelease] = useState<AppRelease | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const latestRelease = await fetchLatestRelease();
        setRelease(latestRelease);
      } catch (error) {
        console.error("Error fetching release data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {release ? (
        <div>
          <h2>Last updated:</h2>
          {/* <time
            dateTime={release.main.published_at || undefined}
            title={formatDate(new Date(release.main.published_at).toLocaleString())}
          >
            {formatDate(release.main.published_at)}
          </time> */}
          <p>
            {formatDate(
              release.main.published_at
                ? new Date(release.main.published_at)
                : null
            )}
          </p>
        </div>
      ) : (
        <p>Failed to fetch latest information.</p>
      )}
    </>
  );
};

export default GithubReleaseDate;
