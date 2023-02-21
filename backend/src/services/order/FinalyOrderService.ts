import prismaClient from "../../prisma";

interface FinalyRequest {
  order_id: string;
}

class FinalyOrderService {
  async execute({ order_id }: FinalyRequest) {
    const finalyOrder = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });

    return finalyOrder;
  }
}

export { FinalyOrderService };
