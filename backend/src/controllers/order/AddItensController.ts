import { Request, Response } from "express";
import { AddItensService } from "../../services/order/AddItensService";

class AddItensController {
  async handle(req: Request, res: Response) {
    const { amount, order_id, product_id } = req.body;

    const addItensService = new AddItensService();

    const addItens = await addItensService.execute({
      amount: amount,
      order_id: order_id,
      product_id: product_id,
    });

    return res.json(addItens);
  }
}

export { AddItensController };
