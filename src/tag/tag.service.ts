import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TagEntity } from './tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}
  async getAll() {
    const tags = await this.tagRepository.find();
    return { tags };
  }
  async createTag(name: string) {
    const existing = await this.tagRepository.findOne({ where: { name } });
    if (existing) {
      throw new BadRequestException('Tag already exists');
    }
    const newTag = this.tagRepository.create({ name });

    return await this.tagRepository.save(newTag);
  }
  async updateTag(id: number, name: string) {
    const tag = await this.tagRepository.findOne({ where: { id } });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }
    const duplicate = await this.tagRepository.findOne({ where: { name } });
    if (duplicate && duplicate.name) {
      throw new BadRequestException('Tag name already exists');
    }

    tag.name = name;
    return await this.tagRepository.save(tag);
  }
  async deleteTag(id: number) {
    const tag = await this.tagRepository.findOne({ where: { id } });
    if (!tag) {
      throw new NotFoundException('Tag not found');
    }

    await this.tagRepository.delete(id);
    return { message: 'Tag deleted successfully' };
  }
}
