import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly TagService: TagService) {}
  @Get()
  async getAll() {
    return this.TagService.getAll();
  }
  @Post()
  async createTag(@Body('name') name: string) {
    return await this.TagService.createTag(name);
  }
  @Patch(':id')
  async updateTag(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
  ) {
    return this.TagService.updateTag(id, name);
  }

  @Delete(':id')
  async deleteTag(@Param('id', ParseIntPipe) id: number) {
    return this.TagService.deleteTag(id);
  }
}
