import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

export type PostType = IPost;

interface IPost {
  title: string;
  description: string;
  content: string;
}

@Schema({ timestamps: true })
export class Post implements IPost {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
