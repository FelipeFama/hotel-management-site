import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { dataset, projectId, token } from "./evironment";

export default defineConfig({
  name: "default",
  title: "hotel-management",

  projectId,
  dataset,
  token,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
