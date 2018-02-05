
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

transform(records: any, searchText: any): any {
 if(searchText == null) return records;

 return records.filter(function(category){
   return (category.name.toLowerCase().indexOf(searchText.toLowerCase())>-1);
 })
  }

}