export interface SimpleFighterBase {
  lifePoints: number;
  strength: number;
}

export default interface SimpleFighter extends SimpleFighterBase {
  attack(enemy: SimpleFighterBase): unknown;
  receiveDamage(attackPoints: number): number;
}