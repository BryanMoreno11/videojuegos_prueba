import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-franquicia',
  templateUrl: './franquicia.component.html',
  styleUrls: ['./franquicia.component.css']
})
export class FranquiciaComponent implements OnInit {
  //variables
  franquicias:any=[];


  constructor(private franquicia_Service:ServicioService ){

  }

  ngOnInit(): void {

   this.listarFranquicias();
}

eliminarFranquicia(id_franquicia:string){
  this.franquicia_Service.deleteFranquicia(id_franquicia).subscribe(
    res=>{
      window.alert("Franquicia eliminada correctamente");
      this.listarFranquicias();
    },
    err=>{
      window.alert("Error al eliminar la franquicia");

    }

  )
}

listarFranquicias(){
  this.franquicia_Service.getFranquicias().subscribe(
    res=>{
      this.franquicias=res;
      console.log(this.franquicias);},
    err=>{console.log(err);}
   );
}

}
