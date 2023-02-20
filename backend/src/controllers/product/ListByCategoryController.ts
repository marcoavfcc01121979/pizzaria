import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listBYCategoryService = new ListByCategoryService();

    const productsCategories = await listBYCategoryService.execute({
      category_id: category_id,
    });

    return res.json(productsCategories);
  }
}

export { ListByCategoryController };
