import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getYoutubeVideoInfo(urlVideo: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/info?url=${urlVideo}`);
  }

  downloadYoutubeVideo(urlVideo: string, formatVideo: any): Observable<any> {
    // const url = `${this.apiUrl}/download`;
    const url = this.apiUrl + '/download?url=' + urlVideo + '&format=' + formatVideo;
    const params = null;

    return this.http.post(url, params, {
      responseType: 'blob', // Define o tipo de resposta como Blob
      observe: 'response'   // Permite observar toda a resposta, incluindo cabeçalhos
    }).pipe(
      map((res: HttpResponse<Blob>) => {
        // Verifica se a resposta tem o tipo 'blob'
        if (res.body instanceof Blob) {
          // Cria um URL de objeto para o Blob
          const blobUrl = window.URL.createObjectURL(res.body);

          // Cria um elemento de link temporário
          const a = document.createElement('a');
          a.href = blobUrl;
          a.download = this.getFileNameFromHttpResponse(res); // Define o nome do arquivo para download
          document.body.appendChild(a); // Adiciona o elemento de link ao corpo do documento
          a.click(); // Simula o clique no elemento de link para iniciar o download
          document.body.removeChild(a); // Remove o elemento de link após o download

          // Limpa o URL do objeto após o download
          window.URL.revokeObjectURL(blobUrl);
        }
      })
    );
  }

  private getFileNameFromHttpResponse(response: HttpResponse<Blob>): any {
    // Obtém o nome do arquivo do cabeçalho Content-Disposition, se disponível
    console.log(response.headers)
    let filename = 'downloaded-file';
    const contentDispositionHeader = response.headers.get('content-disposition');
    if (contentDispositionHeader) {
      let filenameRegex: RegExpExecArray | null = null;

      // Verifica se há 'utf-8'' prefixado
      if (contentDispositionHeader.includes("utf-8''")) {
        const utfRegex = /filename\*=utf-8''([^;]+)/;
        filenameRegex = utfRegex.exec(contentDispositionHeader);
      } else {
        // Extrai o nome do arquivo sem 'utf-8''
        const oldRegex = /filename=['"]?([^'"\r\n]+)['"]?/;
        filenameRegex = oldRegex.exec(contentDispositionHeader);
      }

      if (filenameRegex && filenameRegex.length > 1) {
        filename = decodeURIComponent(filenameRegex[1]);
      }

      const lastHyphenIndex = filename.lastIndexOf('-');
      if (lastHyphenIndex !== -1) {
        filename = filename.substring(0, lastHyphenIndex) + '.' + filename.substring(lastHyphenIndex + 1);
      }

      return filename;
    }
  }
}
