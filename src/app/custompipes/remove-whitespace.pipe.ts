import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTrailingCharacter'
})
export class RemoveTrailingCharacterPipe implements PipeTransform {

  transform(value: string, args?: any[]): string {
    return value.replace("%27","")
  }

}
