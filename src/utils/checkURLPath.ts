function checkURLPath(href: string, pathname: string) {
  const pathParts = href.split("/");

  if (pathParts.length < 3) {
    return href === pathname;
  } else {
    return pathname.startsWith(href);
  }
}

export { checkURLPath };
