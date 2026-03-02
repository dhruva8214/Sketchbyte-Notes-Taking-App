export type ToolType =
  | 'select'
  | 'pencil'
  | 'rectangle'
  | 'circle'
  | 'line'
  | 'arrow'
  | 'text'
  | 'eraser'
  | 'hand';

export type ShapeType =
  | 'rectangle'
  | 'circle'
  | 'line'
  | 'arrow'
  | 'pencil'
  | 'text';

export interface BaseShape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
  roughness: number;
  opacity: number;
  isSelected?: boolean;
}

export interface RectangleShape extends BaseShape {
  type: 'rectangle';
  width: number;
  height: number;
  cornerRadius: number;
}

export interface CircleShape extends BaseShape {
  type: 'circle';
  radiusX: number;
  radiusY: number;
}

export interface LineShape extends BaseShape {
  type: 'line';
  x2: number;
  y2: number;
}

export interface ArrowShape extends BaseShape {
  type: 'arrow';
  x2: number;
  y2: number;
}

export interface PencilShape extends BaseShape {
  type: 'pencil';
  points: number[];
}

export interface TextShape extends BaseShape {
  type: 'text';
  text: string;
  fontSize: number;
  fontFamily: string;
}

export type Shape =
  | RectangleShape
  | CircleShape
  | LineShape
  | ArrowShape
  | PencilShape
  | TextShape;

export interface Board {
  id: string;
  name: string;
  shapes: Shape[];
  createdAt: number;
  updatedAt: number;
}

export interface HistoryState {
  shapes: Shape[];
}
