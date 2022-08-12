import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';
import Fighter from './Fighter';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = 0;
    this._lifePoints = 0;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race():Race { return this._race; }
  get archetype():Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength():number { return this._strength; }
  get defense():number { return this._defense; }
  get dexterity():number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  // este método recebe por parâmetro um valor (attackPoints) e as regras são:
  // Este valor deve ser decrescido de sua defesa (defense), assim causando um dano (damage)
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    // Se o dano for maior que 0, você perde pontos de vida (lifePoints) 
    if (damage > 0) this._lifePoints -= damage;
    // Ao receber o ataque e perder pontos de vida se sua vida chegar a 0 ou menos, você deve fixá-la com o valor -1
    if (this._lifePoints <= 0) this._lifePoints = -1;
    // Ao final sempre retorne o valor atualizado de seus pontos de vida
    return this._lifePoints;
  }

  // este método recebe por parâmetro uma pessoa inimiga (enemy) e as regras são:
  // Toda vez que acontecer um ataque, o inimigo recebido por parâmetro recebe um dano;
  // Este dano deve ser equivalente a força (strength) de quem atack
  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  // Sempre que este método for chamado os atributos maxLifePoints, strength, dexterity e defense terão um incremento de no mínimo 1 e no máximo 10 pontos
  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    // O atributo maxLifePoints do Character nunca poderá ser maior que o maxLifePoints de sua raça (race). Se, ao incrementar o valor de maxLifePoints do Character esse valor ficar maior do que o maxLifePoints da raça, ele deve receber o valor igual ao do da raça
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    // Ao final, o atributo lifePoints também deve ser atualizado, recebendo o novo valor de maxLifePoints (de acordo com as regras anteriores). 
    this._lifePoints = this._maxLifePoints;
  }
  // special():
}