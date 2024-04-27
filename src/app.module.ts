import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://oussamaboufari:qrKSIr01IOshnkQE@cluster0.xtkavhf.mongodb.net/?retryWrites=true&w=majority'), ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
