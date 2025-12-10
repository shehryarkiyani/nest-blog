import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import ormconfig from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
