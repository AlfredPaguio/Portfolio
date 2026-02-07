import BookOpen from "@lucide/astro/icons/book-open";
import FolderGit from "@lucide/astro/icons/folder-git";
import Globe from "@lucide/astro/icons/globe";
// import Link from "@lucide/astro/icons/link";
import ExternalLink from "@lucide/astro/icons/external-link";

import Share2 from "@lucide/astro/icons/share-2";

const linkIcons = {
  source: FolderGit,
  demo: Globe,
  docs: BookOpen,
  social: Share2,
  other: ExternalLink,
} as const;

export { linkIcons };
