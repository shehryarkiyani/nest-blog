import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly TagService: TagService) {}
  @Get()
  getAll() {
    return this.TagService.getAll();
  }
}
