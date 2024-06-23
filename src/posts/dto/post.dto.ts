import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDTO {
    @ApiProperty({ type: String, description: '게시글 제목'})
    readonly title: string;

    @ApiProperty({ type: String, description: '게시글 내용'})
    readonly content: string;
}