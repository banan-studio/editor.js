import { BlockTool, BlockToolConstructable } from './block-tool';
import { InlineTool, InlineToolConstructable } from './inline-tool';
import { BaseTool, BaseToolConstructable } from './tool';

export * from './block-tool';
export * from './block-tool-data';
export * from './inline-tool';
export * from './tool';
export * from './tool-config';
export * from './tool-settings';
export * from './paste-events';
export * from './hook-events';
export * from './blcock-tool-setting';
export type Tool = BlockTool | InlineTool;
export type ToolConstructable = BlockToolConstructable | InlineToolConstructable;
