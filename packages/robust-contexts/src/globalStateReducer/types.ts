/**
 * Represents a generic action.
 */
export interface Action {
  /**
   * The type of the action.
   */
  type: string;
}

/**
 * Represents an action to set a value in the global state.
 */
export interface SetValueAction extends Action {
  /**
   * The key of the value to be set.
   */
  key: string;

  /**
   * The new value to be set.
   */
  value: unknown;
}

/**
 * Represents the global state.
 */
export interface GlobalState {
  /**
   * Key-value pairs of the global state.
   */
  [key: string]: unknown;
}
