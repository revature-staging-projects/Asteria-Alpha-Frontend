import { Injectable } from '@angular/core';
import { Article } from './Models/Article';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor() { }


  getNews(): Article[] {
    return [];

  }


}


