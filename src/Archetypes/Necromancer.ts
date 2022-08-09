import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _count = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._count += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() : number {
    return Necromancer._count;
  }
}