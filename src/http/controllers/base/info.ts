import { AppInfoUseCase } from "@/use-cases/app-info";
import { FastifyReply, FastifyRequest } from "fastify";

export function info(_: FastifyRequest, reply: FastifyReply) {
const useCase = new AppInfoUseCase()

    const reponse = useCase.execute()

       return reply.status(200).send();
  }
