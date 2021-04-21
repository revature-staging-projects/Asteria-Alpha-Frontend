import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from '../news-service.service';
import { Article } from '../Models/Article';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  news_articles: Article[] = []

  constructor(private news_service: NewsServiceService) { }

  ngOnInit(): void {
  }

  fetchNews = async () => {
    this.news_articles = await this.news_service.getNews();
  }

}
