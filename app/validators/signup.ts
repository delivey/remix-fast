import { z } from "zod";
import { zfd } from "zod-form-data";
import { withZod } from "@remix-validated-form/with-zod";
import { email, password } from "./config";

const signupValidator = z
    .object({
        email: email,
        password: password,
        confirm_password: password,
    })
    .superRefine(({ confirm_password, password }, ctx) => {
        if (confirm_password !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Passwords must match",
            });
        }
    });

const schema = zfd.formData(signupValidator);
const validator = withZod(signupValidator);
export { schema, validator };
