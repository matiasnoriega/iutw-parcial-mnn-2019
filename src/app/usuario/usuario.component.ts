import { Input, Component , OnInit} from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @input usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}