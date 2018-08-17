import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArticles'
})
export class SearchArticlesPipe implements PipeTransform {

  transform(input, searchTerm): any {
    return input.filter(eachItem => {
      return (
        eachItem['title'].toLowerCase().includes(searchTerm.toLowerCase()) || 
        eachItem['body'].toLowerCase().includes(searchTerm.toLowerCase())
      )
    });
  }

}
