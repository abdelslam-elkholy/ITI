export class LikesComponent {
  constructor(private _isSelected: boolean, private _likesCount: number) {}

  onClick() {
    this._likesCount += this._isSelected ? -1 : 1;
    this._isSelected = !this._isSelected;
  }

  get isSelected() {
    return this._isSelected;
  }

  get likesCount() {
    return this._likesCount;
  }
}
