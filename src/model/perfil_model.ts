export class Perfil{
    id: string;
    clave: string;
    fechacreacion: string;
    nombre: string;
	email: string;
	

    constructor(id: string, clave: string, fechacreacion: string, nombre: string, email: string){
        this.id = id;
        this.clave = clave;
        this.fechacreacion = fechacreacion;
        this.nombre = nombre;
        this.email = email;

    } 
	
	constructor(){
        this.id = "";
        this.clave = 0;
        this.fechacreacion = "";
        this.nombre = "";
        this.email = "";

    } 

    getid(): string {
        return this.id;
    }

    setid(id: string): void{
        this.id = id;
    } 

    getclave(): string {
        return this.clave;
    }

    setclave(clave: string): void{
        this.clave = clave;
    }

    getfechacreacion(): string {
        return this.fechacreacion;
    }

    setfechacreacion(fechacreacion: string): void{
        this.fechacreacion = fechacreacion;
    }

    getnombre(): string{
        return this.nombre;
    }
    setnombre(nombre: string): void{
         this.nombre = nombre;
    }

    getemail(): string{
        return this.email;
    }

    setemail(email: string): void{
        this.email = email;
    }
 
}