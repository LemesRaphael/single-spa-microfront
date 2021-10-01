import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgendaConsultaComponent } from './components/agenda-consulta/agenda-consulta.component';
import { AgendaVacinaComponent } from './components/agenda-vacina/agenda-vacina.component';
import { ConsultasAgendadasComponent } from './components/consultas-agendadas/consultas-agendadas.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoAtendimentoComponent } from './components/historico-atendimento/historico-atendimento.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NotificacaoComponent } from './components/notificacao/notificacao.component';
import { SuporteComponent } from './components/suporte/suporte.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AgendaConsultaPageComponent } from './pages/agenda-consulta-page/agenda-consulta-page.component';
import { VoltarComponent } from './components/voltar/voltar.component';
import { CarteiraVacinacaoComponent } from './components/carteira-vacinacao/carteira-vacinacao.component';
import { CartaoVirtualComponent } from './components/cartao-virtual/cartao-virtual.component';
import { AvaliacaoAtendimentoComponent } from './components/avaliacao-atendimento/avaliacao-atendimento.component';
import { ConsultasAgendadasPageComponent } from './pages/consultas-agendadas-page/consultas-agendadas-page.component';
import { NotificacaoPageComponent } from './pages/notificacao-page/notificacao-page.component';
import { SuportePageComponent } from './pages/suporte-page/suporte-page.component';
import { AvaliacaoPageComponent } from './pages/avaliacao-page/avaliacao-page.component';
import { CartaoVirtualPageComponent } from './pages/cartao-virtual-page/cartao-virtual-page.component';
import { CarteiraVacinasPageComponent } from './pages/carteira-vacinas-page/carteira-vacinas-page.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroPageComponent } from './pages/cadastro-page/cadastro-page.component';
import { CadastroService } from './components/cadastro/cadastro.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { VacinaCovidPageComponent } from './pages/vacina-covid-page/vacina-covid-page.component';
import { VacinaCovidComponent } from './components/vacina-covid/vacina-covid.component';
import { AlertComponent } from './components/alert/alert.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponentComponent,
    HomeComponent,
    HeaderComponent,
    AgendaConsultaComponent,
    SuporteComponent,
    NotificacaoComponent,
    AgendaVacinaComponent,
    ConsultasAgendadasComponent,
    HistoricoAtendimentoComponent,
    AgendaConsultaPageComponent,
    VoltarComponent,
    CarteiraVacinacaoComponent,
    CartaoVirtualComponent,
    AvaliacaoAtendimentoComponent,
    ConsultasAgendadasPageComponent,
    NotificacaoPageComponent,
    SuportePageComponent,
    AvaliacaoPageComponent,
    CartaoVirtualPageComponent,
    CarteiraVacinasPageComponent,
    CadastroComponent,
    CadastroPageComponent,
    VacinaCovidPageComponent,
    VacinaCovidComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfigFunction)
    ],
    entryComponents: [
      AlertComponent
    ],
    providers: [
      CadastroService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
