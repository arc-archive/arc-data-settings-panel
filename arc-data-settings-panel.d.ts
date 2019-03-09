/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-data-settings-panel.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {ArcSettingsPanelMixin} from '@advanced-rest-client/arc-settings-panel-mixin/arc-settings-panel-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

declare namespace UiElements {

  /**
   * User data related settings panel for Advanced REST client
   *
   * Database export is handled by sending `export-user-data` custom event that
   * is handled by the `<arc-data-export>` (or any other compatible) element.
   *
   * ### Example
   *
   * ```html
   * <arc-data-export app-version="12.0.0" electron-cookies></arc-data-export>
   * <google-drive-upload></google-drive-upload>
   * <file-save></file-save>
   * ... ARC models imports
   * <arc-data-settings-panel></arc-data-settings-panel>
   * ```
   *
   * ### Styling
   * `<arc-data-settings-panel>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--arc-data-settings-panel` | Mixin applied to the element | `{}`
   * `--arc-settings-panel-header` | Mixin applied to settings panel header | `{}`
   * `--arc-settings-panel-header-color` | Color of the settings panel header | `--accent-color`
   * `--arc-settings-panel-icon-color` | Settings panel icon color | `rgba(0, 0, 0, 0.34)`
   */
  class ArcDataSettingsPanel extends
    ArcSettingsPanelMixin(
    Object) {

    /**
     * Currently displayed page of the settings editor
     */
    page: number|null|undefined;
    deletingDatabases: boolean|null|undefined;

    /**
     * History store enabled / disabled
     */
    historyEnabled: boolean|null|undefined;

    /**
     * When set is renders "REST APIs" delete option.
     */
    restApis: boolean|null|undefined;
    _processValues(values: any): any;
    _setSettings(values: any): void;

    /**
     * Handler for delete all click
     */
    _deleteAllClick(): void;

    /**
     * Called when delete datastore dialog is closed.
     */
    _onClearDialogResult(e: any): void;

    /**
     * Handler to be called when the clear data dialog has been closed.
     * It it's not canceled then it will clear (destroy) selected datastores.
     */
    deleteDatabases(): Promise<any>|null;
    _exportAllFile(): void;
    _historyChanged(value: any): void;
    _settingsChanged(key: any, value: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "arc-data-settings-panel": UiElements.ArcDataSettingsPanel;
  }
}
