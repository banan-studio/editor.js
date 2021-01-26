import { ToolConfig } from '..';
import ApiModules from '../../src/components/modules/api';
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
  new(config: { api: ApiModules; settings?: ToolConfig; }): BlockIndicator;
}
