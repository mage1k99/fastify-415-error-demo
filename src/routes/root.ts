import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  // sending post request to this route will work as expected.
  fastify.post("/passroute",async (request, reply) => {
    return reply.send({
      hi: "hello",
    });
  })
  // when sending a post request with multipart/form-data body to a route that
  // does not exist will throw an 415 error instead of 404.
}

export default root;
