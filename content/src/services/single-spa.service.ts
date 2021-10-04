import { Injectable } from '@angular/core';
import { mountRootParcel, Parcel, ParcelConfig } from 'single-spa';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SingleSpaService {
  private loadedParcels: {
    [appName: string]: Parcel;
  } = {};

  // Quando chamada, esta função deve olhar para o URL para determinar a rota ativa e, em seguida,
  // criar elementos DOM
  // Link com maiores informações https://single-spa.js.org/docs/building-applications/
  mount(appName: string, domElement: HTMLElement): Observable<unknown> {
    return from(System.import<ParcelConfig>(appName)).pipe(
      tap((app: ParcelConfig) => {
        this.loadedParcels[appName] = mountRootParcel(app, {
          domElement
        });
      })
    );
  }

  // Quando chamada, esta função deve limpar todos os elementos DOM, ouvintes de eventos DOM,
  // memória perdida, globais, assinaturas observáveis, etc.
  unmount(appName: string): Observable<unknown> {
    return from(this.loadedParcels[appName].unmount()).pipe(
      tap(() => delete this.loadedParcels[appName])
    );
  }
}
