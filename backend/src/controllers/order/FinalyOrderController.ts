import { Request, Response } from "express";
import { FinalyOrderService } from "../../services/order/FinalyOrderService";

class FinalyOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finalyOrderService = new FinalyOrderService();

    const finish = await finalyOrderService.execute({
      order_id: order_id,
    });

    return res.json(finish);
  }
}

export { FinalyOrderController };
