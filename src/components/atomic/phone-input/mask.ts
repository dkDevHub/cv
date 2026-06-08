import { maskitoUpdateElement, type MaskitoOptions, type MaskitoPreprocessor } from "@maskito/core";
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoEventHandler,
    maskitoPrefixPostprocessorGenerator,
    maskitoRemoveOnBlurPlugin,
    maskitoWithPlaceholder,
} from "@maskito/kit";

const PLACEHOLDER = "+38 (___) ___-____";
const {
    removePlaceholder,
    plugins,
    ...placeholderOptions
} = maskitoWithPlaceholder(PLACEHOLDER);

export default {
    mask: ["+", "3", "8", " ", "(", "0", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/],

    postprocessors: [maskitoPrefixPostprocessorGenerator("+38 ("), ...placeholderOptions.postprocessors],

    preprocessors: [createUACompletePhoneInsertionPreprocessor(), ...placeholderOptions.preprocessors],

    plugins: [
        ...plugins,
        maskitoAddOnFocusPlugin("+38 ("),
        maskitoRemoveOnBlurPlugin("+38 ("),

        maskitoCaretGuard((value, [from, to]) => [from === to ? "+38 (".length : 0, value.length]),

        maskitoEventHandler("focus", (element) => {
            const initialValue = element.value || "+38 (";

            maskitoUpdateElement(element, initialValue + PLACEHOLDER.slice(initialValue.length));
        }),
        maskitoEventHandler("blur", (element) => {
            const cleanValue = removePlaceholder(element.value);

            maskitoUpdateElement(element, cleanValue === "+38 (" ? "" : cleanValue);
        }),
    ],
} satisfies MaskitoOptions;

function createUACompletePhoneInsertionPreprocessor(): MaskitoPreprocessor {
    const trimPrefix = (value: string): string => value.replace(/^\+?3?8?\s?0?/, "");

    const countDigits = (value: string): number => value.replaceAll(/\D/g, "").length;

    return ({ elementState, data }) => {
        const { value, selection } = elementState;

        return {
            elementState: {
                selection,
                value: countDigits(value) > 12 ? trimPrefix(value) : value,
            },
            data: countDigits(data) >= 10 ? trimPrefix(data) : data,
        };
    };
}
