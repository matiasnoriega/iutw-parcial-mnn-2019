import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
	{
		path: 'usuarios', component: UsuariosComponent
	}
]

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
