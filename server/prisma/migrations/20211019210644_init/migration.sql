-- CreateTable
CREATE TABLE "boards" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "price" DECIMAL,
    "brand" VARCHAR,
    "category" VARCHAR,
    "image_url" VARCHAR,
    "description" VARCHAR,
    "length" DECIMAL,
    "width" DECIMAL,
    "wheelbase" DECIMAL,
    "flex" VARCHAR,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);
