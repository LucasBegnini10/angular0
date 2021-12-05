
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro-jogo',
  templateUrl: './cadastro-jogo.component.html',
  styleUrls: ['./cadastro-jogo.component.css']
})
export class CadastroJogoComponent {

  exibir(){
    let id : string = (<HTMLInputElement>document.getElementById("inputId")).value; 

    if(id == ''){
      alert("Preencha o campo ID!");
    }else{
      alert("Você clicou em EXIBIR")
    }
    
  };
  cadastrar(){
    let id : string = (<HTMLInputElement>document.getElementById("inputId")).value; 
    let nome : string = (<HTMLInputElement>document.getElementById("inputNome")).value; 
    let tipo : string = (<HTMLInputElement>document.getElementById("inputTipo")).value; 
    let empresa : string = (<HTMLInputElement>document.getElementById("inputEmpresa")).value; 

    if(id == ""){
      alert('Preencha todos os campos!');
    }else if(nome ==""){
      alert('Preencha todos os campos!');
    }else if(tipo ==""){
      alert('Preencha todos os campos!');
    }else if(empresa == ""){
      alert('Preencha todos os campos!');
    }else{
      alert("Você clicou em CADASTRAR");
    }
    
  };
  atualizar(){
    let id : string = (<HTMLInputElement>document.getElementById("inputId")).value; 
    let nome : string = (<HTMLInputElement>document.getElementById("inputNome")).value; 
    let tipo : string = (<HTMLInputElement>document.getElementById("inputTipo")).value; 
    let empresa : string = (<HTMLInputElement>document.getElementById("inputEmpresa")).value; 
    
    if(id == ""){
      if(nome == ""){
        if(tipo == ""){
          if(empresa == ""){
            alert("Preencha pelo menos um campo para atualizar!");
          }else{
            alert("Você clicou em ATUALIZAR")
          }
        }else{
          alert("Você clicou em ATUALIZAR");
        }
      }else{
        alert("Você clicou em ATUALIZAR");
      }
    }else{
      alert("Você clicou em ATUALIZAR");
    }
    
  };
  apagar(){
    let id : string = (<HTMLInputElement>document.getElementById("inputId")).value; 

    if(id == ''){
      alert("Preencha o campo ID!");
    }else{
      alert("Você clicou em APAGAR")
    }
    
  };
}