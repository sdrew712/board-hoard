import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getAllBoards = async (req: Request, res: Response) => {
  const allBoards = await prisma.boards.findMany();
  res.status(200).send(allBoards);
};

export const getFilteredBoards = async (req: Request, res: Response) => {
  const { brandFilterTerms, categoryFilterTerms, flexFilterTerms } = req.query as Record<
    string,
    string[]
  >;

  const brandFilterArray = brandFilterTerms?.map((brand) => ({ brand }));
  const categoryFilterArray = categoryFilterTerms?.map((category) => ({ category }));
  const flexFilterArray = flexFilterTerms?.map((flex) => ({ flex }));

  const filteredBoards = await prisma.boards.findMany({
    where: {
      AND: [{ OR: brandFilterArray }, { OR: categoryFilterArray }, { OR: flexFilterArray }],
      // OR: brandFilterArray,
    },
  });

  res.status(200).send(filteredBoards);
};

export const getSearchedBoards = async (req: Request, res: Response) => {
  const searchTerm = req.query.term;

  const searchResults = await prisma.boards.findMany({
    where: {
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
      ],
    },
  });
  res.status(200).send(searchResults);
};
