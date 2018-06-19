import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as  firebase from 'firebase';
import { Upload } from '../models/upload';
import { GalleryImage } from '../models/gallery-image';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private basePath = '/uploads';
  private uploads: AngularFireList<GalleryImage[]>;

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFile(uid: string, upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      // three observers
      // 1.) state_changed observer
      (snapshot) => {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress);
      },
      // 2.) error observer
      (error) => {
        // upload failed
        console.log(error);
      },
      // 3.) success observer
      (): any => {

        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);

          upload.url = downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(uid, upload);
        });
      }
    );
  }
  private saveFileData(uid: string, upload: Upload) {
    const path = `users/${uid}`;
    const data = {
      avatar: upload.url
    };

    this.db.object(path).update(data);
    console.log('File saved!: ' + upload.url);
  }
}