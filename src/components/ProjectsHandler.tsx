import { parseAsString, useQueryState } from "nuqs";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { useEffect } from "react";
import { batchAddTechnologies } from "../app/store/technology/technology-slice";

export default async function ProjectsHandler() {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );
  const dispatch = useAppDispatch();
  const [techQuery, setTechQuery] = useQueryState("q", {
    history: "replace",
    shallow: false,
  });
  const [titleQuery, setTitleQuery] = useQueryState("title", {
    history: "replace",
    shallow: false,
  });
  const [sortQuery] = useQueryState(
    "sort",
    parseAsString
      .withDefault("date-desc")
      .withOptions({ history: "replace", shallow: false }),
  );

  useEffect(() => {
    if (techQuery) {
      const techs = techQuery.split(",");
      dispatch(batchAddTechnologies(techs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (titleQuery == "" || !titleQuery) {
      setTitleQuery(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //why the hell if (selectedTechnologies) is truthy even empty?
    if (selectedTechnologies.length > 0) {
      setTechQuery(selectedTechnologies.join(","));
    } else {
      setTechQuery(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechnologies]);

  return null;
}
