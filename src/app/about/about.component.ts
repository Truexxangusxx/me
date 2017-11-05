import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skills=[
  {habilidad:"FrontEnd: ", ejemplos:"HTML, CSS, JS ...", nivel: "Avanzado", porcentaje: "nivelavanzado2"}
  ,{habilidad:"BackEnd: ",ejemplos:"Java, Ruby, C#, php ...", nivel: "Experto", porcentaje: "nivelexperto1"}
  ,{habilidad:"Otros: ",ejemplos:"IBM WCM, SharePoint, Git ...", nivel: "Avanzado", porcentaje: "nivelavanzado1"}
  ]


  ngOnInit() {
  }


  download(){
    const doc =new jsPDF();
    doc.save('cv.pdf');
  }

}
