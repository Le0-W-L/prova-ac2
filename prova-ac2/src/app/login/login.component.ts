import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    this.usuarioService.getUsuario(this.email, this.senha).subscribe(
      (usuarios) => {
        if (usuarios.length > 0) {
          // Navegar para a rota principal
          this.router.navigate(['/principal']);
        } else {
          this.errorMessage = 'E-mail ou senha inválido!';
        }
      },
      (error) => {
        this.errorMessage = 'Erro ao conectar com o servidor!';
      }
    );
  }
}