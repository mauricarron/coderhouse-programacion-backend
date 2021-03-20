export class Operacion {
  protected a: number;
  protected b: number;
  protected oper: string;

  constructor(n1: number, n2: number, oper: string) {
    this.a = n1;
    this.b = n2;
    this.oper = oper;
  }

  public resultado() {
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
        console.log(`No entendi la operacion: ${this.oper}`);
        break;
    }
  }
}

export const newOper = (n1: number, n2: number, oper: string) => {
  return new Operacion(n1, n2, oper);
};
