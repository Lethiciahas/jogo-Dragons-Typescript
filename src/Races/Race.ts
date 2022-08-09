export default abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {}

  get name(): string {
    return this.name;
  }
  
  get dexterity(): string {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;
}
