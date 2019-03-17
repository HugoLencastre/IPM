//Para adicionar ao Botoes.js


/*============================================================================================================

				Declaracao de variaveis


============================================================================================================*/


//Indice 0-palco1; Indice 1-palco 2; Indice 2-palco3
var listbandas=[[ "Linkin Park" , "30 Seconds To Mars" , "Muse" ], 
				[ "Metallica" , "Bon Jovi" , "Led Zeppelin"] , 
				["System Of A Down" , "Alice In Chains" , "Parkway Drive"]];

//Lista de Musicas do palco 1
var listmusicasp1b1=[["Numb","Meteora",2003] , ["Breaking The Habit","Meteora",2003],["Bleed It Out", "Minutes To Midnight" , 2007]];
var listmusicasp1b2=[[ "Closer To The Edge" , "This Is War" , 2007 ],[ "This Is War" , "This Is War" , 2007 ],[ "Hurricane" , "This Is War" , 2007 ]];
var listmusicasp1b3=[[ "Madness" , "The 2nd Law" , 2012 ] , [ "Uprising" , "The Resistance" , 2009 ] , [ "Resistance" , "The Resistance" , 2009 ]];

//Lista de Musicas do palco 2
var listmusicasp2b1=[[ "Nothing Else Matters" , "The Black Album" , 1991 ] , [ "Enter Sandman" , "The Black Album" , 1991 ] , [ "Master Of Puppets" , "Master Of Puppets" , 1986 ]];
var listmusicasp2b2=[[ "Bad Medicine" , "King of the Air Waves" , 1988 ] , [ "It's My Life" , "Crush" , 2000 ] , [ "Have A Nice Day" , "Have A Nice Day" , 2005 ]];
var listmusicasp2b3=[[ "Stairway To Heaven" , "Led Zeppelin IV" , 1971 ] , ["Rumble On" , "Led Zeppelin II" , 1969 ] , [ "Black Dog" , "Led Zeppelin IV" , 1971 ]];

//Lista de Musicas do palco 3
var listmusicasp3b1=[[ "Chop Suey!" , "Toxicity" , 2001 ] , ["Hypnotize" , "Hypnotize" , 205 ] , [ "Toxicity" , "Toxicity" , 2001 ]];
var listmusicasp3b2=[[ "Nutshell", "MTV Unplugged" , 1996 ] , [ "Stone" , "The Devil Put Dinosaurs Here" , 2013 ] , [ "Sea Of Sorrow" , "Facelift" , 1990 ]];
var listmusicasp3b3=[[ "Atlas" , "Atlas" , 2012 ] , [ "Wild Eyes" , "Atlas" , 2012 ] , [ "Frostbite" , "Horizons" , 2007 ]];

// Lista de favoritos
var listfavoritos=["Nenhum favorito adicionado",];

