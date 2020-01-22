import { json } from "@angular-devkit/core";
import { FormatterType } from "stylelint";

export type StylelintBuilderOptions = json.JsonObject & {
    stylelintConfig: string;
    fix: boolean;
    force: boolean;
    format: FormatterType;
    silent: boolean;
    exclude: string[];
    files: string[];
}
