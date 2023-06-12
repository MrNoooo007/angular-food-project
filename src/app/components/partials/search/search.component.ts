import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = "";

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      // @ts-ignore
      if(params.searchTerm) {
        // @ts-ignore
        this.searchTerm = params.searchTerm;
      }
    })
  }

  search(term: string) {
    if(term) this.router.navigateByUrl('/search/' + term);
  }
}