//Listas para localizacao
var listlocalizacaopalcos=[["Palco NOS", randomLoc(1,25)],["Palco Heineken", randomLoc(1,40)],["Palco Clubbing", randomLoc(1,37)]];//Lista de localizacao de palcos
var listamigos=["Jessica","Andre","Daniel"]; //Lista de amigos
var listWC=[["WCEste", randomLoc(1,50)],["WCOeste",randomLoc(1,50)],["WCSul",randomLoc(1,50)]];// Lista de WC
var listRestaurantes=[["O Barrigas", randomLoc(1,40),["Os Caracois", randomLoc(1,40)]];//Lista de restaurantes
var listDivertimentos=[["Spiner", randomLoc(1,30)],["Montanha Arabe", randomLoc(1,45)],["Roda Colossal", randomLoc(1,50)]];// Lista de divertimentos


function EscreveCenasBack(){
	var i;
	//Palco1Bandas
	if (ondeEstou>=25 && ondeEstou=<27){
		i = 27 - ondeEstou;
		ondeVou = 22;
		document.getElementById("gps").src=listbandas[i]];
	}
	//  Banda1Musicas
	if (ondeEstou>=34 && ondeEstou=<36){
		i = 36 - ondeEstou;
		ondeVou = 25;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda2Musicas
	if (ondeEstou>=37 && ondeEstou=<39){
		i = 39 - ondeEstou;
		ondeVou = 26;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda3Musicas
	if (ondeEstou>=40 && ondeEstou=<42){
		i = 42 - ondeEstou;
		ondeVou = 27;
		document.getElementById("gps").src=listbandas[i]];
	}
	//Palco2Bandas
	if (ondeEstou>=28 && ondeEstou=<30){
		i = 30 - ondeEstou;
		ondeVou = 23;
		document.getElementById("gps").src=listbandas[i]];
	}
	//  Banda1Musicas
	if (ondeEstou>=43 && ondeEstou=<45){
		i = 45 - ondeEstou;
		ondeVou = 28;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda2Musicas
	if (ondeEstou>=46 && ondeEstou=<48){
		i = 48 - ondeEstou;
		ondeVou = 29;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda3Musicas
	if (ondeEstou>=49 && ondeEstou=<51){
		i = 51 - ondeEstou;
		ondeVou = 30;
		document.getElementById("gps").src=listbandas[i]];
	}
	//Palco3Bandas
	if (ondeEstou>=31 && ondeEstou=<33){
		i = 33 - ondeEstou;
		ondeVou = 24;
		document.getElementById("gps").src=listbandas[i]];
	}
	//  Banda1Musicas
	if (ondeEstou>=52 && ondeEstou=<54){
		i = 54 - ondeEstou;
		ondeVou = 31;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda2Musicas
	if (ondeEstou>=55 && ondeEstou=<57){
		i = 57 - ondeEstou;
		ondeVou = 32;
		document.getElementById("gps").src=listbandas[i]];
	}
	//	Banda3Musicas
	if (ondeEstou>=58 && ondeEstou=<60){
		i = 60 - ondeEstou;
		ondeVou = 33;
		document.getElementById("gps").src=listbandas[i]];
	}
	ondeVou = listback[ondeEstou];
	document.getElementById("imagens").src=listimg[ondeVou];
}



var banda ;
var musica ;
var album ;
var data ;
var indice = 0 ;


/*============================================================================================================

				Funcoes


============================================================================================================*/
//Funcao que gera uma distancia randomly
function randomLoc(x,y){
	var numero=Math.floor(Math.random()* (y - x +1) + x);
	return numero;
}


//Selecctionar() if ondeEstou>=22 && ondeEstou<=24 || ondeEstou >= sitio onde vao ficar as imagens de info/partilha/adicionar
function SelectListas(){
	
	if (ondeEstou>=22 && ondeEstou<=24){
		
		if (ondeEstou == 22){
			indice = 0;
			ondeEstou=25;
		}
		else if (ondeEstou == 22){
			indice = 3;
			ondeEstou=28;
		}
		else if (ondeEstou == 22){
			indice = 6;
			ondeEstou=31;
		}
		document.getElementById("horas")=listbandas[indice];
		document.getElementById("imagens")=listimg[ondeEstou];
	}
	
	else if (ondeEstou >=25 && ondeEstou <=33){
		if (ondeEstou == 25){
			indice = 0;
			ondeEstou=34;
		}
		else if (ondeEstou == 26){
			indice = 3;
			ondeEstou=37;
		}
		else if (ondeEstou == 27){
			indice = 6;
			ondeEstou=40;
		}
		if (ondeEstou == 28){
			indice = 9;
			ondeEstou=43;
		}
		else if (ondeEstou == 29){
			indice = 12;
			ondeEstou=46;
		}
		else if (ondeEstou == 30){
			indice = 15;
			ondeEstou=49;
		}
		if (ondeEstou == 31){
			indice = 18;
			ondeEstou=52;
		}
		else if (ondeEstou == 32){
			indice = 21;
			ondeEstou=55;
		}
		else if (ondeEstou == 33){
			indice = 24;
			ondeEstou=58;
		}
		document.getElementById("horas")=listmusicas[indice];
		document.getElementById("imagens")=listimg[ondeEstou];
	}	
	
	else if (ondeEstou >=34 && ondeEstou <=60){
		document.getElementById("horas")='';
		banda = listbandas[indice/3];
		musica = listmusicas[indice];
		album = listalbuns[indice];
		data= listdatas[indice];
		document.getElementById("imagens")=listimg[500]; //indice para a imagem de info/partilha/adicionar
		ondeEstou = 500
	}
	
	else if (ondeEstou ==82){ //se escolher info
		document.getElementById("dados").innerHTML= banda+"<br>"+musica+"<br>"+album+"<br>"+data;
	}
	else if (ondeEstou ==501){ //se escolher partilha
		document.getElementById("imagens")=listimg[]; //tem a certeza? não 
		document.getElementById("imagens")=listimg[]; //tem a certeza? sim		
		document.getElementById("imagens")=listimg[90]; //partilhado com sucesso
	}
	else if (ondeEstou ==503){ //se escolher adicionar
		document.getElementById("imagens")=listimg[]; //tem a certeza? não 
		document.getElementById("imagens")=listimg[]; //tem a certeza? sim
		listfavoritos="banda: "+banda+"<br>Música= "+musica;
		document.getElementById("imagens")=listimg[91]; //adicionado com sucesso
	}
}

