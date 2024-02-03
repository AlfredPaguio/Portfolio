"use client";
import React, { useCallback, useEffect, useState } from "react";
import { formatDate } from "../lib/formatDate";
import fetchLatestRelease, { Release } from "../lib/fetchLatestReleaseData";

const GithubReleaseDate = () => {
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const latestRelease = await fetchLatestRelease();
      setRelease(latestRelease);
    } catch (error) {
      setError("Failed to fetch latest information.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formattedDate = formatDate(
    release?.main.published_at ? new Date(release.main.published_at) : null
  );

  return (
    <>
      {loading && <p>Fetching latest information.</p>}
      {error && <p>Failed to fetch latest information.</p>}
      {release && (
        <>
          <h2 className="flex gap-2">
            Last updated:
            <time dateTime={formattedDate} title={formattedDate}>
              {formattedDate}
            </time>
          </h2>
        </>
      )}
    </>
  );
};

export default GithubReleaseDate;
