import { CharactersService } from 'src/app/shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit {
  details: any;

  constructor(
    private CharactersService: CharactersService, 
    private route: ActivatedRoute
    ) {  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('El valor del parametro de ruta es: ' + id);
      this.CharactersService.getDetails(id).subscribe((res: any) => { this.details = res; });
    })
  }
}
