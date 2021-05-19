import { range, getCollectionDetails } from "../../../utils";
import getMoviesData from "./../../../utils/collection/get-movies-data";

jest.mock("./../../../utils/collection/get-movies-data", () => jest.fn());

it("Returning correct collection details data", async () => {
  const mockedData = [
    {
      revenue: 1000,
      credits: {
        cast: range(1, 5).map((item) => ({
          id: item,
          name: `dummy cast name ${item}`,
        })),
        crew: range(1, 5).map((item) => ({
          id: item,
          name: `dummy crew name ${item}`,
        })),
      },
    },
    {
      revenue: 2000,
      credits: {
        cast: range(6, 5).map((item) => ({
          id: item,
          name: `dummy cast name ${item}`,
        })),
        crew: range(1, 5).map((item) => ({
          id: item,
          name: `dummy crew name ${item}`,
        })),
      },
    },
    {
      credits: {
        cast: range(11, 5).map((item) => ({
          id: item,
          name: `dummy cast name ${item}`,
        })),
        crew: range(6, 5).map((item) => ({
          id: item,
          name: `dummy crew name ${item}`,
        })),
      },
      revenue: 2000,
    },
  ];

  getMoviesData.mockReturnValue(mockedData);

  const collectionDetails = await getCollectionDetails();
  expect(collectionDetails).toEqual({
    revenue: 5000,
    cast: range(1, 15).map((item) => ({
      id: item,
      name: `dummy cast name ${item}`,
    })),
    crew: [
      ...range(1, 5).map((item) => ({
        id: item,
        name: `dummy crew name ${item}`,
      })),
      ...range(6, 5).map((item) => ({
        id: item,
        name: `dummy crew name ${item}`,
      })),
    ],
  });
});
