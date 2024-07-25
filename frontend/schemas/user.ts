import { defineField } from "sanity";

export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "isAdmin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      readOnly: true,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "A brief description about the user",
    }),
  ],
};
