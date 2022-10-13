import { HttpErrorResponse } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./styles/file-uploader.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FileUploader2Component implements OnInit {
  @Input() description: string =
    ' Up to 5 .jpeg, .png or .pdf files with a maximum weight of 5MB each.';
  @Input() url: string = './upload.php';
  @Input() attrAcept: string = '*';
  @Input() styleClass: string = '';
  @Input() method: 'post' | 'put' = 'post';
  @Input() typeTemplate: 'chip' | 'thumbnail' = 'thumbnail';
  @Input() severity: 'info' | 'danger' = 'info';
  @Input() isCarousel: boolean = false;
  @Input() multiple: boolean = true;
  @Input() auto: boolean = true;
  @Input() disabled: boolean = false;
  @Input() customUpload: boolean = false;
  @Input() thumbnailIsCircle: boolean = false;
  @Input() maxFileSize: number = 5000000;
  @Input() fileLimit: number = 100;
  @Input() uploadHandler: Function = () => {};

  @Output() emitOnSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnUpload: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnError: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnClear: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnProgress: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitOnSend: EventEmitter<any> = new EventEmitter<any>();

  file = new File(['sample'], 'sample.txt', { type: 'text/plain' });
  files: File[] = [this.file];
  reader = new FileReader();
  urls: SafeResourceUrl[] = [];
  error!: HttpErrorResponse;

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    if (this.isCarousel) {
      this.auto = true;
      this.description = '';
    }
  }

  onSend = (event: any) => {
    //console.log('onSelect', event);
    this.emitOnSend.emit(event);
  };

  onBeforeUpload = (event: any) => {
    //console.log('onBeforeUpload', event);
  };

  onSelect = (event: any) => {
    //console.log('onSelect', event);
    this.getImage(event.currentFiles);
    this.emitOnSelect.emit(event);
  };

  onUpload = (event: any) => {
    //console.log('onUpload', event);
    this.emitOnUpload.emit(event);
  };

  onError = (event: any) => {
    //console.log('onError', event);
    this.error = event.error;
    this.severity = 'danger';
    this.emitOnError.emit(event);
  };

  onClear = (event: any) => {
    //console.log('onClear', event);
    this.emitOnClear.emit(event);
    this.urls = [];
  };

  onRemove = (event: any) => {
    //console.log('onRemove', event);
    this.emitOnRemove.emit(event);
  };

  onProgress = (event: any) => {
    //console.log('onProgress', event);
    this.emitOnProgress.emit(event);
  };

  removeFile = (event: any, file: File, uploader: FileUpload) => {
    const index = uploader.files.indexOf(file);
    uploader.remove(event, index);
    this.getImage(uploader._files);
  };

  uploadClone = (uploader: FileUpload) => {
    uploader.upload();
  };

  cancelClone = (uploader: FileUpload) => {
    uploader.clear();
  };

  getSizeInMegaBytes(file: File) {
    return file ? file.size / 1000000 : 0;
  }

  getImage = (files: File[]) => {
    this.urls = [];
    files.map((file) => {
      var path = (window.URL || window.webkitURL).createObjectURL(file);
      this.urls = [
        ...this.urls,
        this.sanitizer.bypassSecurityTrustResourceUrl(path),
      ];
    });
  };
}
