import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {

  constructor(private readonly productRepository: ProductRepository){}
  async create(newProduct: CreateProductDto) {
    return await this.productRepository.createProduct(newProduct);
  }


}
