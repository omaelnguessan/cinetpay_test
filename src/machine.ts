export default class Machine {
  public isBroken: boolean;
  public repairTime: number;

  constructor() {
    this.isBroken = false;
    this.repairTime = 0;
  }

  public processPiece(piece: string, processingTime: number): void {
    if (this.isBroken) {
      console.log(
        `La machine est en panne. Temps de réparation restant : ${this.repairTime} minutes.`
      );
      return;
    }

    console.log(`Traitement de la pièce ${piece}...`);
    this.simulateProcessingTime(processingTime);
    console.log(`La pièce ${piece} a été traitée avec succès.`);
  }

  public checkForFailure(): void {
    const randomNumber = Math.random();
    if (randomNumber <= 0.25) {
      this.isBroken = true;
      this.repairTime = this.getRandomRepairTime();
      console.log("La machine est en panne. Réparation en cours...");
    }
  }

  private simulateProcessingTime(processingTime: number): void {
    for (let i = 1; i <= processingTime; i++) {
      console.log(`Temps de traitement : ${i} minute(s)...`);
      this.checkForFailure();
      if (this.isBroken) {
        return;
      }
    }
  }

  private getRandomRepairTime(): number {
    return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  }
}
