import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class MetodosAuxiliares {

    constructor(private router: Router) {}

    navegarTela(proxima_tela: string, tela_atual): void {
        this.router.navigate(['checkup-saude/' + proxima_tela]);
        this.setGlobalValue('voltar', 'checkup-saude/' + tela_atual);
    }

    voltar(): void {
        this.router.navigate([this.getGlobalValue('voltar')]);
    }

    getGlobalValue(value: string): string {
      return localStorage.getItem(value);
    }

    setGlobalValue(nome: string, value: string): void {
        localStorage.setItem(nome, value)
    }
}