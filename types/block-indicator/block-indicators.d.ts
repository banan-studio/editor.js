import { API } from "./../index.d";
import { ToolConfig } from '..';
export interface BlockIndicator {
  // paramName: string;
  /**
   * Returns block tune HTMLElement
   *
   * @return {HTMLElement}
   */
  render(): HTMLElement;
  getStatus(): boolean;
  name: string;
}

export interface BlockIndicatorConstructable {
  new(config: { api: API; settings?: ToolConfig; }): BlockIndicator;
}
