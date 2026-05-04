import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const minutesRemaining = minutes % 60;
    if (hours && minutesRemaining) {
      return `${ hours }h ${ minutesRemaining }min`;
    }

    if (hours) {
      return `${ hours }h`;
    }

    return `${ minutesRemaining }min`;
  }
}
