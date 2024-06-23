import { Injectable } from '@nestjs/common';
import { PrismaService } from '../libs/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async getPost(id: number): Promise<Post | null> {
        return this.prisma.post.findUnique({
            where: {id},
        });
    }

    async getPosts(): Promise<Post[]> {
        return this.prisma.post.findMany({});
    }

    async createPost(data: Prisma.PostCreateInput): Promise<Post> {
        return this.prisma.post.create({
            data,
        });
    }

    async updatePost({
        id,
        data,
    }: {
        id: number;
        data: Prisma.PostUpdateInput;
    }): Promise<Post> {
        return this.prisma.post.update({
            data,
            where: {id},
        });
    }

    async deletePost(id: number): Promise<Post> {
        return this.prisma.post.delete({
            where: {id},
        });
    }
}