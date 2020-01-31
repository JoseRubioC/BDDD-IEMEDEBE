"use strict";
exports.__esModule = true;
var Iemedebe = /** @class */ (function () {
    function Iemedebe(peliculas) {
        this.peliculas = peliculas;
    }
    Iemedebe.prototype.showIemedebe = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].showPropertys();
        }
    };
    return Iemedebe;
}());
exports.Iemedebe = Iemedebe;
