import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaConsultaComponent } from './components/agenda-consulta/agenda-consulta.component';
import { AgendaConsultaPageComponent } from './pages/agenda-consulta-page/agenda-consulta-page.component';
import { AvaliacaoPageComponent } from './pages/avaliacao-page/avaliacao-page.component';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { CartaoVirtualPageComponent } from './pages/cartao-virtual-page/cartao-virtual-page.component';
import { CarteiraVacinasPageComponent } from './pages/carteira-vacinas-page/carteira-vacinas-page.component';
import { ConsultasAgendadasPageComponent } from './pages/consultas-agendadas-page/consultas-agendadas-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotificacaoPageComponent } from './pages/notificacao-page/notificacao-page.component';
import { SuportePageComponent } from './pages/suporte-page/suporte-page.component';
import { VacinaCovidPageComponent } from './pages/vacina-covid-page/vacina-covid-page.component';

const routes: Routes = [ 
  {
    path: 'checkup-saude',
    children: [
      {
        path: '',
        component: LoginComponent
      }, 
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'agenda-consulta',
        component: AgendaConsultaPageComponent
      },
      {
        path: 'consultas-agendadas',
        component: ConsultasAgendadasPageComponent
      },
      {
        path: 'notificacao',
        component: NotificacaoPageComponent
      },
      {
        path: 'suporte',
        component: SuportePageComponent
      },
      {
        path: 'avaliacao',
        component: AvaliacaoPageComponent
      },
      {
        path: 'cartao-virtual',
        component: CartaoVirtualPageComponent
      },
    
      {
        path: 'carteira-vacinas',
        component: CarteiraVacinasPageComponent
      },
    
      {
        path: 'cadastro',
        component: CadastroPageComponent
      },
    
      {
        path: 'vacina-covid',
        component: VacinaCovidPageComponent
      }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
