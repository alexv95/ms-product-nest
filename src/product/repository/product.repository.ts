import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "../entities/product.entity";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { CreateProductDto } from "../dto/create-product.dto";



@Injectable()
export class ProductRepository{
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    async createProduct(newProduct: CreateProductDto){
        return await this.productModel.create(newProduct);
    } 


}
