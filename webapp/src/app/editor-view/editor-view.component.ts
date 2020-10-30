import {Component, OnInit} from '@angular/core';
import Quill from 'quill';
import {ImageHandler, Options} from 'ngx-quill-upload';

Quill.register('modules/imageHandler', ImageHandler);

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.component.html',
  styleUrls: ['./editor-view.component.scss']
})
export class EditorViewComponent implements OnInit {
  placeholder = 'Placeholder text';
  content: string;

  modules = {
    toolbar: [
      ['image']
    ],
    imageHandler: {
      upload: (file): Promise<string> => {
        // return your uploaded image URL as Promise<string>
        return new Promise((resolve, reject) => {
          // if (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg') { // File types supported for image
          //   if (file.size < 1000000) { // Customize file size as per requirement
          //
          //     // Sample API Call
          //     const uploadData = new FormData();
          //     uploadData.append('file', file, file.name);
          //
          //     return this.http.post('YOUR API URL', uploadData).toPromise()
          //       .then(result => {
          //         resolve(result.message.url); // RETURN IMAGE URL from response
          //       })
          //       .catch(error => {
          //         reject('Upload failed');
          //         // Handle error control
          //         console.error('Error:', error);
          //       });
          //   } else {
          //     reject('Size too large');
          //   }
          // } else {
          //   reject('Unsupported type');
          //   // Handle Unsupported type logic
          // }

          return resolve('http://www.foobar.com/myimage.png');
        });
      },
      accepts: ['png', 'jpg', 'jpeg', 'jfif'] // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
    } as Options,
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
