import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  
  searchText: string = "";
  characters: any;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(1, "");
    };

  getCharacters(page: number, text: string) {
    this.charactersService.getCharacters(page, text).subscribe((res:any) =>{
      console.log(res)
      this.characters = res.results;
    });
  }
}
