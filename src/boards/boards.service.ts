import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // 다른 컴포넌트에서 배열 값을 수정할 수 있기 때문에, private 사용!

  getAllBoards() {
    return this.boards;
  }
}
