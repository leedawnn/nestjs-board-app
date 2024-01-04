import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards') // 앤드포인트
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // Handler
  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }

  // 이렇게 사용해도 되네?
  // @Post()
  // createBoard(@Body() body) {
  //   return this.boardsService.createBoard(body.title, body.description);
  // }
}
