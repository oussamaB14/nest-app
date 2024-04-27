import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { pid } from 'process';
export type ProductDocument = HydratedDocument<Product>;
@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop()
  description: string;
  @Prop()
  inStock: boolean;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
