import { Coordinate } from "./coordinate.js";

export class Piece {
    constructor(IsWhite : boolean, CurrentPosition : Coordinate, Name : String) {
        this.IsWhite = IsWhite;
        this.CurrentPosition = CurrentPosition;
        this.Name = Name
    }
    
    IsWhite : boolean;
    HasBeenMoved : boolean = false;
    LegalMoves : Array<Coordinate> = [];
    CurrentPosition : Coordinate;
    Name : String;
    Moves : Array<any> = [];
}