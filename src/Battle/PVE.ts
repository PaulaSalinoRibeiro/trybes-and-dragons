import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  _player1: Fighter;
  _player2: Array<SimpleFighter | Monster>;

  constructor(player1: Fighter, player2: Array<SimpleFighter | Monster>) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  findAliveSimpleFighter(): SimpleFighter | undefined {
    return this._player2
      .find((player2) => player2.lifePoints > 0);
  }

  fight(): number {
    let player = this.findAliveSimpleFighter();
    while (this._player1.lifePoints > 0 && player !== undefined) {
      this._player1.attack(player);
      player.attack(this._player1);
      player = this.findAliveSimpleFighter();
    }
    return super.fight();
  }
}