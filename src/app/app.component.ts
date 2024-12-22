import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './services/contentful/contentful.service';
import { GetLandingPageQuery, LandingPage } from '../lib/__generated/sdk';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contentful_angularv18';
  data: GetLandingPageQuery | null = null;

  constructor (
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.getLandingPage()
  }

  private getLandingPage(): void {
    this.contentfulService.client.getLandingPage({
      // locale: ''
    })
    .then((response) => {
      console.log(response)
      this.data = response
    })
  }
}
