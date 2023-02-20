import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createOrderService = new CreateOrderService();

    const createOrder = await createOrderService.execute({
      table: table,
      name: name,
    });

    return res.json(createOrder);
  }
}

export { CreateOrderController };
