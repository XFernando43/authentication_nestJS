import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../Domain/dto/create-product.dto';
import { UpdateProductDto } from '../../Domain/dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/Domain/entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>){}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    this.productRepository.save(product);
  }

  findAll() {
    const products = this.productRepository.find();
    return products;
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where:{
        productId:id
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return "ACA ESTA EL UPDATE"
  }

  remove(id: number) {
    return this.productRepository.delete(id);
  }
}
