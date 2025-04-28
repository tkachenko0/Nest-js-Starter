import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImageUploadService } from './image-upload.service';

@Module({
  controllers: [ImagesController],
  providers: [ImageUploadService],
})
export class ImagesModule {}
