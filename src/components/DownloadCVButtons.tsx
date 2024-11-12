"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";
import fetchLatestRelease from "@/data/fetchLatestReleaseData";
import toTitleCase from "@/utils/toTitleCase";
import { REPO_OWNER } from "@/data/Repositories";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";

export default function DownloadCVButtons() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchLatestRelease();
      setAssets(data.main.assets || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex items-start rounded-md">
      {loading && <p className="h-9 self-center px-4 py-2">Loading...</p>}
      {assets && assets.length > 0 && (
        <Button
          className="rounded-r-none transition-colors hover:bg-accent"
          asChild
        >
          <Link href={assets[0].browser_download_url}>
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download CV
          </Link>
        </Button>
      )}
      <Separator orientation="vertical" className="h-full" />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="rounded-l-none px-2 transition-colors hover:bg-accent">
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" alignOffset={-5} forceMount>
          <ScrollArea>
            <DropdownMenuLabel>Download Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DownloadOptions assets={assets.slice(1)} />
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="font-medium">
              Contact me for more.
            </DropdownMenuLabel>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

type Asset = {
  browser_download_url: string;
  // id: number;
  name: string;
  // content_type: string;
  // size: number;
  //   node_id: string;
  //   state: "uploaded" | "open";
  //   download_count: number;
};

interface DownloadOptionsProps {
  assets: Asset[];
}

function DownloadOptions({ assets }: DownloadOptionsProps) {
  const groupedAssets: Record<string, Asset[]> = assets.reduce(
    (accumulated, asset) => {
      //split
      const nameParts = asset.name.split("_");
      // category (e.g., "WebDev", "SoftwareEngineer")
      // Use the first part as the group name
      // const groupName = toTitleCase(nameParts[0]);
      const groupName = camelCaseToTitleCase(nameParts[0]);
      console.log("name", groupName)

      // if (!accumulated[groupName]) {
      //   accumulated[groupName] = [];
      // }
      // accumulated[groupName].push(asset);
      Array.prototype.push.apply(
        accumulated[groupName] || (accumulated[groupName] = []),
        [asset],
      );
      return accumulated;
    },
    //assert
    {} as Record<string, Asset[]>,
  );

  return (
    <>
      {Object.entries(groupedAssets).map(
        ([groupName, groupAssets], groupIndex) => (
          <React.Fragment key={groupIndex}>
            {groupName && <DropdownMenuLabel>{groupName}</DropdownMenuLabel>}
            {groupAssets.map((asset, index) => (
              <React.Fragment key={index}>
                <DownloadButton asset={asset} />
                {/* {index < groupAssets.length - 1 && <DropdownMenuSeparator />} */}
              </React.Fragment>
            ))}
            {groupIndex < Object.keys(groupedAssets).length - 1 && (
              <DropdownMenuSeparator />
            )}
          </React.Fragment>
        ),
      )}
    </>
  );
}

interface DownloadButtonProps {
  asset: Asset;
}

function DownloadButton({ asset }: DownloadButtonProps) {
  const { name, browser_download_url } = asset;

  return (
    <DropdownMenuItem asChild>
      <Link href={browser_download_url} download={`${REPO_OWNER}_${name}`}>
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download {name}
      </Link>
    </DropdownMenuItem>
  );
}
