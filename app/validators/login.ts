import { z } from "zod";
import { zfd } from "zod-form-data";
import { withZod } from "@remix-validated-form/with-zod";
import { email, password } from "./config";

const loginValidator = z.object({
    email: email,
    password: password,
});

const schema = zfd.formData(loginValidator);
const validator = withZod(loginValidator);
export { schema, validator };
