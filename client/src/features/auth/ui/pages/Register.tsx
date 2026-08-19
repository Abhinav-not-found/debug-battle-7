// import { useEffect } from "react";
// import { ProductsService } from "../../../../api/services/ProductsService";

import { useForm } from "react-hook-form";


type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);
  };
  // useEffect(() => {
  //   ProductsService.getAllProducts()
  //     .then((products) => {
  //       console.log("Products:", products);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch products:", error);
  //     });
  // }, []);

  return (
    <main className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-sm rounded-md bg-neutral-100 p-4"
      >
        <div className="mb-4 flex flex-col">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (
            <span className="text-sm text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-neutral-200 p-4"
        >
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;