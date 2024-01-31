const products: Product[] = [
  {
    id: 1,
    name: "2021 Tesla Model 3",
    price: 41103,
    description: "This is a product",
    vin: "JN1AZ0CPOBT009448",
    specifications: [
      {
        category: "Exterior",
        name: "Body Style",
        value: "Hatchback",
      },

      {
        category: "Exterior",
        name: "Exterior Colour",
        value: "Blue",
      },
      {
        category: "Exterior",
        name: "Length",
        value: "175”",
      },
      {
        category: "Exterior",
        name: "Wheelbase",
        value: "106”",
      },
      {
        category: "Exterior",
        name: "Width",
        value: "69.7”",
      },
      {
        category: "Exterior",
        name: "Full Width",
        value: "N/A",
      },
      {
        category: "Exterior",
        name: "Clearance",
        value: "6”",
      },
      {
        category: "Interior",
        name: "Seating",
        value: "5 adults",
      },
      {
        category: "Interior",
        name: "Interior Color",
        value: "N/A",
      },
      {
        category: "Interior",
        name: "Head Room Front",
        value: "41”",
      },
      {
        category: "Interior",
        name: "Head Room Rear",
        value: "37”",
      },
      {
        category: "Interior",
        name: "Leg Room Front",
        value: "42”",
      },
      {
        category: "Interior",
        name: "Leg Room Rear",
        value: "33”",
      },
      {
        category: "Interior",
        name: "Shoulder Room Front",
        value: "54”",
      },
      {
        category: "Interior",
        name: "Shoulder Room Rear",
        value: "52”",
      },
      {
        category: "BEV Performance",
        name: "Horsepower",
        value: "107 hp",
      },
      {
        category: "BEV Performance",
        name: "MPGe",
        value: "102",
      },
      {
        category: "BEV Performance",
        name: "Top Speed",
        value: "90 mph",
      },
      {
        category: "Charging",
        name: "Electric Range",
        value: "73 Mi.",
      },
      {
        category: "Charging",
        name: "Battery Size",
        value: "24 kWh",
      },
      {
        category: "Charging",
        name: "Cost to charge (full)",
        value: "$2.50",
      },
    ],
    attributes: [
      {
        name: "Color",
        options: ["black", "red", "blue", "silver"],
      },
    ],
    variants: [
      {
        id: 1,
        attributes: [
          {
            name: "Color",
            option: "black",
          },
        ],
      },
      {
        id: 2,
        attributes: [
          {
            name: "Color",
            option: "red",
          },
        ],
      },
      {
        id: 3,
        attributes: [
          {
            name: "Color",
            option: "blue",
          },
        ],
      },
      {
        id: 4,
        attributes: [
          {
            name: "Color",
            option: "silver",
          },
        ],
      },
    ],
    collection: {
      id: 1,
      name: "Tesla",
      slug: "tesla",
      description:
        "Tesla believes in accelerating the world's transition to sustainable energy with electric cars.",
    },
    images: [
      {
        src: "https://picsum.photos/id/1/2000/1280",
        alt: "Product 1",
        width: 2000,
        height: 1280,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "black",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/11/1920/1080",
        alt: "Product 1",
        width: 1920,
        height: 1080,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "black",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/12/1300/900",
        alt: "Product 1",
        width: 1300,
        height: 900,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "black",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/13/1300/900",
        alt: "Product 1",
        width: 1300,
        height: 900,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "black",
            },
          ],
        },
      },

      {
        src: "https://picsum.photos/id/2/1300/700",
        alt: "Product 1",
        width: 1300,
        height: 700,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "red",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/21/1300/700",
        alt: "Product 1",
        width: 1300,
        height: 700,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "red",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/22/1440/700",
        alt: "Product 1",
        width: 1440,
        height: 700,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "red",
            },
          ],
        },
      },

      {
        src: "https://picsum.photos/id/24/1440/720",
        alt: "Product 1",
        width: 1440,
        height: 720,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "red",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/3/1440/720",
        alt: "Product 1",
        width: 1440,
        height: 720,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "blue",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/31/1000/720",
        alt: "Product 1",
        width: 1000,
        height: 720,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "blue",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/32/1000/800",
        alt: "Product 1",
        width: 1000,
        height: 800,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "blue",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/33/1000/800",
        alt: "Product 1",
        width: 1000,
        height: 800,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "blue",
            },
          ],
        },
      },

      {
        src: "https://picsum.photos/id/4/1500/1500",
        alt: "Product 1",
        width: 1500,
        height: 1500,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "silver",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/41/1500/1500",
        alt: "Product 1",
        width: 1500,
        height: 1500,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "silver",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/42/1400/900",
        alt: "Product 1",
        width: 1400,
        height: 900,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "silver",
            },
          ],
        },
      },
      {
        src: "https://picsum.photos/id/43/1300/900",
        alt: "Product 1",
        width: 1300,
        height: 900,
        metaData: {
          attributes: [
            {
              name: "Color",
              option: "silver",
            },
          ],
        },
      },
    ],
    rating: {
      value: 5,
      max: 5,
    },
    about: [
      { iconSrc: "/gas-station.svg", title: "Diesel Fuel" },
      {
        iconSrc: "/car-transmission.svg",
        title: "Automatic Transmission",
      },
      {
        iconSrc: "/speedometer.svg",
        title: "11,594 Miles",
      },
      {
        iconSrc: "/car-lever.svg",

        title: "3.5L Diesel",
      },
    ],
    deliveryNote: "Estimated within 16 Aug - 23 Aug",
    details: [
      {
        title: "Description",
        content: "lorem ipsum dolor sit amet",
      },
      {
        title: "Product Highlights",
        content: "lorem ipsum dolor sit amet",
      },
      {
        title: "Delivery & Warranty",
        content: "lorem ipsum dolor sit amet",
      },
    ],
  },
];

export default products;
