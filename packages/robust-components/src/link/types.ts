import { BaseProps } from "@/types";

/**
 * Props for the Link component.
 */
export interface LinkProps extends BaseProps {
  /**
   * The URL for the link.
   * It can be a string, a URL object, or null.
   */
  href: string | URL | null;

  /**
   * Determines whether the link should replace the current URL in the browser history.
   * Optional. Defaults to true.
   */
  replace?: boolean;

  /**
   * Determines whether the link should prefetch the linked resource.
   * Optional. Defaults to true.
   */
  prefetch?: boolean;

  /**
   * Specifies the property to check for link active state.
   * Possible values: "pathname" or "href".
   * Optional. Defaults to "pathname".
   */
  checkActive?: "pathname" | "href";

  /**
   * Specifies whether the href prop should be passed to child elements.
   * Optional. Defaults to false.
   */
  passHref?: boolean;

  /**
   * Specifies whether the link should open in a new tab.
   * Optional. Defaults to false.
   */

  openNewTab?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
}
