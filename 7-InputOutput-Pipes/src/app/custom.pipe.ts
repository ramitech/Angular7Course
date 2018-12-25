import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
 // pure:false
})
export class CustomPipe implements PipeTransform {

  transform(value: any,cat): any {
    // let oddArray =[]
    // for(let x of value){
    //   if(x%2 != 0){
    //     oddArray.push(x)
    //   }
    // }
    
    // return oddArray;


    return(value.filter((item)=>item%2!=0 && item>3))
  }

}
