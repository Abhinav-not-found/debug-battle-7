/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { AuthResponse } from '../models/AuthResponse';
import type { CreateUserInput } from '../models/CreateUserInput';
import type { LoginUserInput } from '../models/LoginUserInput';
import type { RefreshTokenInput } from '../models/RefreshTokenInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthenticationService {
    /**
     * Register a new user
     * Creates a new user account with a hashed password and returns authentication information.
     * @param requestBody
     * @returns AuthResponse User registered successfully
     * @throws ApiError
     */
    public static registerUser(
        requestBody: CreateUserInput,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Validation error or email already in use`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Login a user
     * Authenticates a user using their credentials and returns authentication tokens.
     * @param requestBody
     * @returns AuthResponse User logged in successfully
     * @throws ApiError
     */
    public static loginUser(
        requestBody: LoginUserInput,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request or validation error`,
                401: `Invalid email or password`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Refresh access token
     * Generates a new access token using a valid refresh token.
     * @param requestBody
     * @returns AuthResponse Access token refreshed successfully
     * @throws ApiError
     */
    public static refreshAccessToken(
        requestBody: RefreshTokenInput,
    ): CancelablePromise<AuthResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/refresh-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Refresh token is missing or invalid`,
                401: `Unauthorized or expired refresh token`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Logout the current user
     * Logs out the authenticated user and invalidates their refresh token.
     * @returns ApiResponse User logged out successfully
     * @throws ApiError
     */
    public static logoutUser(): CancelablePromise<ApiResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/login/logout',
            errors: {
                401: `Unauthorized or missing authentication token`,
                500: `Internal server error`,
            },
        });
    }
}
