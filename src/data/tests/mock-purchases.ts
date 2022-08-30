import { SavePurchases } from "@/domain/usecases";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const mockPurchases = (): Array<SavePurchases.Params> => [
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(),
    value: faker.finance.amount(),
  },
  {
    id: faker.datatype.uuid(),
    date: faker.date.recent(),
    value: faker.finance.amount(),
  },
];
