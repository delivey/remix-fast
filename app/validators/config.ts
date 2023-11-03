import { z } from "zod";
import { zfd } from "zod-form-data";

export const email = z
    .string()
    .min(1, { message: "Email must be non-empty" })
    .email("Must be a valid email");

export const password = z
    .string()
    .min(6, { message: "Password must be at least 6 characters" });

export const yesNoBoolean = z
    .string()
    .min(1, { message: "Required" })
    .transform((arg) => (["true", "Yes"].includes(arg) ? true : false));

const urlRegex =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

export const urlString = z.string().refine((value) => urlRegex.test(value), {
    message: "Must be a valid URL",
});

export const string = z
    .string()
    .min(1, { message: "Required" })
    .max(255, { message: "Must be under 255 characters" });
