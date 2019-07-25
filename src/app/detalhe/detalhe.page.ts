import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
  }

}
