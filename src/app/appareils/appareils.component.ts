import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Appareil } from '../models/appareil';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  appareils!: Appareil[];
  isLoading = false;
  constructor(private service: AppareilService) {
    this.isLoading = true;
    this.service.chargerListAppareil()
      .subscribe((listAppareils) => {
        this.appareils = listAppareils;
        this.isLoading = false;
    })
  }

  onAllumerTout() {
    this.service.allumerTout();
  }

  onEteindreTout() {
    if (confirm("Voulez-vous vraiment tout éteindre ?")) {
      this.service.eteindreTout();
    }
  }

  ngOnInit(): void {
  }

}
