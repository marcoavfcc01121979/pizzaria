import prismaClient from "../../prisma";

interface ItemRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: ItemRequest) {
    const deleteItem = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });
    return deleteItem;
  }
}

export { RemoveItemService };
