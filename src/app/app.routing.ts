import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'fruta', component: FrutaComponent},    
    {path: 'home',component: HomeComponent},
    {path: 'contacto',component: ContactoComponent},
    {path: '**', component: HomeComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);