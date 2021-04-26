import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { HomeService } from '../../shared/services/home.service'
import { LoginInfo, Student, Class, Mark} from '../../shared/others/type'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkLogin:boolean = false
  classId:number = 1
  loginInfo:LoginInfo = {
    userId: 0,
    role: 0
  }
  student: Student = {
    studentName: '',
    email: '',
    attRate: 0,
    className: '',
    id: 0,
    pid: 0
  }
  classes: Class[] = []
  error: boolean = false;

  constructor(private authService: AuthService, 
    private router: Router,
    private home: HomeService
    ) { 
    const navigation = this.router.getCurrentNavigation()
    if (navigation) {
       this.loginInfo = navigation.extras.state?.data.data as LoginInfo
    }
  }

  ngOnInit(): void {
    if(!this.loginInfo) {
      this.loginInfo = this.authService.Logged()
    }
    if(!this.loginInfo?.role) {
      this.getUserInfo()
    }else{
      this.home.classes().subscribe((data:Class[])=>this.classes = data)
    }
  }

  logout(): void{
    this.authService.logout()
  }

  mark(): void {
    let mark: Mark = {
      stId: this.student.id
    }
    this.home.mark(mark).subscribe((data)=>{
      if(!data.code){
        this.getUserInfo()
      }else{
        this.error = true
      }
    })
  }

  getUserInfo(){
    this.home.userInfo(this.loginInfo.userId).subscribe((data:Student)=>{
      this.student = data
    })
  }

}
