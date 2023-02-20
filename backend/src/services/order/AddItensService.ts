import prismaClient from "../../prisma";

interface AddRequest {
  amount: number;
  order_id: string;
  product_id: string;
}

class AddItensService {
  async execute({ amount, order_id, product_id }: AddRequest) {
    const addItens = await prismaClient.item.create({
      data: {
        amount: amount,
        order_id: order_id,
        product_id: product_id,
      },
    });

    return addItens;
  }
}

export { AddItensService };
