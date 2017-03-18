import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sampleFilter'
})
export class SampleFilterPipe implements PipeTransform {
  transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.name.indexOf(query) > -1);
    }
    return array;
  }

}
