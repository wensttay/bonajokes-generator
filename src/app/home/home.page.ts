import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  piadas: any[];
  piada: any; 
  url = "/assets/praca.jpg"
  termoDeBusca = '';

  constructor(public alertController: AlertController, private jokesService: JokesService) {}

  ngOnInit() {
    this.filtraPiadas();
  }
  
  filtraPiadas() {
    this.jokesService.getAllJokes().subscribe(piadas => {
      if (this.termoDeBusca != undefined && this.termoDeBusca != null && this.termoDeBusca.trim() != '') {
        this.piadas = piadas.filter(p => { 
            if (p.pergunta.toLowerCase().match(this.termoDeBusca.trim().toLowerCase())
            || p.resposta.toLowerCase().match(this.termoDeBusca.trim().toLowerCase())) return p; 
        });
      } else {
        this.piadas = piadas;
      }
      this.piada = this.piadas[this.indexAleatorio(this.piadas)];
    });
  }

  
  exebirPiada() {
    this.presentAlert(this.piada);
    this.filtraPiadas();
  }
  
  indexAleatorio(piadas: any[]) {
    return Math.floor(Math.random() * piadas.length);
  }

  async presentAlert(piada: any) {
    const alert = await this.alertController.create({
      header: piada.pergunta,
      message: piada.resposta,
      buttons: ['OK']
    })

    await alert.present();
  }
}
