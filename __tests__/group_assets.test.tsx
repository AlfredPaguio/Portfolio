import toTitleCase from "@@/src/utils/toTitleCase";

type Asset = {
  name: string;
};

const groupAssetsByName = (assets: Asset[]): Record<string, Asset[]> => {
  return assets.reduce((accumulated, asset) => {
    const nameParts = asset.name.split("_CV_");
    // Use the part following _CV_ as the group name or an empty string
    const groupName =
      nameParts.length === 2 ? toTitleCase(nameParts[1].split(".")[0]) : "";
    // if (!accumulated[groupName]) {
    //   accumulated[groupName] = [];
    // }
    // accumulated[groupName].push(asset);
    //Time:        2.571 s
    Array.prototype.push.apply(
      accumulated[groupName] || (accumulated[groupName] = []),
      [asset]
    );
    // Time:        0.867 s, estimated 2 s
    return accumulated;
  }, {} as Record<string, Asset[]>);
};

// Group assets by name parts following "_CV_" and push them into corresponding groups
it('should group assets by name parts following "_CV_" and push them into corresponding groups', () => {
  const assets = [
    { name: "asset1_CV_group1.pdf" },
    { name: "asset2_CV_group1.docx" },
    { name: "asset3_CV_group2.pdf" },
  ];

  const expectedGroupedAssets = {
    Group1: [
      { name: "asset1_CV_group1.pdf" },
      { name: "asset2_CV_group1.docx" },
    ],
    Group2: [{ name: "asset3_CV_group2.pdf" }],
  };

  const groupedAssets = groupAssetsByName(assets);

  expect(groupedAssets).toEqual(expectedGroupedAssets);
});

it('should push the asset into an empty group if there is no part following "_CV_"', () => {
  const assets = [{ name: "asset1.DOCX" }, { name: "asset2.PDF" }];

  const expectedGroupedAssets = {
    "": [{ name: "asset1.DOCX" }, { name: "asset2.PDF" }],
  };

  const groupedAssets = groupAssetsByName(assets);

  expect(groupedAssets).toEqual(expectedGroupedAssets);
});

// Convert group name to title case
it("should convert group name to title case", () => {
  const assets = [
    { name: "asset1_CV_with_pic.PDF" },
    { name: "asset2_CV_zaaamn.DOCX" },
  ];

  const expectedGroupedAssets = {
    "With Pic": [{ name: "asset1_CV_with_pic.PDF" }],
    Zaaamn: [{ name: "asset2_CV_zaaamn.DOCX" }],
  };

  const groupedAssets = groupAssetsByName(assets);

  expect(groupedAssets).toEqual(expectedGroupedAssets);
});

// If assets array is empty, return an empty record
it("should return an empty record if assets array is empty", () => {
  const assets: Asset[] = [];

  const expectedGroupedAssets = {};

  const groupedAssets = groupAssetsByName(assets);

  expect(groupedAssets).toEqual(expectedGroupedAssets);
});

// If asset name does not contain "_CV_", push the asset into an empty group
it('should push the asset into an empty group if asset name does not contain "_CV_"', () => {
  const assets = [{ name: "asset1.txt" }, { name: "asset2.txt" }];

  const expectedGroupedAssets = {
    "": [{ name: "asset1.txt" }, { name: "asset2.txt" }],
  };

  const groupedAssets = groupAssetsByName(assets);

  expect(groupedAssets).toEqual(expectedGroupedAssets);
});
