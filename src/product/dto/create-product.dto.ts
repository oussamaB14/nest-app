import { IsBoolean, IsNotEmpty, IsString, isBoolean } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  price: number;
  @IsString()
  description?: string;
  @IsBoolean()
  inStock: boolean;
}
