import { Module } from '@nestjs/common';
import { ProductsService } from '../App/Service/products.service';
import { ProductsController } from '../App/Controller/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../Domain/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
