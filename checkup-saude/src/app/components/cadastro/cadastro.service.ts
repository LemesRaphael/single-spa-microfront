import { Injectable } from '@angular/core';
import { CepModel } from 'src/app/shared/models/cep.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url = 'https://viacep.com.br/ws/input_cep/json/'

  constructor(private httpService: HttpService) { }

  getCep(cep: string) {
    return this.httpService.get<CepModel>(this.url.replace('input_cep', cep));
   }
}
