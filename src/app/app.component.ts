import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-dashboard';
  columns = [

  {

    field: 'id',

    header: 'ID'

  },

  {

    field: 'name',

    header: 'Name'

  },

  {

    field: 'email',

    header: 'Email'

  }

];
 
users = [

  {

    id: 1,

    name: 'John',

    email: 'john@test.com'

  },

  {

    id: 2,

    name: 'David',

    email: 'david@test.com'

  }

];
 



  // DIALOG
  visible: boolean = false;


  // FORM OBJECT
  userObj: any = {

    id: '',
    name: '',
    email: ''
  };


  // EDIT MODE
  isEdit: boolean = false;



  // OPEN ADD DIALOG
  openAddDialog() {

    this.visible = true;

    this.isEdit = false;

    this.userObj = {

      id: '',
      name: '',
      email: ''
    };
  }



  // SAVE USER
  saveUser() {

    if (this.isEdit) {

      // UPDATE

      this.users = this.users.map(user =>

        user.id === this.userObj.id

          ? { ...this.userObj }

          : user
      );

    } else {

      // CREATE

      this.userObj.id = this.users.length + 1;

      this.users = [

        ...this.users,

        { ...this.userObj }

      ];
    }

    this.visible = false;
  }



  // EDIT USER
  editUser(user: any) {

    this.visible = true;

    this.isEdit = true;

    this.userObj = { ...user };
  }



  // DELETE USER
  deleteUser(user: any) {

    const isConfirm = confirm(
      'Are you sure?'
    );

    if (isConfirm) {

      this.users = this.users.filter(

        u => u.id !== user.id
      );
    }
  }

} 





