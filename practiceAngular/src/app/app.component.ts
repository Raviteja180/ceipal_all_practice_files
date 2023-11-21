import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/services/sample.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data="raviteja is working on attributes"
  title = 'practiceAngular';
  public Editor:any = ClassicEditor;
  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'undo',
        'redo',
        '|',
        'alignment',
        'fontBackgroundColor',
        'fontColor',
        'fontSize',
        'highlight',
        'fontFamily',
        'horizontalLine'
      ]
    },
    placeholder:"write",
    mention: {
      feeds: [
        {
          marker: '@',
          feed: ['@Barney', '@Lily', '@Marshall', '@Robin', '@Ted'], //**these ones work just fine**
          minimumCharacters: 1
        }
      ]
    },
    language: 'es',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
    licenseKey: '',
  }
  constructor(private sr:SampleService){

  }
  ngOnInit(){
      
  }
  
  OnSubmit(f:any){
    console.log(f.form.controls.textarea.value);
    this.sr.formValues = { name : f.form.controls.first.value,textarea :  f.form.controls.textarea.value}
    this.sr.postData()
      .subscribe(res => {console.log(res)});
  }
  public onReady( Editor:any ) {
    Editor.ui.getEditableElement().parentElement.insertBefore(
      Editor.ui.view.toolbar.element,
      Editor.ui.getEditableElement()
    );
    
}

}
