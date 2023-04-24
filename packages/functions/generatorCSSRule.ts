import { createCSSRuleT, createStyleSheetT } from 'functions';
export function createCSSRule({ selector, styles }: createCSSRuleT): string {
	return `.${selector} {${styles}}`;
}

export function createStyleSheet({ rules }: createStyleSheetT): string {
	return rules.join('\n');
}
