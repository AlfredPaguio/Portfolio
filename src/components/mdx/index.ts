import TechPill from "../TechPill.astro";
import TermHint from "../TermHint.astro";
import Button from "../ui/Button.astro";
import MDXLink from "./MDXLink.astro";

export const components = {
  a: MDXLink,
  button: Button,
  TechPill,
  TermHint,
};
