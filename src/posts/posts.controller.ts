import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './schemas/post.schema';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.findAll();
  }

  @Get(':postId')
  getPostById(@Param('postId') postId: string) {
    return this.postsService.findById(postId);
  }

  @Post()
  createPost(@Body() body: PostType) {
    return this.postsService.createPost(body);
  }
}
