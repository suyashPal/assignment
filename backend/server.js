
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

transform(records: any, searchText: any): any {
 if(searchText == null) return records;

 return records.filter(function(category){
   return (category.lastName.toLowerCase().indexOf(searchText.toLowerCase())>-1)||(category.firstName.toLowerCase().indexOf(searchText.toLowerCase())>-1)||(category.id.toString().indexOf(searchText.toString())>-1)||(category.email.toLowerCase().indexOf(searchText.toLowerCase())>-1)||(category.isActive.toLowerCase().indexOf(searchText.toLowerCase())>-1)||(category.dateCreated.toLowerCase().indexOf(searchText.toLowerCase())>-1)||(category.dateUpdated.toLowerCase().indexOf(searchText.toLowerCase())>-1);
 })
  }

}