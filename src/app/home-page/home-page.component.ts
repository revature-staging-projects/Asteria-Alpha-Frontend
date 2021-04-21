import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  news_articles: Article[] = []

  constructor(private news_service: NewsService) { }

  ngOnInit(): void {
  }

  fetchNews = async () => {
    this.news_articles = await this.news_service.getNews();
  }

}
