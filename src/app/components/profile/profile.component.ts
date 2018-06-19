import { Component, OnInit, Inject } from '@angular/core';
import { Upload } from '../../models/upload';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash'; // to help loop over files more succinctly
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuarioActual: User;
  usersRef: Observable<User>;

  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.authService.getCurrentUser()
      .then(user => {
        this.usersRef = this.authService.getUserByUid(user.uid).valueChanges();
        this.usersRef.subscribe(data => {
          this.usuarioActual = data;
          this.usuarioActual.uid = user.uid;
        });
      });
  }


  cambiarFoto() {
    let dialogRef = this.dialog.open(DialogUpdateAvatar, {
      width: '270px',
      data: { usuarioActual: this.usuarioActual }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El dialogo fue cerrado' + result);
    });
  }
}



@Component({
  selector: 'dialog-update-avatar',
  templateUrl: 'dialog-update-avatar.html',
})
export class DialogUpdateAvatar {

  files: FileList;
  upload: Upload;


  constructor(private uploadService: UploadService,
    public dialogRef: MatDialogRef<DialogUpdateAvatar>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


  handleFiles(event) {

    this.files = event.target.files;
    const filesToUpload = this.files;
    console.log(_.range(filesToUpload.length));
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.data.usuarioActual.uid, this.upload);
    });
  }

}