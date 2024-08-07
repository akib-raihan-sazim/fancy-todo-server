import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export const getCorsConfig = (): CorsOptions => {
  return {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  };
};
