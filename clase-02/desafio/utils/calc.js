"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOper = exports.Operacion = void 0;
var Operacion = /** @class */ (function () {
    function Operacion(n1, n2, oper) {
        this.a = n1;
        this.b = n2;
        this.oper = oper;
    }
    Operacion.prototype.resultado = function () {
        switch (this.oper) {
            case "suma":
                return this.a + this.b;
                break;
            case "resta":
                return this.a - this.b;
                break;
            case "multiplicacion":
                return this.a * this.b;
                break;
            case "division":
                return this.a / this.b;
                break;
            default:
                console.log("No entendi la operacion: " + this.oper);
                break;
        }
    };
    return Operacion;
}());
exports.Operacion = Operacion;
var newOper = function (n1, n2, oper) {
    return new Operacion(n1, n2, oper);
};
exports.newOper = newOper;
