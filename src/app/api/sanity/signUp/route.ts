import { sanityClient } from "@/libs/sanity";
import { signUpHandler } from "next-auth-sanity";

export const POST = signUpHandler(sanityClient);
