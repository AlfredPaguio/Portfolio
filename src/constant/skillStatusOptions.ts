const statusOptions = [
  {
    label: "Using",
    description: "Actively using the technology in current projects.",
    value: "using",
  },
  {
    label: "Learning",
    description: "Currently studying or practicing the technology.",
    value: "learning",
  },
  {
    label: "Exploring",
    description:
      "Occasionally experimenting with the technology, but not in-depth.",
    value: "exploring",
  },
  {
    label: "Interested",
    description: "Interested in learning, but not actively studying yet.",
    value: "interested",
  },
];

function getStatusLabel(status: string) {
  const statusOption = statusOptions.find((option) => option.value === status);
  return statusOption ? statusOption.label : "Unknown status";
}

export { statusOptions, getStatusLabel };
