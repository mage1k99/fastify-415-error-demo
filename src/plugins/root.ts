import { FastifyMultipartAttactFieldsToBodyOptions } from "@fastify/multipart";
import fp from "fastify-plugin";

export interface RootPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<RootPluginOptions>(async (fastify, opts) => {
  fastify.register<FastifyMultipartAttactFieldsToBodyOptions>(
    require("@fastify/multipart"),
    {
      attachFieldsToBody: true,
    }
  );
});

// When using .decorate you have to specify added properties for Typescript
declare module "fastify" {
  export interface FastifyInstance {
    someSupport(): string;
  }
}
