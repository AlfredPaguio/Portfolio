"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { formatDate } from "@/utils/formatDate";
import fetchLatestRelease, { Release } from "@/data/fetchLatestReleaseData";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchLatestRelease]);
  // ensure this function is memoized

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formattedDate = useMemo(
    () =>
      formatDate(
        release?.main?.published_at ? new Date(release.main.published_at) : null
      ),
    [release]
  );

  if (loading) {
    return <p>Fetching latest information.</p>;
  }

  if (error) {
    return <p>Failed to fetch latest information.</p>;
  }

  if (!release) {
    return <p>No release information available.</p>;
  }

  return (
    <>
      <h2 className="flex flex-wrap gap-2">
        Last updated:
        <time dateTime={formattedDate} title={formattedDate}>
          {formattedDate}
        </time>
      </h2>
    </>
  );
};

export default GithubReleaseDate;
