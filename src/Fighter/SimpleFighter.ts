export interface SimpleFighterBase {
  lifePoints: number;
  strength: number;
}

export default interface SimpleFighter extends SimpleFighterBase {
  attack(enemy: SimpleFighter): unknown;
  receiveDamage(attackPoints: number): number;
}