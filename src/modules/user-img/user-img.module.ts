import { Module } from '@nestjs/common';
import { UserImgController } from './user-img.controller';
import { UserImgService } from './user-img.service';
import { MulterModule } from '@nestjs/platform-express';
import { USER_REPOSITORY } from 'src/core/constants';
import { userProviders } from './user.providers';

@Module({
  imports:[
    MulterModule.register({
        dest:'./files'
    })
  ],
  controllers: [UserImgController],
  providers: [UserImgService,...userProviders]
})
export class UserImgModule {}
