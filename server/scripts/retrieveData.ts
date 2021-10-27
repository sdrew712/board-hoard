import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getAllBoards = async (req: Request, res: Response) => {
  const allBoards = await prisma.boards.findMany();
  res.status(200).send(allBoards);
};

export const getSingleBoard = async (req: Request, res: Response) => {
  let boardId: any = req.query.id;
  boardId = parseInt(boardId);

  const result = await prisma.boards.findUnique({
    where: { id: boardId },
  });

  res.status(200).send(result);
};

export const getFilteredBoards = async (req: Request, res: Response) => {
  const { brandFilterTerms, categoryFilterTerms, flexFilterTerms, searchTerm, sortByTerm } = req.query as Record<
    string,
    string[]
  >;

  const brandFilterArray = brandFilterTerms?.map((brand) => ({ brand }));
  const categoryFilterArray = categoryFilterTerms?.map((category) => ({ category }));
  const flexFilterArray = flexFilterTerms?.map((flex) => ({ flex }));

  const sortByTermArray = () => {
    if (sortByTerm.length > 0) {
      return [
        {
          //@ts-ignore
          price: sortByTerm,
        },
      ];
    } else {
      return [];
    }
  };

  const filteredBoards = await prisma.boards.findMany({
    //@ts-ignore
    orderBy: sortByTermArray(),
    where: {
      AND: [
        { OR: brandFilterArray },
        { OR: categoryFilterArray },
        { OR: flexFilterArray },
        {
          OR: [
            {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              brand: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              category: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
            {
              flex: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          ],
        },
      ],
    },
  });
  res.status(200).send(filteredBoards);
};
