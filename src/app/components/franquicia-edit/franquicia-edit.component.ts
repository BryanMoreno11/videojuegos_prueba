import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicioService, Franquicia } from 'src/app/services/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-franquicia-edit',
  templateUrl: './franquicia-edit.component.html',
  styleUrls: ['./franquicia-edit.component.css']
})
export class FranquiciaEditComponent implements OnInit  {
  //variables
  edit:boolean=false;
  franquicia:Franquicia={
    id_franquicia:0,
    nombre_franquicia:""
  };
  //métodos
  insertarFranquicia(forma:NgForm){
    if(!forma.valid){
      window.alert("Ingrese bien los datos");
    }else{
      this.franquicia_service.insertFranquicia(this.franquicia).subscribe(
        res=>{
          console.log(res);
          window.alert("Ingrese éxitoso");
          this.router.navigate(['/franquicias']);
        },
        err=>{console.log(err);}
      );
    }
  }

  ngOnInit(): void {
    const params= this.activatedRoute.snapshot.params;
    let franquicia_aux:any=[];
    if(params["id"]){
      this.edit=true;
      this.franquicia_service.getFranquicia(params["id"]).subscribe(
        res=>{
          franquicia_aux=res;
          franquicia_aux=franquicia_aux[0];
          this.franquicia=franquicia_aux;
          console.log(this.franquicia);
        }
      );
          
    }
  }
  //métodos
  constructor(private franquicia_service:ServicioService, private router:Router, private activatedRoute:ActivatedRoute){
    
  }

  modificarFranquicia(){

    this.franquicia_service.updateFranquicia(this.franquicia.id_franquicia, this.franquicia).subscribe(
      res=>{
        window.alert("Franquicia modificada correctamente");
        this.router.navigate(['/franquicias']);

      },
      err=>{
        window.alert("Error en modificar la franquicia");
      }

    )

  }

 
 



}
