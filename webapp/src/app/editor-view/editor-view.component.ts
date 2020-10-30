import {Component, OnInit} from '@angular/core';
import {Options} from 'ngx-quill-upload';

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
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{header: 1}, {header: 2}],                       // custom button values
      [{list: 'ordered'}, {list: 'bullet'}],
      [{script: 'sub'}, {script: 'super'}],             // superscript/subscript
      [{indent: '-1'}, {indent: '+1'}],                 // outdent/indent
      [{direction: 'rtl'}],                             // text direction

      [{size: ['small', false, 'large', 'huge']}],      // custom dropdown
      [{header: [1, 2, 3, 4, 5, 6, false]}],

      [{color: []}, {background: []}],                  // dropdown with defaults from theme
      [{font: []}],
      [{align: []}],

      ['clean'],                                         // remove formatting button
      ['image']                                          // link and image, video
    ],
    imageHandler: {
      upload: (file: File): Promise<string> => {
        console.log('Upload handler invoked', file);
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
