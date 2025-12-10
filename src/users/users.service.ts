import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from 'src/dto/user-dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async getAll() {
    const users = await this.userRepository.find();
    return { users };
  }
  async createUser(user: UserDTO) {
    const existing = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (existing) {
      throw new BadRequestException('User already exist with this email');
    }
    const newTag = this.userRepository.create({ ...user });

    return await this.userRepository.save(newTag);
  }
}
