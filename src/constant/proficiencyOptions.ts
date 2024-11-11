const proficiencyOptions = [
  {
    label: "Beginner",
    description: "Basic understanding; working on foundational concepts.",
    value: 1,
  },
  {
    label: "Basic",
    description:
      "Comfortable with standard usage; building more complex projects.",
    value: 2,
  },
  {
    label: "Intermediate",
    description:
      "Comfortable with standard usage; building more complex projects.",
    value: 3,
  },
  {
    label: "Advanced",
    description:
      "Proficient with most of the technology’s features; able to tackle complex tasks.",
    value: 4,
  },
  {
    label: "Expert",
    description:
      "Deep understanding; capable of teaching or optimizing in advanced scenarios.",
    value: 5,
  },
];

function getProficiencyLabel(status: number) {
  const proficiencyOption = proficiencyOptions.find((option) => option.value === status);
  return proficiencyOption ? proficiencyOption.label : "Unknown status";
}

export {proficiencyOptions, getProficiencyLabel};
