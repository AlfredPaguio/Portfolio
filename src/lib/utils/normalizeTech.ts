export function normalizeTech(techId: string) {
  const [rawName, rawVersion] = techId.split(":");

  const name = rawName.trim();
  const version = rawVersion?.trim();

  return {
    id: name?.toLowerCase(),
    name,
    version,
  };
}
