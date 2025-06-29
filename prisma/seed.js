const { PrismaClient } = require("../generated/prisma");
const slugify = require("slugify");
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const rentals = [
    {
      price: 1000000,
      beds: 5,
      bath: 5,
      description: "Detached House in Alicante",
      isNew: false,
      isPopular: false,
      houseType: "townhouse",
      houseImage: "https://picsum.photos/id/1018/600/400",
    },
    {
      price: 1200000,
      beds: 4,
      bath: 3,
      description: "Villa in Valencia",
      isNew: true,
      isPopular: true,
      houseType: "apartment",
      houseImage: "https://picsum.photos/id/1025/600/400",
    },
    {
      price: 950000,
      beds: 3,
      bath: 2,
      description: "Townhouse in Seville",
      isNew: false,
      isPopular: false,
      houseType: "condominium",
      houseImage: "https://picsum.photos/id/1031/600/400",
    },
    {
      price: 1500000,
      beds: 6,
      bath: 5,
      description: "Luxury Home in Marbella",
      isNew: true,
      isPopular: false,
      houseType: "multifamily",
      houseImage: "https://picsum.photos/id/1043/600/400",
    },
    {
      price: 880000,
      beds: 3,
      bath: 2,
      description: "Penthouse in Madrid",
      isNew: false,
      isPopular: true,
      houseType: "apartment",
      houseImage: "https://picsum.photos/id/1050/600/400",
    },
    {
      price: 1100000,
      beds: 4,
      bath: 4,
      description: "Country House in Granada",
      isNew: false,
      isPopular: true,
      houseType: "condominium",
      houseImage: "https://picsum.photos/id/1062/600/400",
    },
    {
      price: 760000,
      beds: 3,
      bath: 2,
      description: "Modern Flat in Barcelona",
      isNew: true,
      isPopular: false,
      houseType: "townhouse",
      houseImage: "https://picsum.photos/id/1074/600/400",
    },
    {
      price: 1300000,
      beds: 5,
      bath: 4,
      description: "Beach House in Malaga",
      isNew: false,
      isPopular: true,
      houseType: "multifamily",
      houseImage: "https://picsum.photos/id/1080/600/400",
    },
    {
      price: 980000,
      beds: 4,
      bath: 3,
      description: "Chalet in Bilbao",
      isNew: true,
      isPopular: false,
      houseType: "apartment",
      houseImage: "https://picsum.photos/id/1084/600/400",
    },
    {
      price: 1600000,
      beds: 6,
      bath: 5,
      description: "Estate in Mallorca",
      isNew: true,
      isPopular: true,
      houseType: "condominium",
      houseImage: "https://picsum.photos/id/1081/600/400",
    },
    {
      price: 900000,
      beds: 3,
      bath: 2,
      description: "Apartment in Zaragoza",
      isNew: false,
      isPopular: false,
      houseType: "multifamily",
      houseImage: "https://picsum.photos/id/109/600/400",
    },
    {
      price: 1050000,
      beds: 4,
      bath: 3,
      description: "Terraced House in Cadiz",
      isNew: true,
      isPopular: false,
      houseType: "townhouse",
      houseImage: "https://picsum.photos/id/110/600/400",
    },
    {
      price: 1400000,
      beds: 5,
      bath: 4,
      description: "Mansion in Ibiza",
      isNew: false,
      isPopular: true,
      houseType: "apartment",
      houseImage: "https://picsum.photos/id/111/600/400",
    },
    {
      price: 1000000,
      beds: 4,
      bath: 3,
      description: "Detached House in Alicante",
      isNew: true,
      isPopular: false,
      houseType: "multifamily",
      houseImage: "https://picsum.photos/id/112/600/400",
    },
    {
      price: 700000,
      beds: 2,
      bath: 1,
      description: "Studio in Valencia",
      isNew: true,
      isPopular: false,
      houseType: "condominium",
      houseImage: "https://picsum.photos/id/113/600/400",
    },
    {
      price: 820000,
      beds: 3,
      bath: 2,
      description: "Duplex in Madrid",
      isNew: false,
      isPopular: true,
      houseType: "townhouse",
      houseImage: "https://picsum.photos/id/114/600/400",
    },
    {
      price: 1250000,
      beds: 5,
      bath: 4,
      description: "Loft in Seville",
      isNew: false,
      isPopular: false,
      houseType: "apartment",
      houseImage: "https://picsum.photos/id/115/600/400",
    },
    {
      price: 1700000,
      beds: 6,
      bath: 5,
      description: "Palace in Granada",
      isNew: true,
      isPopular: true,
      houseType: "condominium",
      houseImage: "https://picsum.photos/id/116/600/400",
    },
    {
      price: 880000,
      beds: 3,
      bath: 3,
      description: "Modern Home in Bilbao",
      isNew: false,
      isPopular: false,
      houseType: "multifamily",
      houseImage: "https://picsum.photos/id/117/600/400",
    },
    {
      price: 1350000,
      beds: 5,
      bath: 4,
      description: "Seaside House in Malaga",
      isNew: true,
      isPopular: true,
      houseType: "townhouse",
      houseImage: "https://picsum.photos/id/118/600/400",
    },
  ];

  const rentalsWithMeta = rentals.map((rental, index) => ({
    ...rental,
    slug: slugify(rental.description, { lower: true }) + `-${index + 1}`,
    createdAt: now,
  }));

  await prisma.rental.createMany({
    data: rentalsWithMeta,
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log("Seed finalizado com sucesso");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
