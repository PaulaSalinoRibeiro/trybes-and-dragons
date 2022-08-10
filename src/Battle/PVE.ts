import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  _player1: Fighter;
  _player2: SimpleFighter[];

  constructor(player1: Fighter, player2: SimpleFighter[]) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    this._player1.attack(this._player2[0]);
    this._player2[0].attack(this._player1);
    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}