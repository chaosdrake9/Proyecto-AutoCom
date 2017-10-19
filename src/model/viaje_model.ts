export class Viaje{
    id: string;
    costo: number;
    fecha: string;
    hora: string;
    lugaresDisponibles: number;
    pLlegada: string;
    pPartida: string;

    constructor(id: string, costo: number, fecha: string, hora: string, lugaresDisponibles: number, pLlegada: string, pPartida: string){
        this.id = id;
        this.costo = costo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugaresDisponibles = lugaresDisponibles;
        this.pLlegada = pLlegada;
        this.pPartida = pPartida;
    } 

    getid(): string {
        return this.id;
    }

    setid(id: string): void{
        this.id = id;
    } 

    getcosto(): number {
        return this.costo;
    }

    setcosto(costo: number): void{
        this.costo = costo;
    }

    getfecha(): string {
        return this.fecha;
    }

    setfecha(fecha: string): void{
        this.fecha = fecha;
    }

    gethora(): string{
        return this.hora;
    }
    sethora(hora: string): void{
         this.hora = hora;
    }

    getlugaresdisponibles(): number{
        return this.lugaresDisponibles;
    }

    setlugaresdisponibles(lugaresDisponibles: number): void{
        this.lugaresDisponibles = lugaresDisponibles;
    } 

    getpllegada(): string{
        return this.pLlegada;
    }

    setpllegada(pllegada: string): void{
        this.pLlegada = pllegada;
    }

    getppartida(): string{
        return this.pPartida;
    }

    setppartida(ppartida: string): void{
        this.pPartida = ppartida;
    }
 
}