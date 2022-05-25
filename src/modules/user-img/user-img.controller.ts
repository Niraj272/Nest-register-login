import { Body, Controller, Get, Param, Post, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './file-helper';
import { UserImgService } from './user-img.service';

@Controller()
export class UserImgController {
    constructor(private UserImgService:UserImgService){}
    /** -------------------------ONE IMG UPLOAD--------------------------------------------------*/
    @Post('upload_img')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './files',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }
    ))
    async uploadImage(@UploadedFile() file,@Body() body:any) {
        console.log(file.path);
        
        return await this.UserImgService.uploadimg(file.path,body);

        // return {
        //     originalname: file.originalname,
        //     filename: file.filename
        // }
    }

    /** -----------------------MULTIPLE IMG UPLOAD--------------------------------------------------*/

    @Post('multiple-upload')
    @UseInterceptors(FilesInterceptor('image',20,{
        storage: diskStorage({
            destination: './files',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }
    ))

    async uploadImages(@UploadedFiles() files: any){
        let response: any = [];
        files.forEach((file:any) => {
            const fileResponse = {
                originalname: file.originalname,
                filename: file.filename
            }
            response.push(fileResponse);
        });
        return response;
    }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}

