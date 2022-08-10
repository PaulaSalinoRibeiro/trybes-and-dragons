import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  _player1: Fighter;
  _player2: Fighter;

  constructor(
    player1: Fighter,
    player2: Fighter,
  ) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight() {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}