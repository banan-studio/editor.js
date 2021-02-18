import { API } from './../../../types/index.d';
import $ from '../dom';
import { BlockIndicator } from '../../../types';
/**
 * @class NoIndexIndicator
 * @classdesc Editor's default Indicator that moves up selected block
 *
 * @copyright <CodeX Team> 2021
 */
export default class NoIndexIndicator implements BlockIndicator {
  /**
   * Param name indicator
   *
   * @returns string
   */
  public name = 'noIndex';

  /**
   * Styles
   */
  private readonly CSS = {
    key: 'ce-block-indicator--no-index',
    title: 'ce-block-indicator__title',
    icon: 'ce-block-indicator__icon',
    active: 'ce-block-indicator--active',
    button: 'ce-block-indicator__button',
  };

  /**
   * Elements
   */
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  private nodes: { noIndexButton: HTMLElement | undefined; } = {
    noIndexButton: undefined,
  };

  /**
   * Property that contains Editor.js API methods
   *
   * @see {api.md}
   */
  private readonly api: API;

  /**
   * Status
   */
  private active = true;

  /**
   * Create "NoIndex" button and add click event listener
   *
   * @returns [Element}
   */
  public render(): HTMLElement {
    const noIndexButton = $.make('div', [this.CSS.key, this.CSS.button], {});

    noIndexButton.appendChild($.svg('eye', 20, 20));
    this.api.listeners.on(
      noIndexButton,
      'click',
      () => this.handleClick(),
      false
    );

    this.api.tooltip.onHover(noIndexButton, this.api.i18n.t('Indexing'));
    this.api.tooltip.onHover(noIndexButton, 'Indexing');
    this.nodes.noIndexButton = noIndexButton;
    this.checkState();

    return noIndexButton;
  }

  /**
   * NoIndex handle event
   *
   */
  public handleClick(): void {
    this.active = !this.active;
    this.checkState();
  }

  /**
   * NoIndex block check status
   *
   * @param {MouseEvent} event
   * @returns bool
   */
  public checkState(): boolean {
    const isActive = this.active;

    this.nodes.noIndexButton.classList.toggle(this.CSS.active, isActive);
    this.nodes.noIndexButton.innerHTML = '';
    this.nodes.noIndexButton.appendChild(
      $.svg(isActive ? 'eye-slash' : 'eye', 20, 20)
    );

    return isActive;
  }

  /**
   * NoIndexIndicator constructor
   *
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor({ api, settings }) {
    this.api = api;
    // console.log(settings);
    this.active = settings[this.name] ?? false;
  }

  /**
   * Get status indexing
   *
   * @returns bool
   */
  public getStatus(): boolean {
    return this.active;
  }
}
