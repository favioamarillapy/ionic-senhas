import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const IMAGE_API = environment.IMAGE_API;

@Pipe({
  name: 'urlImgSanitizer'
})
export class UrlImgSanitizerPipe implements PipeTransform {

  transform(url: any, servicio?: any): any {
    if (!servicio || servicio == '') return 'assets/images/image-placeholder.jpg';
    if (!url || url == '') return 'assets/images/image-placeholder.jpg';

    url = `${IMAGE_API}${url}`;
    url = url.replace('servicio', servicio);

    return url;
  }

}
