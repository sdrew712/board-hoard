import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.boards.createMany({
    data: [
      {
        id: 1,
        name: "POKE",
        price: 172,
        brand: "Loaded",
        category: "Freestyle",
        image_url: "https://www.muirskate.com/photos/products/1059/hd_product_Loaded_2013_Poke__Set_.png",
        description:
          "If you need a bite, grab yourself some POKE! Evolving from the Loaded Fish and the Ceviche, this rad little ripper will take you anywhere. With features like a fully functional kicktail, a mini nose, subtle rocker and wheel flares, this lightweight bamboo composite board will get you shredding. Quick and nimble, you'll be pumping between classes or commuting across town in no time.",
        length: 34,
        width: 9.13,
        wheelbase: 21,
        flex: "Medium",
      },
      {
        id: 2,
        name: "MINI ROCKET V2",
        price: 209.95,
        brand: "Zenit",
        category: "Downhill",
        image_url: "https://www.muirskate.com/photos/products/9493/hd_product_ZenitRocketv2bottom%28set-final%29.png",
        description:
          'The Zenit Mini Rocket 33 Longboard deck is pressed in the same mold as the Rocket V3 but is only 8.7" wide, allowing you to fit narrower longboard trucks. This downhill longboard deck is constructed with 6 plies of Hard Rock Canadian Maple sandwiched in sheets of Triaxial Fiberglass and one Layer of "X" Shaped UD Carbon Fiber. The V2 Zenit Mini Rocket 33" radial concave and generous wheel flares for railing the most aggressive corners.',
        length: 33.5,
        width: 8.7,
        wheelbase: 24,
        flex: "Stiff",
      },
      {
        id: 3,
        name: "HOEDOWN SOFT FLEX",
        price: 299,
        brand: "Moonshine MFG",
        category: "Dance",
        image_url:
          "https://www.muirskate.com/photos/products/7596/hd_product_Howdown-Blue-Soft-Flex-Longboard-skateboard%28SET-HD%29.png",
        description:
          "The Hoedown is Moonshine’s dedicated dancing board, designed and shaped for ultimate stability and cruise control. In addition to its bomber two-ply vertically laminated core, the Hoedown is inlayed with two fiberglass stringers lengthwise along its midsection to give the board consistent flex, torsional stability and strength under foot - important factors for a board of its length – without the extra bulk and weight that many dancing boards suffer from. Simply put, for a board of its size (measuring 48” x 9.5”), the Hoedown is thinner, lighter and stronger than any other board on the market.",
        length: 48,
        width: 9.5,
        wheelbase: 34,
        flex: "Soft",
      },
      {
        id: 4,
        name: "HOEDOWN MEDIUM FLEX",
        price: 249,
        brand: "Moonshine MFG",
        category: "Dance",
        image_url:
          "https://www.muirskate.com/photos/products/7594/hd_product_2018-Moonshine-Hoe-Down-RED-Med-FlexDeck-%28SET-HD%29.png",
        description:
          "The Hoedown is Moonshine’s dedicated dancing board, designed and shaped for ultimate stability and cruise control. In addition to its bomber two-ply vertically laminated core, the Hoedown is inlayed with two fiberglass stringers lengthwise along its midsection to give the board consistent flex, torsional stability and strength under foot - important factors for a board of its length – without the extra bulk and weight that many dancing boards suffer from. Simply put, for a board of its size (measuring 48” x 9.5”), the Hoedown is thinner, lighter and stronger than any other board on the market.",
        length: 48,
        width: 9.5,
        wheelbase: 34,
        flex: "Medium",
      },
      {
        id: 5,
        name: "TANGO",
        price: 259,
        brand: "Zenit",
        category: "Dance",
        image_url: "https://www.muirskate.com/photos/products/9480/hd_product_ZenitTango%28Set-Final%29.png",
        description:
          "The 2021 Zenit Tango dancer deck is a top notch freestyle dancer. It has a fun platform ideal for those looking for a longboard deck for dancing and freeride!",
        length: 42.5,
        width: 9.375,
        wheelbase: 27.5,
        flex: "Medium",
      },
      {
        id: 6,
        name: "COUNTY LINE SOFT FLEX",
        price: 299,
        brand: "Moonshine MFG",
        category: "Freestyle",
        image_url:
          "https://www.muirskate.com/photos/products/7589/hd_product_2018-Yellow-County-Line-Purple-%28Set-HD%29.png",
        description:
          "If you're looking for an extremely fun yet versatile board to learn on, look no further! The Moonshine County Line is a carve/cruise/freeride board with a purpose. Moonshine knows our boards take a beating, so they built a board that can take it all. Centered around its Albus wood CNC'ed core, urethane rails help keep this board protected from curbing, allowing the board to last much longer than all wood decks.",
        length: 43.5,
        width: 9.5,
        wheelbase: 30.5,
        flex: "Soft",
      },
      {
        id: 7,
        name: "COUNTY LINE FIRM FLEX",
        price: 299,
        brand: "Moonshine MFG",
        category: "Freestyle",
        image_url:
          "https://www.muirskate.com/photos/products/7582/hd_product_2018-Yellow-County-Line-Yellow-%28Set-HD%29.png",
        description:
          "If you're looking for an extremely fun yet versatile board to learn on, look no further! The Moonshine County Line is a carve/cruise/freeride board with a purpose. Moonshine knows our boards take a beating, so they built a board that can take it all. Centered around its Albus wood CNC'ed core, urethane rails help keep this board protected from curbing, allowing the board to last much longer than all wood decks.",
        length: 43.5,
        width: 9.5,
        wheelbase: 30.5,
        flex: "Firm",
      },
      {
        id: 8,
        name: "ELIXIR",
        price: 198.95,
        brand: "Moonshine MFG",
        category: "Freestyle",
        image_url: "https://www.muirskate.com/photos/products/9468/hd_product_MoonshineElixir%28Set-Final%29.png",
        description:
          "The Moonshine MFG Elixir deck just got an upgrade. For this edition, Moonshine MFG slimmed down and refined the shape for increased durability and freestyle performance. It's a great do-everything deck that knows how to take a beating. Whether you are throwing the longest toeside slide, holding out manuals, or dancing all the way down the boardwalk, this longboard will never let you down.",
        length: 40.5,
        width: 9.5,
        wheelbase: 23.5,
        flex: "Stiff",
      },
      {
        id: 9,
        name: "MARBLE 40 V3",
        price: 186,
        brand: "Zenit",
        category: "Downhill",
        image_url: "https://www.muirskate.com/photos/products/9404/hd_product_Marble40%28Set-Final%29.png",
        description:
          "Designed for freestyle addicts, the Marble 40 V3 has been reimagined. While it maintains its freeride and downhill prowess, an evened-out mold tones down the board’s curves to make the micro drops and the radial concave more progressive.",
        length: 40,
        width: 9,
        wheelbase: 22.5,
        flex: "Stiff",
      },
      {
        id: 10,
        name: "MITCH PRO",
        price: 219.95,
        brand: "Rayne",
        category: "Downhill",
        image_url: "https://www.muirskate.com/photos/products/9583/hd_product_Mitchprobottom%28set-Final%29.png",
        description:
          "The Rayne Mitty is a compact downhill skateboard created and designed by pro rider Mitch Thompson. This board has been designed for racing yet it kills the freeride game. Mitch wanted to create a versatile board that could do both with ease!",
        length: 32,
        width: 9.1,
        wheelbase: 20.25,
        flex: "Stiff",
      },
      {
        id: 11,
        name: "TUCKER",
        price: 249.95,
        brand: "Moonshine MFG",
        category: "Downhill",
        image_url: "https://www.muirskate.com/photos/products/4360/hd_product_Moonshine-Tucker-%28Set-HD%29.png",
        description:
          "Moonshine MFG and Ronin collaborated to bring you the Tucker. With the same classic Moonshine construction, this board is stiff like you wouldn't believe! Similar to the GMR Tucker boards, Moonshines don't need heavy metal spines to keep its rigidity. Due to its state of the art construction, you get the best of both worlds, stiff AND extremely light. If you're looking for a downhill board with no limits, the Moonshine Tucker is the board for you!",
        length: 33.5,
        width: 9.75,
        wheelbase: 26.5,
        flex: "Stiff",
      },
      {
        id: 12,
        name: "STRATUS 46 SPECTRUM",
        price: 129.95,
        brand: "Landyachtz",
        category: "Dance",
        image_url:
          "https://www.muirskate.com/photos/products/9136/hd_product_Stratus46SpectrumDeck%28Set-Final2%29.png",
        description:
          "The same Stratus that you know and love, now pressed in all Canadian maple for a smoother ride and increased durability. It has a snappy flex, a symmetrical shape and big, mellow kicktails for all of your freestyle and dancing needs.",
        length: 46,
        width: 9.25,
        wheelbase: 29.5,
        flex: "Medium",
      },
      {
        id: 13,
        name: "BHANGRA V2",
        price: 272,
        brand: "Loaded",
        category: "Dance",
        image_url:
          "https://www.muirskate.com/photos/products/8214/hd_product_Loaded-Bhangra-V2-Longboard-Skateboard-Deck-%28SET-HD%29.png",
        description:
          "Designed for the fanciest of footwork, the Bhangra offers a spacious platform with plenty of room for all your dance moves yet is nimble enough for advanced freestyle tricks and steezy slides. Ideal for dancing/freestyle gurus and surf-style aficionados looking for a smooth and graceful riding experience.",
        length: 48.5,
        width: 9.5,
        wheelbase: 32.75,
        flex: "Medium",
      },
      {
        id: 14,
        name: "RAYNE WHIP 41",
        price: 149.95,
        brand: "Rayne",
        category: "Freestyle",
        image_url: "https://www.muirskate.com/photos/products/6320/hd_product_Rayne-2016-Whip-41%28SET-HD%29.png",
        description:
          "So what if you don’t want to go fast? What if you just want to take curvy, flowing lines through your neighborhood streets, twirling, stepping, dancing and flipping to oblivion? Do you wish you had more room to take more steps and more kicktails to flip your board up for a steezy tigerclaw? Do not be afraid, the Whip has landed! The Whip is designed around free motion. A board designed to encourage and progress your freestyle in ways that your quiver-killer never could; the supple, shallow kicktails allow you to whip your board around, no-comply and ollie with little effort and much agility.",
        length: 41,
        width: 9.45,
        wheelbase: 25.5,
        flex: "Medium",
      },
      {
        id: 15,
        name: "TARAB",
        price: 299,
        brand: "Loaded",
        category: "Dance",
        image_url: "https://www.muirskate.com/photos/products/7267/hd_product_Loaded-Tarab-Deck-2017-%28SET-HD%29.png",
        description:
          "The Loaded Tarab is designed to push the boundaries of modern longboard dancing. Loaded launched their first Dancer in 2008, followed by the Bhangra in 2010. The Tarab builds on that history. Lightweight, durable and technical, the Tarab is intended to further the level of longboard dancing and modern freestyle.",
        length: 47,
        width: 9.5,
        wheelbase: 32.25,
        flex: "Soft",
      },
      {
        id: 16,
        name: "INFUSER",
        price: 198.95,
        brand: "Moonshine MFG",
        category: "Freestyle",
        image_url: "https://www.muirskate.com/photos/products/7313/hd_product_Moonshine-Infuser-%28SET-HD%29.png",
        description:
          "Infuse your freestyle and dancing game with new moves. The lightweight Infuser is a freestyle multi-purpose tool. This symmetrical top mount deck is great for cruising, carving, dancing and pushing your favorite trail. The Infuser features large urethane tip/tail for added durability, perfect subtle concave and perfect flex. Like any Moonshine deck, it’s 100% waterproof and has ultra-durable urethane rails.",
        length: 44,
        width: 9,
        wheelbase: 30,
        flex: "Medium",
      },
      {
        id: 17,
        name: "STRATUS 46 WATERCOLOR",
        price: 112.95,
        brand: "Landyachtz",
        category: "Dance",
        image_url: "https://www.muirskate.com/photos/products/9137/hd_product_Stratus46watercolor_%28set-final2%29.png",
        description:
          "The same Stratus that you know and love, now pressed in all Canadian maple for a smoother ride and increased durability. It has a snappy flex, a symmetrical shape and big, mellow kicktails for all of your freestyle and dancing needs.",
        length: 46,
        width: 9.25,
        wheelbase: 29.5,
        flex: "Medium",
      },
    ],
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
