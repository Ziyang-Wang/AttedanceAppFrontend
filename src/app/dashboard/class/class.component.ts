import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../shared/services/home.service'
import { Student } from '../../shared/others/type'

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private home: HomeService) { }
  className: string = 'ClassName'
  id:number =0
  students:Student[] = [];

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"]
    if(this.id) {
      this.home.class(this.id).subscribe((data:Student[])=> { 
        this.students = data;
        this.className = this.students[0].className
      })
    }
  }
  
  back():void {
    history.go(-1)
  }
}
