//ESTA PARTE DE CODIGO CREA UN JSON CON TODOS LOS DATOS DE LAS TAREAS POR DIA
//DE UN USUARIO

var activity = document.getElementById("activity");
var titleChild = document.querySelectorAll("#activity h3");
var dlChild = document.querySelectorAll("#activity dl");
var arrayHours = [];
var obj = {};
var objDetail = {};
var infoObj = [];
var hoy = "2017-02-28";

var _isConsistent = (titleChild.length === dlChild.length) ? true : false;

if (titleChild && dlChild && _isConsistent){


	for (var i = 0; i < titleChild.length; i++) {

			obj = {
				"day": titleChild[i].innerHTML,
				"infoday": []
			}	


		for (var j = 0; j < dlChild[i].children.length; j+=2) {

			objDetail = {
				"nametask": dlChild[i].children[j].lastElementChild.innerHTML,
				"linkchangeissue": dlChild[i].children[j].lastElementChild.href,
				"timeresponsetask": dlChild[i].children[j].firstElementChild.innerHTML, 
				"description": dlChild[i].children[j+1].firstChild.innerHTML,
				"autor": dlChild[i].children[j+1].lastElementChild.innerHTML
			}

			obj["infoday"].push(objDetail);
		}

		arrayHours.push(obj);

	}

}

//ESTA PARTE DE CODIGO TRAE INFORMACION DE LA TAREA POR MEDIO DE UN GET

var request = new XMLHttpRequest();
var footer = document.getElementById("footer");
request.open('GET', 'http://redmine.phantasia.pe/issues/52558#change-156407', true);

request.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = this.responseText;
      console.log(data.indexOf('\n'));
      var doctype = "<!DOCTYPE html>\n";
	  data = data.substring(data.indexOf('\n')+1);
      data = doctype.concat(data);
	  footer.innerHTML = data;
	  //data.replace("<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">", );
    //var myobject = eval(data);
	  //console.log(myobject);
 	  //console.log(data);
      console.log(footer);
      var finishTime = footer.querySelectorAll("#change-156407");
      var finishTimeTxt = finishTime[0].firstElementChild.children[3].title;
      console.log(finishTime);
      var asignTime = finishTime[0].previousElementSibling;
      var asignTimeTxt = asignTime.children[0].children[3].title;
      //.children[0].children[3].title;
      //children[3].title;
      console.log(asignTime);
      console.log("Tiempo que fue asignado: "+asignTimeTxt);
      console.log("Tiempo que finalizo: "+finishTimeTxt);

    } else {
      // Error :(
    }
  }
};

request.send();
request = null;