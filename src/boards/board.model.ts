export interface Board {
  id: string;
  title: string;
  desription: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
