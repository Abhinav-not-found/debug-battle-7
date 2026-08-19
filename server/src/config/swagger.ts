import swaggerJsdoc from "swagger-jsdoc";

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.1.0",

    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "E-commerce backend API documentation",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],

    tags: [
      {
        name: "Authentication",
        description: "Authentication related APIs",
      },
      {
        name: "Users",
        description: "User related APIs",
      },
      {
        name: "Products",
        description: "Product related APIs",
      },
      {
        name: "Cart",
        description: "Shopping cart related APIs",
      },
      {
        name: "Orders",
        description: "Order related APIs",
      },
    ],

    components: {
      schemas: {
        CreateUserInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Abhinav Kumar",
            },
            email: {
              type: "string",
              format: "email",
              example: "abhinav@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password123",
            },
          },
        },

        LoginUserInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "abhinav@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password123",
            },
          },
        },

        RefreshTokenInput: {
          type: "object",
          required: ["refreshToken"],
          properties: {
            refreshToken: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIs...",
            },
          },
        },

        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "66c123456789",
            },
            name: {
              type: "string",
              example: "Abhinav Kumar",
            },
            email: {
              type: "string",
              format: "email",
              example: "abhinav@example.com",
            },
          },
        },

        AuthResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Login successful",
            },
            data: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                },
                refreshToken: {
                  type: "string",
                },
                user: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Something went wrong",
            },
          },
        },
        ApiResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Operation successful",
            },
          },
        },
        Product: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "66c123456789",
            },
            name: {
              type: "string",
              example: "Wireless Headphones",
            },
            description: {
              type: "string",
              example: "Noise cancelling wireless headphones",
            },
            price: {
              type: "number",
              example: 2999,
            },
            stock: {
              type: "integer",
              example: 50,
            },
          },
        },
        CreateProductInput: {
          type: "object",
          required: ["name", "description", "price", "stock"],
          properties: {
            name: {
              type: "string",
              example: "Wireless Headphones",
            },
            description: {
              type: "string",
              example: "Noise cancelling wireless headphones",
            },
            price: {
              type: "number",
              example: 2999,
            },
            stock: {
              type: "integer",
              example: 50,
            },
          },
        },

        UpdateProductInput: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            description: {
              type: "string",
            },
            price: {
              type: "number",
            },
            stock: {
              type: "integer",
            },
          },
        },
      },
    },
  },

  // Your route files are inside src/routes
  apis: ["./src/routes/**/*.ts"],
});

export default swaggerSpec;
