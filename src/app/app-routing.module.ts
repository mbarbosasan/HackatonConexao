import { LoginComponent } from './login/login.component';
import { TableFrequenciaComponent } from './tableFrequencia/table-frequencia.component';
import { FrequenciaComponent } from './frequencia/frequencia.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "table", component: TableComponent},
  {path: "frequencia", component: FrequenciaComponent},
  {path: "frequencia-lista", component: TableFrequenciaComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
