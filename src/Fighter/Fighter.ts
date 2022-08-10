import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface FighterBase {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterBase{
  attack: (enemy: SimpleFighter) => void;
  special?: (enemy: SimpleFighter) => void;
  levelUp: () => unknown;
  receiveDamage: (attackPoints: number) => number
}