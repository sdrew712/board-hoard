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
  const userSelectedFlex: any = req.query.flexFilterTerms;

  const brandFilterArray: Array<any> = [];
  const categoryFilterArray: Array<any> = [];
  const flexFilterArray: Array<any> = [];

  userSelectedBrands?.forEach((brand: string) => {
    brandFilterArray.push({ brand: brand });
  });

  userSelectedCategories?.forEach((category: string) => {
    categoryFilterArray.push({
      category: category,
    });
  });

  userSelectedFlex?.forEach((flex: string) => {
    flexFilterArray.push({
      flex: flex,
    });
  });

  let filteredBoards: Array<object> = [];

  if (brandFilterArray.length || categoryFilterArray.length > 0) {
    filteredBoards = await prisma.boards.findMany({
      where: {
        OR: [
          {
            OR: categoryFilterArray,
            AND: [{ OR: brandFilterArray }, { AND: flexFilterArray }],
          },
          {
            OR: brandFilterArray,
            AND: [{ OR: categoryFilterArray }, { AND: flexFilterArray }],
          },
        ],
        AND: flexFilterArray,
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