//Back() if ondeEstou>=25 && ondeEstou<=60
function BackListas(){
	
	if (ondeEstou >=25 && ondeEstou<=33){
		var img = document.getElementById("imagens");
		img.style.visibility = 'visible';
		
		if (ondeEstou>=25 && ondeEstou<=27){
			ondeEstou=22;
		}
		else if (ondeEstou>=28 && ondeEstou<=30){
			ondeEstou=23;
		}
		else if (ondeEstou>=31 && ondeEstou<=33){
			ondeEstou=24;
		}
		document.getElementById("horas").innerHTML = ''
		document.getElementById("imagens")=listimg[ondeEstou];
	}
	
	else if (ondeEstou >=34 && ondeEstou<=60){
		var img = document.getElementById("imagens");
		img.style.visibility = 'visible';
		document.getElementById("horas").innerHTML = ''	
		
		if (ondeEstou>=34 && ondeEstou<=36){
			indice=0;
			ondeEstou=25;
		}
		else if (ondeEstou>=37 && ondeEstou<=39){
			indice=1;
			ondeEstou=26;
		}
		else if (ondeEstou>=40 && ondeEstou<=42){
			indice=2;
			ondeEstou=27;
		}
		else if (ondeEstou>=43 && ondeEstou<=45){
			indice=3;
			ondeEstou=28;
		}
		else if (ondeEstou>=46 && ondeEstou<=48){
			indice=4;
			ondeEstou=29;
		}
		else if (ondeEstou>=49 && ondeEstou<=51){
			indice=5;
			ondeEstou=30;
		}
		else if (ondeEstou>=52 && ondeEstou<=54){
			indice=6;
			ondeEstou=31;
		}
		else if (ondeEstou>=55 && ondeEstou<=57){
			indice=7;
			ondeEstou=32;
		}
		else if (ondeEstou>=58 && ondeEstou<=60){
			indice=8;
			ondeEstou=33;
		}
		document.getElementById("horas").innerHTML = listbandas[indice];	
		document.getElementById("imagens")=listimg[ondeEstou]
	}

}

//dentro do Rodacima() if (ondeEstou>=25 && ondeEstou <=60)
//chamar RodaListasCima()	

function RodaListasCima(){
	//esconde a imagem para mostrar as informações escritas
	var img = document.getElementById("imagens");
	img.style.visibility = 'visible';
	if (ondeEstou >=25 && ondeEstou <=33){
		if (ondeEstou == 25){
			indice=8;
			ondeEstou = 33;
		}
		
		else {
			indice= indice-1;
			ondeEstou -= 1;
		}
		document.getElementById("horas")=listbandas[indice];
	}
	
	else if (ondeEstou >=34 && ondeEstou <=60){
		//sitio da lista de musicas da banda x
		if (ondeEstou == 34){
			indice=2;
			ondeEstou += 2;
		}
		else if (ondeEstou == 37){
			indice=5;
			ondeEstou += 2;
		}
		
		else if (ondeEstou == 40){
			indice=8;
			ondeEstou += 2;
		}
		
		else if (ondeEstou == 43){
			indice=11;
			ondeEstou +=2;
		}
		
		else if (ondeEstou == 46){
			indice=14;
			ondeEstou +=2;
		}
		
		else if (ondeEstou == 49){
			indice=17;
			ondeEstou+=2;
		}
		
		else if (ondeEstou == 51){
			indice=20;
			ondeEstou+=2;
		}
		
		else if (ondeEstou == 55){
			indice=23;
			ondeEstou+=2;
		}
		
		else if (ondeEstou == 58){
			indice=26;
			ondeEstou+=2;
		}
		
		else {
				indice= indice-1;
				ondeEstou -= 1;
		}
		document.getElementById("horas")=listmusicas[indice];
	}
	
	document.getElementById("imagens")=listimg[ondeEstou];
}

