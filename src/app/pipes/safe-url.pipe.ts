import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string | ArrayBuffer | null): SafeResourceUrl {
    if (url instanceof ArrayBuffer) {
      // Convert ArrayBuffer to a Blob URL if needed, though FileReader.readAsDataURL usually returns string
      const blob = new Blob([url], { type: 'application/pdf' });
      return this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url as string);
  }
}
