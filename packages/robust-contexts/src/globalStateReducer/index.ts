import { GlobalState, Action, SetValueAction } from "./types";

/**
 * Reducer function for the global state.
 * @param state - The current global state.
 * @param action - The action object representing the state update.
 * @returns The new state after applying the action.
 */
export function GlobalStateReducer(
  state: GlobalState,
  action: unknown
): GlobalState {
  switch ((action as Action).type) {
    case "SET_GLOBAL_STATE_VALUE":
      // Extract the key and value from the action
      const { key, value } = action as SetValueAction;

      // Update the global state with the new key-value pair
      return {
        ...state,
        [key]: value,
      };
    case "RESET_GLOBAL_STATE":
      // Reset the global state to an empty object
      return {};
    default:
      // Return the current state for unknown actions
      return state;
  }
}
