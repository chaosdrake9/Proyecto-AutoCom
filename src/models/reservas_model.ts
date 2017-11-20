export class Reservas{
    id: string;
    lugares: number;
    pespera: string;

    constructor(id: string, lugares: number, pespera: string){
        this.id = id;
        this.lugares = lugares;
        this.pespera = pespera;

    } 
	
	constructor(){
        this.id = "";
        this.lugares = 0;
        this.pespera = "";
    } 

    getid(): string {
        return this.id;
    }

    setid(id: string): void{
        this.id = id;
    } 

    getlugares(): number {
        return this.lugares;
    }

    setlugares(lugares: number): void{
        this.lugares = lugares;
    }

    getpespera(): string {
        return this.pespera;
    }

    setpespera(pespera: string): void{
        this.pespera = pespera;
    }
}