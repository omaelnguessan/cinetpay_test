import ProductionLine from "../src/production-line";
import Machine from "../src/machine";

jest.mock("../src/machine");

describe("Test de la classe ProductionLine", () => {
  let productionLine: ProductionLine;

  beforeEach(() => {
    productionLine = new ProductionLine();
    (Machine as jest.Mock<Machine>).mockClear();
  });

  test("test de la méthode assemblePistons", () => {});
});
