/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { CreateProductInput } from '../models/CreateProductInput';
import type { Product } from '../models/Product';
import type { UpdateProductInput } from '../models/UpdateProductInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get all products
     * Retrieves a list of all available products.
     * @returns Product Products retrieved successfully
     * @throws ApiError
     */
    public static getAllProducts(): CancelablePromise<Array<Product>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products',
            errors: {
                500: `Internal server error`,
            },
        });
    }
    /**
     * Create a new product
     * Creates a new product. Only authenticated administrators can perform this operation.
     * @param requestBody
     * @returns Product Product created successfully
     * @throws ApiError
     */
    public static createProduct(
        requestBody: CreateProductInput,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid product data`,
                401: `Authentication required`,
                403: `Administrator access required`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Get a product by ID
     * Retrieves a single product using its unique identifier.
     * @param id Unique identifier of the product
     * @returns Product Product retrieved successfully
     * @throws ApiError
     */
    public static getProductById(
        id: string,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Product not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Update a product
     * Updates an existing product. Only authenticated administrators can perform this operation.
     * @param id Unique identifier of the product
     * @param requestBody
     * @returns Product Product updated successfully
     * @throws ApiError
     */
    public static updateProduct(
        id: string,
        requestBody: UpdateProductInput,
    ): CancelablePromise<Product> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid product data`,
                401: `Authentication required`,
                403: `Administrator access required`,
                404: `Product not found`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Delete a product
     * Deletes an existing product. Only authenticated administrators can perform this operation.
     * @param id Unique identifier of the product
     * @returns ApiResponse Product deleted successfully
     * @throws ApiError
     */
    public static deleteProduct(
        id: string,
    ): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Authentication required`,
                403: `Administrator access required`,
                404: `Product not found`,
                500: `Internal server error`,
            },
        });
    }
}
