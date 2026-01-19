export const navItems: navItemsProps[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Now", href: "/now" },
];

type navItemsProps = {
  label: string;
  href: string ;
  // | URL | null | undefined;
};

export type { navItemsProps };
