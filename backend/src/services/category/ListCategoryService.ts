import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    console.log("category", category);
    return category;
  }
}

export { ListCategoryService };
