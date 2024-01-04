import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 컴포넌트에서 배열 값을 수정할 수 있기 때문에, private 사용!

  // return 값도 타입 지정!
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board); // 생성 기능이니까 boards 안에 넣어줘야겠지?
    return board; // board 리턴값
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => id === board.id);
  }
}
