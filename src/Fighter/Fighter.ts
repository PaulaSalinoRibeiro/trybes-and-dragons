import Energy from '../Energy';

export interface FighterBase {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterBase{
  attack: (enemy: Fighter) => void;
  special?: (enemy: FighterBase) => void;
  levelUp: () => unknown;
  receiveDamage: (attackPoints: number) => number
}