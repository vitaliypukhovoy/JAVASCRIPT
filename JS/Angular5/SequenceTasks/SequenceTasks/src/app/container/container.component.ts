import { Component, OnInit , Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { Service } from './../Service';
import {Task} from './../app.task'
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  _form : FormGroup;
  _error : any;
  _tasks :Array<Task>;
  tasks :any ;
  t : "any";

 public f_number :number;
 public f_task :string;
  _columns: string[] = ["number", "task"];
  columns: string[] = ["id", "title"];
  public _number: number;

  constructor(private _servise:Service,el: ElementRef, renderer: Renderer) {



    el.nativeElement.style.backgroundColor = 'yellow';

     this.tasks =
      [
        {
          number: 1,
          task: 'Lemon Candy'
        },
        {
          number: 2,
          task: 'Gum Person'
        },
        {
          number: 3,
          task: 'Flame Person'
        },
        {
          number: 4,
          task: 'Lumpy Space Person'
        },
      ];
    this.tasks.map(i=>i.isEditable = false);
  }

  public discussion: string = "Test string";
  public editable: boolean = false;

  dDiscussion(){
    console.log("delete");
  }

  eDiscussion(event: any){
    // on click this will set 'contentEditable' to true
    // and add 'editable' class for styling.
    this.editable = true;
  }

  uDiscussion(event: any){
    // on blur set 'contentEditable' to false
    // and remove class 'editable' and log new values
    this.editable = false;
    console.log("this.discussion");
    console.log(this.discussion);
  }

  public onHandleEvent(event: number) {
    this._number = event;
  }

  public onSHandleEvent(event: string) {
    let index = this.tasks.findIndex(x => x.number == this._number);


    if (event == "d")
      index > -1 ? this.tasks.splice(index, 1) : 0;
    else if (event == "h") {
      if (index - 1 >= 0) {
        let tmp = this.tasks[index];
        this.tasks[index] = this.tasks[index - 1];
        this.tasks[index - 1] = tmp;
      }
    }
    else if (event == "b") {
      if (index + 1 < this.tasks.length) {
        let tmp = this.tasks[index];
        this.tasks[index] = this.tasks[index + 1];
        this.tasks[index + 1] = tmp;
      }
    }
    else if(event == "p")
      {
        console.log(this.tasks);
     //   this.renderer.invokeElementMethod(
     //     this.el.nativeElement.ownerDocument.activeElement, 'focus');
        this.tasks.findIndex(x=> {if (x.number == this._number)
          x.isEditable = true;
        });
      }
  }

  onSave():void{
    this.tasks.map(i=>i.isEditable = false);
  }

  onAdd():void
  {
    this.tasks.push({number:this.f_number,task: this.f_task});
    console.log(this.tasks);
  }

  ngOnInit() {

    this._servise.getTasks()
      .subscribe(response => {this._tasks = response});

    this._form = new FormGroup({
      number : new FormControl('',
        [Validators.required,
          Validators.pattern('^[0-9]+$')
        ]),
      task : new FormControl('',
        [Validators.required,
          Validators.pattern('\\D*')
        ]),
    });

  }

  ngAfterViewInit() {
    // let inputField: HTMLElement = <HTMLElement>document.querySelectorAll('.focus')[0];
    // alert(inputField);
    // inputField.contentEditable = "true";
    // //inputField &&
    // inputField.focus();
  }


  ngOnChanges() {
    //if (changes['model'] && changes['model'].currentValue !== this.lastViewModel) {
     // this.lastViewModel = this.model;
      this.refreshView();
    }
 // }

  /** This should probably be debounced. */
  onKeyup() {
    // var value = this.elRef.nativeElement.innerText;
    // this.lastViewModel = value;
    // this.update.emit(value);
  }

  private refreshView() {
   // this.elRef.nativeElement.innerText = this.model
  }

  onSubmit(form: FormGroup){
   // alert(form);
   // console.log(form);
  }



}
