/* import Race from './Races';
import Archetype from './Archetypes';
import Energy from './Energy';
import { Elf } from './Races';
import { Mage } from './Archetypes';
import getRandomInt from './utils';

export default class Character {
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
    this._race =  new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = 0;
    this._lifePoints = 0;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10)
    this._energy = {
      type_:,
      amount: getRandomInt(1, 10),
    }
  }
} */