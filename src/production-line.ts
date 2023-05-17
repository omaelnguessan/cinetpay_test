import Machine from "./machine";

export default class ProductionLine {
  private headMachine: Machine;
  private skirtMachine: Machine;
  private shaftMachine: Machine;
  private assemblyMachine: Machine;

  constructor() {
    this.headMachine = new Machine();
    this.skirtMachine = new Machine();
    this.shaftMachine = new Machine();
    this.assemblyMachine = new Machine();
  }

  public assemblePistons(pistonCount: number): void {
    let assembledPistons = 0;
    let totalTime = 0;

    while (assembledPistons < pistonCount) {
      this.headMachine.processPiece("Tête", 2);
      this.skirtMachine.processPiece("Jupe", 3);
      this.shaftMachine.processPiece("Axe", 2.5);

      if (
        !this.headMachine.isBroken &&
        !this.skirtMachine.isBroken &&
        !this.shaftMachine.isBroken
      ) {
        console.log("Assemblage du piston en cours...");
        this.assemblyMachine.processPiece("Piston", 1);
        assembledPistons++;
        totalTime++;
        console.log("Piston assemblé avec succès.");
      } else {
        console.log(
          "L'assemblage du piston est ignoré en raison d'une panne de machine."
        );
      }

      this.resetMachines();
      totalTime++;
    }

    console.log(
      `Temps total nécessaire pour assembler ${pistonCount} pistons : ${totalTime} minutes.`
    );
  }

  private resetMachines(): void {
    this.headMachine.isBroken = false;
    this.skirtMachine.isBroken = false;
    this.shaftMachine.isBroken = false;
    this.headMachine.repairTime = 0;
    this.skirtMachine.repairTime = 0;
    this.shaftMachine.repairTime = 0;
  }
}
