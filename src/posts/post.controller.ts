import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostModel } from '@prisma/client';
import { CreatePostDTO } from './dto/post.dto';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/')
    async getAllPosts(): Promise<PostModel[]> {
        return this.postService.getPosts();
    }

    @Get('/:id')
    async getPost(@Param('id') id: string): Promise<PostModel> {
        return this.postService.getPost(Number(id));
    }

    @Post('/')
    async createPost(@Body() createPostData: CreatePostDTO): Promise<PostModel> {
        const { title, content } = createPostData;
        return this.postService.createPost({
            title,
            content,
        });
    }
}