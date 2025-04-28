import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ImageUploadService {
  uploadImage(imageBuffer: Buffer): string {
    const uploadDir = path.resolve(process.cwd(), 'uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filename = `SAIBORG-FLAG-ULA42-${uuidv4()}.png`;
    const filePath = path.join(uploadDir, filename);

    fs.writeFileSync(filePath, imageBuffer);

    return `/uploads/${filename}`;
  }
}
