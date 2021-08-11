import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: '10/08/2021'},

      {  id: 2,
        name: 'Angular: Forms2',
        imageUrl: '',
        price: 99.00,
        code: 'XSS-7796',
        duration: 189,
        rating: 4.9,
        releaseDate: '10/09/2021'


      }
    ]

  }
}
