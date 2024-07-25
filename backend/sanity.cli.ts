import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./evironment";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
