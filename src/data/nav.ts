export const navItems: navItemsProps[] = [
  { label: "Home", href: "/" },
  { label: "Now", href: "/now" },
  { label: "Projects", href: "/projects" },
];

type navItemsProps = {
  label: string;
  href: string ;
  // | URL | null | undefined;
};

export type { navItemsProps };