//dentro do Rodabaixo() if (ondeEstou>=25 && ondeEstou <=60)
//chamar RodaListasBaixo()

function RodaListasBaixo(){
	
	//esconde a imagem para mostrar as informações escritas
	var img = document.getElementById("imagens");
	img.style.visibility = 'visible';
	document.getElementById("imagens")=listimg[]
	
	if (ondeEstou >=25 && ondeEstou <=33){
		if (ondeEstou == 33){
			indice=0;
			ondeEstou = 25;
		}
		else{
			indice= indice+1;
			ondeEstou += 1;
		}
		document.getElementById("horas")=listbandas[indice];
	}
	
	else if (ondeEstou >=34 && ondeEstou <=60){
		//sitio da lista de musicas da banda x
		if (ondeEstou == 36){
			indice=0;
			ondeEstou -= 2;
		}
		else if (ondeEstou == 39){
			indice=3;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 42){
			indice=6;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 45){
			indice=9;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 48){
			indice=12;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 51){
			indice=15;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 54){
			indice=18;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 57){
			indice=21;
			ondeEstou -= 2
		}
		
		else if (ondeEstou == 60){
			indice=24;
			ondeEstou -= 2
		}
		
		else {
			indice= indice+1;
			ondeEstou += 1;
		}
		document.getElementById("horas")=listmusicas[indice];
	}
	
	document.getElementById("imagens")=listimg[ondeEstou];
}

//========================================
//funcao de GPS

var distancia; //não mexer
var tempogps; // não mexer
var gpsondevou; // altera-se quando se quer procurar algo (aqui guardamos o que queremos procurar)


function iniciadistancia(){
	tempogps=setInterval(function(){distanciagps()},10);
}

//Funcao que para o relogio
function paradistancia(){
	clearInterval(tempogps);
	document.getElementById("Chegou").innerHTML = 'Chegou a<br>'+gpsondevou;
	document.getElementById("gps").innerHTML = "";
	ondeEstou=306;
	document.getElementById("imagens").src=listimg[306]; //imagem que diz chegou ao destino (gif)
}	

//imprime tempo para o ecra
function distanciagps() {
	if (distancia >= 1){
		var normal = 0.0139;
		distancia = distancia - normal;
		document.getElementById("Chegou").innerHTML = distancia+"m";
	}
	else {
		paradistancia();
	}
}



function GPS(){
	//imagens começam em 301 e vao até 305
	var indiceimagem = Math.floor(Math.random()*(5-1+1)+1);
	var distancia = Math.floor(Math.random()*(200-15+1)+15);
	
	ondeEstou=301; 
	document.getElementById("gps").innerHTML = gpsondevou;
	
	iniciadistancia();
	
	//vai mudar setas até ficarem no centro
	if (indiceimagem < 3){
		imagemactual=300+indiceimagem;
		while (indiceimagem < 3 ){
			document.getElementById("imagens").src=listimg[imagemactual];
			setTimeout(function(){ document.getElementById("imagens").src=listimg[imagemactual+1]; }, 500);
			indiceimagem = indiceimagem + 1;
		}
	}
	
	//vai mudar setas até ficarem no centro
	else if (indiceimagem > 3){
		imagemactual=300+indiceimagem;
		while (indiceimagem > 3 ){
			document.getElementById("imagens").src=listimg[imagemactual];
			setTimeout(function(){ document.getElementById("imagens").src=listimg[imagemactual-1]; }, 500);
			indiceimagem = indiceimagem - 1;
		}	
	}
	
	document.getElementById("imagens").src=listimg[303]; //imagem que aponta centro
}

var Nome="Jéssica";
var Idade=21;
var Peso=65;

function mostrarPerfil(){
	document.getElementById("dados").innerHTML="Nome: "+Nome+"\nIdade: "+Idade+"\nPeso: "+Peso+"kg"; 
}	