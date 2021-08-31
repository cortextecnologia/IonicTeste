import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NasaApi } from '../model/nasa-api';
import { File } from '@ionic-native/file/ngx';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';




@Injectable({
  providedIn: 'root'
})
export class GetImageService {
  imageToShow: any;
  myURL: any

  constructor(
    private httpClient: HttpClient,
    private file: File,
    private transfer: FileTransfer,
    private downloader: Downloader,
    private http: HTTP) { }

  public getImagemNasa() {
    return this.httpClient.get<any>('https://api.nasa.gov/planetary/apod?api_key=v1hq9QBJCJ0KMFnCL9soFRgPWfbluwHXhJyrkTC2')
      .pipe(
        map(resp => {
          return resp
        }),
        catchError(err => {
          return throwError(err.error.error.message)
        })
      )
  }

  public async downloadImage(url: string) {
    var request: DownloadRequest = {
      uri: url,
      title: 'MyDownload',
      description: '',
      mimeType: '',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
        dirType: 'Downloads',
        subPath: 'imagem-nasa.jpg'
      }
    };


    this.downloader.download(request)
      .then((location: string) => console.log('File downloaded at:' + location))
      .catch((error: any) => console.error(error));
  }


}
