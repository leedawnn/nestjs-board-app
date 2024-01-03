import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards') // 앤드포인트
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // Handler
  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
