import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getAllBoards = async (req: Request, res: Response) => {
  const allBoards = await prisma.boards.findMany();
  res.status(200).send(allBoards);
};

export const getFilteredBoards = async (req: Request, res: Response) => {
  const userSelectedBrands: any = req.query.brandFilterTerms;
  const userSelectedCategories: any = req.query.categoryFilterTerms;

  const brandFilterArray: Array<any> = [];
  const categoryFilterArray: Array<any> = [];

  userSelectedBrands?.forEach((brand: string) => {
    brandFilterArray.push({ brand: brand });
  });

  userSelectedCategories?.forEach((category: string) => {
    categoryFilterArray.push({
      category: {
        contains: category,
      },
    });
  });

  let filteredBoards: Array<object> = [];

  if (brandFilterArray.length > 0) {
    filteredBoards = await prisma.boards.findMany({
      where: {
        OR: brandFilterArray,
        AND: [{ OR: categoryFilterArray }],
      },
    });
  } else if (categoryFilterArray.length > 0) {
    filteredBoards = await prisma.boards.findMany({
      where: {
        OR: categoryFilterArray,
        AND: [{ OR: brandFilterArray }],
      },
    });
  }

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
