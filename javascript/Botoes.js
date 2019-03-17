/*===========================================================================================================

		Declaracao de listas e variaveis

===========================================================================================================*/
//Lista de imagens/ecras
var listimg=[];


/*==================================Menu Principal===================================================*/
listimg[0]="./Background/blackscreen.png";
listimg[1]="";
listimg[2]="./Logos Principais/HTMLPrimeLogo.png";//Menu principal opcao 1
listimg[3]="./Logos Principais/CSSPrimeLogo.png";//Menu principal opcao 2
listimg[4]="./Logos Principais/JSPrimeLogo.png";//Menu principal opcao 3
listimg[5]="./Logos Principais/SecAppsPrimeLogo2tentativa.png";//Menu principal opcao 4
listimg[6]="./Logos Principais/SettingsPrimeLogo.png";//Menu principal opcao 5


/*==================================Saude===================================================*/

//Pulsacao e pressao arterial e glicose
listimg[7]="./Saude/PulsoLogo.png";//Pressao Arterial e pulsacao
listimg[8]="./Saude/GlicoseLogo.png";//Glicose

//Menu pulsaco e pressao arterial
listimg[9]="./Saude/NovaAnalise.png";//Analise-7
listimg[10]="./Saude/Historial.png";//Historial-7

//Menu glicose
listimg[11]="./Saude/NovaAnalise.png";//Analise-8
listimg[12]="./Saude/Historial.png";//Historial-8

//Confirmacao pulsacao e pressao arterial
listimg[13]="./Saude/ConfirmacaoPulsoNao.png";//Ecra de confirmacao Nao
listimg[14]="./Saude/ConfirmacaoPulsoSim.png";//Ecra de confirmacao Sim

//Confirmacao glicose
listimg[15]="./Saude/ConfirmacaoDiabetesNao.png";//Ecra de confirmacao com aviso(glicose) Nao
listimg[16]="./Saude/ConfirmacaoDiabetesSim.png";//Ecra de confirmacao com aviso(glicose) Sim


listimg[17]="";//Loading Pulsacao
listimg[18]="";//Valores Glicose


/*==================================Musica===================================================*/
//Palcos                       indices 22-24
//Bandas e musicas             indices 25-60
//Info das musicas             indices 350-376
//Ecras de Info/partilha/favs  indices 600-680
//Partilhado com sucesso, Ja adicionado e Adicionado com sucesso indices 597, 598 e 599


listimg[82]="./Musica/InfoSim.png";//INFO
listimg[19]="./Musica/AdicionarSim.png";//AdicionarFavorito
listimg[78]="./Musica/ConfirmacaoListaNao.png";//AdicionarFavoritosNao
listimg[79]="./Musica/ConfirmacaoListaSim.png";//AdicionarFavoritosSim
listimg[91]="./Musica/AdicionadoSucesso.png";//Adicionado aos Favoritos
listimg[75]="./Musica/PartilhaSim.png";//Partilha
listimg[76]="./Musica/ConfirmacaoPartilhaNao.png";//PartilhaNao
listimg[77]="./Musica/ConfirmacaoPartilhaSim.png";//PartilhaSim
listimg[90]="./Musica/PartilhadoSucesso.png";//Partilhado com Sucesso
listimg[21]="";//InfoBandas
listimg[103]="";//MusicasInfo
listimg[104]="";//MusicasPartilha
listimg[105]="";//MusicasAdicionar




//Palcos
listimg[22]="./Musica/Palcos/PalcoNOS.png";//Palco1
listimg[23]="./Musica/Palcos/PalcoHeineken.png";//Palco2
listimg[24]="./Musica/Palcos/PalcoClubbing.png";//Palco3

//Bandas Palco 1
listimg[25]="./Musica/Logos Bandas/LinkinParkBanda.png";//Banda1Palco1
listimg[26]="./Musica/Logos Bandas/30SecondsMars.png";//Banda2Palco1
listimg[27]="./Musica/Logos Bandas/Muse.png";//Banda3Palco1

//Bandas Palco 2
listimg[28]="./Musica/Logos Bandas/Metallica.png";//Banda1Palco2
listimg[29]="./Musica/Logos Bandas/BonJovi.png";//Banda2Palco2
listimg[30]="./Musica/Logos Bandas/LedZeppelin.png";//Banda3Palco2

//Bandas Palco 3
listimg[31]="./Musica/Logos Bandas/SOAD.png";//Banda1Palco3
listimg[32]="./Musica/Logos Bandas/AliceInChains.png";//Banda2Palco3
listimg[33]="./Musica/Logos Bandas/ParkwayDrive.png";//Banda3Palco3



//Musicas Linkin Park(25)
listimg[34]="./Musica/Linkin Park/BleedItOut.png";//Palco NOS Linkin Park 1
listimg[35]="./Musica/Linkin Park/BreakingTheHabit.png";//Palco NOS Linkin Park 2
listimg[36]="./Musica/Linkin Park/Numb.png";//Palco NOS Linkin Park 3

//Info Linkin Park
listimg[350]="./Musica/Linkin Park/BleedItOutInfo.png";//Palco NOS Linkin Park 1
listimg[351]="./Musica/Linkin Park/BreakingTheHabitInfo.png";//Palco NOS Linkin Park 2
listimg[352]="./Musica/Linkin Park/NumbInfo.png";//Palco NOS Linkin Park 3

//Musicas 30secs to Mars(26)
listimg[37]="./Musica/30secs/CloserToTheEdge.png";//Palco NOS 30secs 1
listimg[38]="./Musica/30secs/Hurricane.png";//Palco NOS 30secs 2
listimg[39]="./Musica/30secs/ThisIsWar.png";//Palco NOS 30secs 3

//Info 30secs
listimg[353]="./Musica/30secs/CloserToTheEdgeInfo.png";//Palco NOS 30secs 1
listimg[354]="./Musica/30secs/HurricaneInfo.png";//Palco NOS 30secs 2
listimg[355]="./Musica/30secs/ThisIsWarInfo.png";//Palco NOS 30secs 330 secs to Mars

//Musicas Muse(27)
listimg[40]="./Musica/Muse/Madness.png";//Palco NOS Muse 1
listimg[41]="./Musica/Muse/Resistance.png";//Palco NOS Muse 2
listimg[42]="./Musica/Muse/Uprising.png";//Palco NOS Muse 3

//Info Muse
listimg[356]="./Musica/Muse/MadnessInfo.png";//Palco NOS Muse 1
listimg[357]="./Musica/Muse/ResistanceInfo.png";//Palco NOS Muse 2
listimg[358]="./Musica/Muse/UprisingInfo.png";//Palco NOS Muse 3

//Musicas Metallica(28)
listimg[43]="./Musica/Metallica/EnterSandman.png";//Palco Heineken Metallica 1
listimg[44]="./Musica/Metallica/MasterOfPuppets.png";//Palco Heineken Metallica 2
listimg[45]="./Musica/Metallica/NothingElseMatters.png";//Palco Heineken Metallica 3

//Info Metallica
listimg[359]="./Musica/Metallica/EnterSandmanInfo.png";//Palco Heineken Metallica 1
listimg[360]="./Musica/Metallica/MasterOfPuppetsInfo.png";//Palco Heineken Metallica 2
listimg[361]="./Musica/Metallica/NothingElseMattersInfo.png";//Palco Heineken Metallica 3

//Musicas Bon Jovi(29)
listimg[46]="./Musica/Bon Jovi/HaveANiceDay.png";//Palco Heineken Bon Jovi 1
listimg[47]="./Musica/Bon Jovi/ItsMyLife.png";//Palco Heineken Bon Jovi 2
listimg[48]="./Musica/Bon Jovi/BadMedicine.png";//Palco Heineken Bon Jovi 3

//Info Bon Jovi
listimg[362]="./Musica/Bon Jovi/HaveANiceDayInfo.png";//Palco Heineken Bon Jovi 1
listimg[363]="./Musica/Bon Jovi/ItsMyLifeInfo.png";//Palco Heineken Bon Jovi 2
listimg[364]="./Musica/Bon Jovi/BadMedicineInfo.png";//Palco Heineken Bon Jovi 3

//Musicas Led Zeppelin(30)
listimg[49]="./Musica/Led Zeppelin/BlackDog.png";//Palco Heineken Led Zeppelin 1
listimg[50]="./Musica/Led Zeppelin/RumbleOn.png";//Palco Heineken Led Zeppelin 2
listimg[51]="./Musica/Led Zeppelin/StairwayToHeaven.png";//Palco Heineken Led Zeppelin 3

//Info Led Zeppelin
listimg[365]="./Musica/Led Zeppelin/BlackDogInfo.png";//Palco Heineken Led Zeppelin 1
listimg[366]="./Musica/Led Zeppelin/RumbleOnInfo.png";//Palco Heineken Led Zeppelin 2
listimg[367]="./Musica/Led Zeppelin/StairwayToHeavenInfo.png";//Palco Heineken Led Zeppelin 3

//Musicas SOAD(31)
listimg[52]="./Musica/SOAD/ChopSuey.png";//Palco Clubbing SOAD 1
listimg[53]="./Musica/SOAD/Hypnotize.png";//Palco Clubbing SOAD 2
listimg[54]="./Musica/SOAD/Toxicity.png";//Palco Clubbing SOAD 3

//Info SOAD
listimg[368]="./Musica/SOAD/ChopSueyInfo.png";//Palco Clubbing SOAD 1
listimg[369]="./Musica/SOAD/HypnotizeInfo.png";//Palco Clubbing SOAD 2
listimg[370]="./Musica/SOAD/ToxicityInfo.png";//Palco Clubbing SOAD 3

//Musicas Alice in Chains(32)
listimg[55]="./Musica/Alice in Chains/Nutshell.png";//Palco Clubbing Alice in Chains 1
listimg[56]="./Musica/Alice in Chains/SeaOfSorrow.png";//Palco Clubbing Alice in Chains 2
listimg[57]="./Musica/Alice in Chains/Stone.png";//Palco Clubbing Alice in Chains 3

//Info Alice in Chains
listimg[371]="./Musica/Alice in Chains/NutshellInfo.png";//Palco Clubbing Alice in Chains 1
listimg[372]="./Musica/Alice in Chains/SeaOfSorrowInfo.png";//Palco Clubbing Alice in Chains 2
listimg[373]="./Musica/Alice in Chains/StoneInfo.png";//Palco Clubbing Alice in Chains 3

//Musicas Parkway Drive(33)
listimg[58]="./Musica/Parkway Drive/Atlas.png";//Palco Clubbing Parkway Drive 1
listimg[59]="./Musica/Parkway Drive/Frostbite.png";//Palco Clubbing Parkway Drive 2
listimg[60]="./Musica/Parkway Drive/WildEyes.png";//Palco Clubbing Parkway Drive 3

//Info Parkway Drive
listimg[374]="./Musica/Parkway Drive/AtlasInfo.png";//Palco Clubbing Parkway Drive 1
listimg[375]="./Musica/Parkway Drive/FrostbiteInfo.png";//Palco Clubbing Parkway Drive 2
listimg[376]="./Musica/Parkway Drive/WildEyesInfo.png";//Palco Clubbing Parkway Drive 3


//Ecras de transicao das musicas

//Linkin Park
listimg[600]="./Musica/InfoSim.png";
listimg[601]="./Musica/PartilhaSim.png";
listimg[602]="./Musica/AdicionarSim.png";

listimg[603]="./Musica/InfoSim.png";
listimg[604]="./Musica/PartilhaSim.png";
listimg[605]="./Musica/AdicionarSim.png";

listimg[606]="./Musica/InfoSim.png";
listimg[607]="./Musica/PartilhaSim.png";
listimg[608]="./Musica/AdicionarSim.png";


//30secs
listimg[609]="./Musica/InfoSim.png";
listimg[610]="./Musica/PartilhaSim.png";
listimg[611]="./Musica/AdicionarSim.png";

listimg[612]="./Musica/InfoSim.png";
listimg[613]="./Musica/PartilhaSim.png";
listimg[614]="./Musica/AdicionarSim.png";

listimg[615]="./Musica/InfoSim.png";
listimg[616]="./Musica/PartilhaSim.png";
listimg[617]="./Musica/AdicionarSim.png";


//Muse
listimg[618]="./Musica/InfoSim.png";
listimg[619]="./Musica/PartilhaSim.png";
listimg[620]="./Musica/AdicionarSim.png";

listimg[621]="./Musica/InfoSim.png";
listimg[622]="./Musica/PartilhaSim.png";
listimg[623]="./Musica/AdicionarSim.png";

listimg[624]="./Musica/InfoSim.png";
listimg[625]="./Musica/PartilhaSim.png";
listimg[626]="./Musica/AdicionarSim.png";


//Metallica
listimg[627]="./Musica/InfoSim.png";
listimg[628]="./Musica/PartilhaSim.png";
listimg[629]="./Musica/AdicionarSim.png";

listimg[630]="./Musica/InfoSim.png";
listimg[631]="./Musica/PartilhaSim.png";
listimg[632]="./Musica/AdicionarSim.png";

listimg[633]="./Musica/InfoSim.png";
listimg[634]="./Musica/PartilhaSim.png";
listimg[635]="./Musica/AdicionarSim.png";


//Bon Jovi
listimg[636]="./Musica/InfoSim.png";
listimg[637]="./Musica/PartilhaSim.png";
listimg[638]="./Musica/AdicionarSim.png";

listimg[639]="./Musica/InfoSim.png";
listimg[640]="./Musica/PartilhaSim.png";
listimg[641]="./Musica/AdicionarSim.png";

listimg[642]="./Musica/InfoSim.png";
listimg[643]="./Musica/PartilhaSim.png";
listimg[644]="./Musica/AdicionarSim.png";


//Led Zeppelin
listimg[645]="./Musica/InfoSim.png";
listimg[646]="./Musica/PartilhaSim.png";
listimg[647]="./Musica/AdicionarSim.png";

listimg[648]="./Musica/InfoSim.png";
listimg[649]="./Musica/PartilhaSim.png";
listimg[650]="./Musica/AdicionarSim.png";

listimg[651]="./Musica/InfoSim.png";
listimg[652]="./Musica/PartilhaSim.png";
listimg[653]="./Musica/AdicionarSim.png";


//SOAD
listimg[654]="./Musica/InfoSim.png";
listimg[655]="./Musica/PartilhaSim.png";
listimg[656]="./Musica/AdicionarSim.png";

listimg[657]="./Musica/InfoSim.png";
listimg[658]="./Musica/PartilhaSim.png";
listimg[659]="./Musica/AdicionarSim.png";

listimg[660]="./Musica/InfoSim.png";
listimg[661]="./Musica/PartilhaSim.png";
listimg[662]="./Musica/AdicionarSim.png";

//Alice in Chains
listimg[663]="./Musica/InfoSim.png";
listimg[664]="./Musica/PartilhaSim.png";
listimg[665]="./Musica/AdicionarSim.png";

listimg[666]="./Musica/InfoSim.png";
listimg[667]="./Musica/PartilhaSim.png";
listimg[668]="./Musica/AdicionarSim.png";

listimg[669]="./Musica/InfoSim.png";
listimg[670]="./Musica/PartilhaSim.png";
listimg[671]="./Musica/AdicionarSim.png";

//Parkway Drive
listimg[672]="./Musica/InfoSim.png";
listimg[673]="./Musica/PartilhaSim.png";
listimg[674]="./Musica/AdicionarSim.png";

listimg[675]="./Musica/InfoSim.png";
listimg[676]="./Musica/PartilhaSim.png";
listimg[677]="./Musica/AdicionarSim.png";

listimg[678]="./Musica/InfoSim.png";
listimg[679]="./Musica/PartilhaSim.png";
listimg[680]="./Musica/AdicionarSim.png";

//Add and share
listimg[597]="./Musica/MusicaJaAdicionada.png";//Add gone wrong
listimg[598]="./Musica/AdicionadoSucesso.png";//Add
listimg[599]="./Musica/PartilhadoSucesso.png";//Share


/*==================================Localizacao===================================================*/
//Amigos indice 681-690


//Amigos
listimg[61]="./Localização/AmigosLogo.png";//Amigos
listimg[62]="./Localização/MenuListas.png";//ListadeAmigos

listimg[681]="./Localização/Amigos/AnaAmigo.png";
listimg[682]="./Localização/Amigos/DiogoAmigo.png";
listimg[683]="./Localização/Amigos/GoncaloAmigo.png";
listimg[684]="./Localização/Amigos/MadalenaAmigo.png";
listimg[685]="./Localização/Amigos/MariaAmigo.png";
listimg[686]="./Localização/Amigos/NadiaAmigo.png";
listimg[687]="./Localização/Amigos/RafaelAmigo.png";
listimg[688]="./Localização/Amigos/RicardoAmigo.png";
listimg[689]="./Localização/Amigos/RubenAmigo.png";
listimg[690]="./Localização/Amigos/TiagoAmigo.png";


//Pontos de Interesse
listimg[63]="./Localização/InteressesLogo.png";//PontosDeInteresse
listimg[64]="./Localização/PalcoLogo.png";//Palcos
listimg[65]="./Localização/DivertimentoLogo.png";//Diversoes
listimg[66]="./Localização/RestauracaoLogo.png";//Restaurantes
listimg[67]="./Localização/MerceariaLogo.png";//CentrosComerciais/Mercearias
listimg[68]="./Localização/WCLogo.png";//WC

//Palcos
listimg[98]="./Localização/MenuListas.png";//Lista dos Palcos
//Diversoes
listimg[99]="./Localização/MenuListas.png";//Lista dos Diversoes
//Restaurantes
listimg[100]="./Localização/MenuListas.png";//Lista dos Restaurantes
//Centros comerciais
listimg[101]="./Localização/MenuListas.png";//Lista dos CentrosComerciais
//WC
listimg[102]="./Localização/MenuListas.png";//Lista dos WC

//Direcao gps
listimg[301]="./Localização/GPS/setaesquerda.png";//Seta esquerda
listimg[302]="./Localização/GPS/bolaesquerda.png";//Bola esquerda
listimg[303]="./Localização/GPS/setacima.png";//Seta meio
listimg[304]="./Localização/GPS/boladireita.png";//Bola direita
listimg[305]="./Localização/GPS/setadireita.png";//Seta direita
listimg[306]="./Localização/GPS/ChegouDestino.gif";//GIF

//377-400
//Palcos
listimg[377]="./Localização/Palcos/PalcoNOS.png";//Palco Nos
listimg[378]="./Localização/Palcos/PalcoHeineken.png";//Palco Heineken
listimg[379]="./Localização/Palcos/PalcoClubbing.png";//Palco Clubbing

//Restaurantes
listimg[380]="./Localização/Restaurantes/OsCaracois.png";//Os Caracois
listimg[381]="./Localização/Restaurantes/OBarrigas.png";//O Barrigas
listimg[382]="./Localização/Restaurantes/AFresquinha.png";//A fresquinha

//Diversões
listimg[383]="./Localização/Divertimentos/Spiner.png";//Spinner
listimg[384]="./Localização/Divertimentos/MontanhaArabe.png";//Montanha Arabe
listimg[385]="./Localização/Divertimentos/RodaColossal.png";//Roda Colossal

//Supermercados

listimg[386]="./Localização/Supermercados/MariaMercearias.png";//Supermercado1
listimg[387]="./Localização/Supermercados/CantinhoDaRosa.png";//Supermercado2




/*==================================+APPS===================================================*/
//Lanterna
listimg[69]="./Logos Principais do menus Extra/LanternPrimeLogo.png";//Lanterna
listimg[151]="./Logos Principais do menus Extra/LanternPrimeLogoOff.png";//Lanterna Off
listimg[152]="./Logos Principais do menus Extra/LanternPrimeLogoOn.png";//Lanterna On
//Luminosidade
listimg[70]="./Logos Principais do menus Extra/LuminosidadePrimeLogo.png";//Luminosidade
listimg[92]="./Logos Principais do menus Extra/LuminosidadePrimeLogoALTA.png";//LuminosidadeAlta
listimg[93]="./Logos Principais do menus Extra/LuminosidadePrimeLogoMEDIA.png";//LuminosidadeMedia
listimg[94]="./Logos Principais do menus Extra/LuminosidadePrimeLogoBAIXA.png";//LuminosidadeBaixa
//Favs
listimg[71]="./Logos Principais do menus Extra/ListasPrimeLogo.png";//ListaDeFavoritos
listimg[83]="./Logos Principais do menus Extra/ListasAmigosLogo.png";//Lista de Amigos
listimg[84]="./Logos Principais do menus Extra/ListasLocaisLogo.png";//Lista de Musicas
//Remover dos favoritos
listimg[20]="";//RemoverFavoritos
listimg[80]="";//RemoverFavoritoNao
listimg[81]="";//RemoverFavoritoSim
listimg[85]="./Logos Principais do menus Extra/RemovidoSucesso.png";//Removido com Sucesso

listimg[500]="./Logos Principais do menus Extra/VerListas.png";//Ver lista de amigos
listimg[501]="./Logos Principais do menus Extra/AdicionarListas.png";//Adicionar Amigo a lista
listimg[502]="./Logos Principais do menus Extra/RemoverListas.png";//Remover amigo da lista

listimg[590]="./Logos Principais do menus Extra/AmigoSucesso.png";//Adicionado com sucesso
listimg[591]="./Logos Principais do menus Extra/AmigoJaAdicionado.png"; //Amigo ja adicionado

listimg[750]="./Logos Principais do menus Extra/AdicionarAmigo.png"; //Loading screen
listimg[751]="./Logos Principais do menus Extra/RemovidoSucesso.png"; //Remover amigos
listimg[752]="./Logos Principais do menus Extra/NenhumAmigoAdicionado.png"; //Forever alone
listimg[753]="./Logos Principais do menus Extra/NenhumaMusicaAdicionada.png"; //No music favs

/*==================================Definicoes===================================================*/

listimg[72]="./Logos Principais do menu Settings/ConectarPrimeLogo.png";//ConexaoSmartphone
listimg[97]="./Logos Principais do menu Settings/ConectadoSucesso.png";//Conectado com Sucesso
listimg[73]="./Logos Principais do menu Settings/PerfilPrimeLogo.png";//Perfil
listimg[86]="";//MostraPerfil
listimg[74]="./Logos Principais do menu Settings/TutorialPrimeLogo.png";//Tutorial
listimg[87]="./Logos Principais do menu Settings/tutorialHome.png";//Tutorial1
listimg[88]="./Logos Principais do menu Settings/tutorialBack.png";//Tutorial2
listimg[89]="./Logos Principais do menu Settings/tutorialSelect+Roda.png";//Tutorial3
listimg[130]="./Logos Principais do menu Settings/tutorialAlarme.png";//Tutorial4



listimg[200]="./Saude/Alarme.png";//Logo Alarme
listimg[201]="./Saude/ConfirmacaoAlarmeNao.png";//Ecra de confirmacao Nao
listimg[202]="./Saude/ConfirmacaoAlarmeSim.png";//Ecra de confirmacao Sim
listimg[203]="./Saude/AjudaACaminho.png";//confirmacao



//Listas do historico de analises
var listaHistorialPulso = ["Não existem análises realizadas"];//Lista do Historico de analises a pulsacao e pressao arterial
var listaHistorialGlicose = ["Não existem análises realizadas"];//Lista do Historico de analises a glicose

//listas para selecionar os ecras quando se carrega nos botoes

//----------------------------------------------------------------------------------------------------------------------------------------------
//
//                                                                  Lista de posicoes botao Back
//
//----------------------------------------------------------------------------------------------------------------------------------------------

var listback=[];

//Saude
listback[0]=0;//Bloqueio
listback[1]=1;//Desbloqueio
listback[2]=1;//Menu principal opcao 1
listback[3]=1;//Menu principal opcao 2
listback[4]=1;//Menu principal opcao 3
listback[5]=1;//Menu principal opcao 4
listback[6]=1;//Menu principal opcao 5
listback[7]=2;//Pressao Arterial e pulsacao
listback[8]=2;//Glicose
listback[9]=7;//Analise-7
listback[10]=7;//Historial-7
listback[11]=8;//Analise-8
listback[12]=8;//Historial-8
listback[13]=9;//Ecra de confirmacao Nao
listback[14]=9;//Ecra de confirmacao Sim
listback[15]=11;//Ecra de confirmacao com aviso(glicose) Nao
listback[16]=11;//Ecra de confirmacao com aviso(glicose) Sim
listback[17]=7;//Loading Pulsacao
listback[18]=8;//Valores Glicose


//Musica
listback[82]=5;//INFO
listback[19]=0;//AdicionarFavorito
listback[78]=19;//AdicionarFavoritosNao
listback[79]=19;//AdicionarFavoritosSim
listback[91]=79;//Adicionado aos Favoritos
listback[75]=4;//Partilha
listback[76]=75;//PartilhaNao
listback[77]=75;//PartilhaSim
listback[90]=77;//Partilhado com Sucesso
listback[21]=4;//InfoBandas
listback[103]=34;//MusicasInfo
listback[104]=34;//MusicasPartilha
listback[105]=34;//MusicasAdicionar

//Palcos, Bandas e musicas
listback[22]=4;//Palco1
listback[23]=4;//Palco2
listback[24]=4;//Palco3
listback[25]=22;//Banda1Palco1
listback[26]=22;//Banda2Palco1
listback[27]=22;//Banda3Palco1
listback[28]=23;//Banda1Palco2
listback[29]=23;//Banda2Palco2
listback[30]=23;//Banda3Palco2
listback[31]=24;//Banda1Palco3
listback[32]=24;//Banda2Palco3
listback[33]=24;//Banda3Palco3
listback[34]=25;//Musica1Banda1Palco1
listback[35]=25;//Musica2Banda1Palco1
listback[36]=25;//Musica3Banda1Palco1
listback[37]=26;//Musica1Banda2Palco1
listback[38]=26;//Musica2Banda2Palco1
listback[39]=26;//Musica3Banda2Palco1
listback[40]=27;//Musica1Banda3Palco1
listback[41]=27;//Musica2Banda3Palco1
listback[42]=27;//Musica3Banda3Palco1
listback[43]=28;//Musica1Banda1Palco2
listback[44]=28;//Musica2Banda1Palco2
listback[45]=28;//Musica3Banda1Palco2
listback[46]=29;//Musica1Banda2Palco2
listback[47]=29;//Musica2Banda2Palco2
listback[48]=29;//Musica3Banda2Palco2
listback[49]=30;//Musica1Banda3Palco2
listback[50]=30;//Musica2Banda3Palco2
listback[51]=30;//Musica3Banda3Palco2
listback[52]=31;//Musica1Banda1Palco3
listback[53]=31;//Musica2Banda1Palco3
listback[54]=31;//Musica3Banda1Palco3
listback[55]=32;//Musica1Banda2Palco3
listback[56]=32;//Musica2Banda2Palco3
listback[57]=32;//Musica3Banda2Palco3
listback[58]=33;//Musica1Banda3Palco3
listback[59]=33;//Musica2Banda3Palco3
listback[60]=33;//Musica3Banda3Palco3


//Indices que dao fuga para as musicas 34-60
listback[600]=34;
listback[601]=34;
listback[602]=34;

listback[603]=35;
listback[604]=35;
listback[605]=35;

listback[606]=36;
listback[607]=36;
listback[608]=36;

listback[609]=37;
listback[610]=37;
listback[611]=37;

listback[612]=38;
listback[613]=38;
listback[614]=38;

listback[615]=39;
listback[616]=39;
listback[617]=39;

listback[618]=40;
listback[619]=40;
listback[620]=40;

listback[621]=41;
listback[622]=41;
listback[623]=41;

listback[624]=42;
listback[625]=42;
listback[626]=42;

listback[627]=43;
listback[628]=43;
listback[629]=43;

listback[630]=44;
listback[631]=44;
listback[632]=44;

listback[633]=45;
listback[634]=45;
listback[635]=45;

listback[636]=46;
listback[637]=46;
listback[638]=46;

listback[639]=47;
listback[640]=47;
listback[641]=47;

listback[642]=48;
listback[643]=48;
listback[644]=48;

listback[645]=49;
listback[646]=49;
listback[647]=49;

listback[648]=50;
listback[649]=50;
listback[650]=50;

listback[651]=51;
listback[652]=51;
listback[653]=51;

listback[654]=52;
listback[655]=52;
listback[656]=52;

listback[657]=53;
listback[658]=53;
listback[659]=53;

listback[660]=54;
listback[661]=54;
listback[662]=54;

listback[663]=55;
listback[664]=55;
listback[665]=55;

listback[666]=56;
listback[667]=56;
listback[668]=56;

listback[669]=57;
listback[670]=57;
listback[671]=57;

listback[672]=58;
listback[673]=58;
listback[674]=58;

listback[675]=59;
listback[676]=59;
listback[677]=59;

listback[678]=60;
listback[679]=60;
listback[680]=60;

/*==========================================================*/

listback[350]=600;//InfoMusica1Banda1Palco1
listback[351]=603;//InfoMusica2Banda1Palco1
listback[352]=606;//InfoMusica3Banda1Palco1
listback[353]=609;//InfoMusica1Banda2Palco1
listback[354]=612;//InfoMusica2Banda2Palco1
listback[355]=615;//InfoMusica3Banda2Palco1
listback[356]=618;//InfoMusica1Banda3Palco1
listback[357]=621;//InfoMusica2Banda3Palco1
listback[358]=624;//InfoMusica3Banda3Palco1
listback[359]=627;//InfoMusica1Banda1Palco2
listback[360]=630;//InfoMusica2Banda1Palco2
listback[361]=633;//InfoMusica3Banda1Palco2
listback[362]=636;//InfoMusica1Banda2Palco2
listback[363]=639;//InfoMusica2Banda2Palco2
listback[364]=642;//InfoMusica3Banda2Palco2
listback[365]=645;//InfoMusica1Banda3Palco2
listback[366]=648;//InfoMusica2Banda3Palco2
listback[367]=651;//InfoMusica3Banda3Palco2
listback[368]=654;//InfoMusica1Banda1Palco3
listback[369]=657;//InfoMusica2Banda1Palco3
listback[370]=660;//InfoMusica3Banda1Palco3
listback[371]=663;//InfoMusica1Banda2Palco3
listback[372]=666;//InfoMusica2Banda2Palco3
listback[373]=669;//InfoMusica3Banda2Palco3
listback[374]=672;//InfoMusica1Banda3Palco3
listback[375]=675;//InfoMusica2Banda3Palco3
listback[376]=678;//InfoMusica3Banda3Palco3


//============================================================

//Localizaçao
listback[61]=3;//Amigos
listback[62]=61;//ListadeAmigos
listback[63]=3;//PontosDeInteresse
listback[64]=63;//Palcos
listback[65]=63;//Diversoes
listback[66]=63;//Restaurantes
listback[67]=63;//CentrosComerciais/Mercearias
listback[68]=63;//WC
listback[98]=64;//Lista dos Palcos
listback[99]=65;//Lista dos Diversoes
listback[100]=66;//Lista dos Restaurantes
listback[101]=67;//Lista dos CentrosComerciais
listback[102]=68;//Lista dos WC

//Amigos
listback[681]=61;
listback[682]=61;
listback[683]=61;
listback[684]=61;
listback[685]=61;
listback[686]=61;
listback[687]=61;
listback[688]=61;
listback[689]=61;
listback[690]=61;

listback[377]=64;//Palco1
listback[378]=64;//Palco2
listback[379]=64;//Palco3

listback[380]=66;//Restaurante 1
listback[381]=66;//Restaurante 2
listback[382]=66;//Restaurante 3

listback[383]=65;//Diversao1
listback[384]=65;//Diversao2
listback[385]=65;//Diversao3

listback[386]=67;//Supermercados1
listback[387]=67;//Supermercados2
listback[388]=67;//Supermercados3

//+APPS
listback[69]=5;//Lanterna
listback[151]=69;//Lanterna On
listback[152]=69;//Lanterna Off

listback[71]=5;//ListaDeFavoritos
listback[83]=71;//Lista de Amigos
listback[84]=71;//Lista de Locais
listback[20]=5;//RemoverFavoritos
listback[80]=5;//RemoverFavoritoNao
listback[81]=5;//RemoverFavoritoSim
listback[85]=81;//Removido com Sucesso

listback[500]=83;//Ver
listback[501]=83;//Adicionar
listback[502]=83;//Remover

listback[590]=501;
listback[591]=501;

//Definiçoes
listback[70]=6;//Luminosidade
listback[92]=70;//LuminosidadeAlta
listback[93]=70;//LuminosidadeMedia
listback[94]=70;//LuminosidadeBaixa

listback[72]=6;//ConexaoSmartphone
listback[95]=72;//ConectacaoNao
listback[96]=72;//ConectacaoSim
listback[97]=72;//Conectado com Sucesso
listback[73]=6;//Perfil
listback[86]=73;//MostraPerfil
listback[74]=6;//Tutorial
listback[87]=74;//Tutorial1
listback[88]=74;//Tutorial2
listback[89]=74;//Tutorial3
listback[130]=74;//Tutorial3

listback[751]=502;

listback[200]=2;
listback[201]=2;
listback[202]=2;

//----------------------------------------------------------------------------------------------------------------------------------------------
//
//                                                                  Lista de posicoes botao Select
//
//----------------------------------------------------------------------------------------------------------------------------------------------

var listselect=[];

//Saude
listselect[0]=0;
listselect[1]=2;
listselect[2]=7;//Menu principal opcao 1
listselect[3]=61;//Menu principal opcao 2
listselect[4]=22;//Menu principal opcao 3
listselect[5]=69;//Menu principal opcao 4
listselect[6]=70;//Menu principal opcao 5
listselect[7]=9;//Pressao Arterial e pulsacao
listselect[8]=11;//Glicose
listselect[9]=13;//Analise-7
listselect[10]=17;//Historial-7
listselect[11]=15;//Analise-8
listselect[12]=18;//Historial-8
listselect[13]=13;//Ecra de confirmacao Nao
listselect[14]=17;//Ecra de confirmacao Sim
listselect[15]=15;//Ecra de confirmacao com aviso(glicose) Nao
listselect[16]=18;//Ecra de confirmacao com aviso(glicose) Sim
listselect[17]=17;//Loading Pulsacao
listselect[18]=18;//Valores Glicose


//Musica
listselect[91]=91;//Adicionado aos Favoritos
listselect[78]=78;//AdicionarFavoritosNao
listselect[79]=92;//AdicionarFavoritosSim
listselect[75]=76;//Partilha
listselect[76]=76;//PartilhaNao
listselect[77]=91;//PartilhaSim
listselect[90]=90;//Partilhado com Sucesso
listselect[21]=82;//InfoBandas
listselect[82]=82;//INFO
listselect[103]=103;//MusicasInfo
listselect[104]=104;//MusicasPartilha
listselect[105]=105;//MusicasAdicionar
listselect[22]=25;//Palco1
listselect[23]=28;//Palco2
listselect[24]=31;//Palco3
listselect[25]=34;//Banda1Palco1
listselect[26]=37;//Banda2Palco1
listselect[27]=40;//Banda3Palco1
listselect[28]=43;//Banda1Palco2
listselect[29]=46;//Banda2Palco2
listselect[30]=49;//Banda3Palco2
listselect[31]=52;//Banda1Palco3
listselect[32]=55;//Banda2Palco3
listselect[33]=58;//Banda3Palco3
listselect[34]=600;//Musica1Banda1Palco1
listselect[35]=603;//Musica2Banda1Palco1
listselect[36]=606;//Musica3Banda1Palco1
listselect[37]=609;//Musica1Banda2Palco1
listselect[38]=612;//Musica2Banda2Palco1
listselect[39]=615;//Musica3Banda2Palco1
listselect[40]=618;//Musica1Banda3Palco1
listselect[41]=621;//Musica2Banda3Palco1
listselect[42]=624;//Musica3Banda3Palco1
listselect[43]=627;//Musica1Banda1Palco2
listselect[44]=630;//Musica2Banda1Palco2
listselect[45]=633;//Musica3Banda1Palco2
listselect[46]=636;//Musica1Banda2Palco2
listselect[47]=639;//Musica2Banda2Palco2
listselect[48]=642;//Musica3Banda2Palco2
listselect[49]=645;//Musica1Banda3Palco2
listselect[50]=648;//Musica2Banda3Palco2
listselect[51]=651;//Musica3Banda3Palco2
listselect[52]=654;//Musica1Banda1Palco3
listselect[53]=657;//Musica2Banda1Palco3
listselect[54]=660;//Musica3Banda1Palco3
listselect[55]=663;//Musica1Banda2Palco3
listselect[56]=666;//Musica2Banda2Palco3
listselect[57]=669;//Musica3Banda2Palco3
listselect[58]=672;//Musica1Banda3Palco3
listselect[59]=675;//Musica2Banda3Palco3
listselect[60]=678;//Musica3Banda3Palco3

listselect[600]=350;//InfoMusica1Banda1Palco1
listselect[603]=351;//InfoMusica2Banda1Palco1
listselect[606]=352;//InfoMusica3Banda1Palco1
listselect[609]=353;//InfoMusica1Banda2Palco1
listselect[612]=354;//InfoMusica2Banda2Palco1
listselect[615]=355;//InfoMusica3Banda2Palco1
listselect[618]=356;//InfoMusica1Banda3Palco1
listselect[621]=357;//InfoMusica2Banda3Palco1
listselect[624]=358;//InfoMusica3Banda3Palco1
listselect[627]=359;//InfoMusica1Banda1Palco2
listselect[630]=360;//InfoMusica2Banda1Palco2
listselect[633]=361;//InfoMusica3Banda1Palco2
listselect[636]=362;//InfoMusica1Banda2Palco2
listselect[639]=363;//InfoMusica2Banda2Palco2
listselect[642]=364;//InfoMusica3Banda2Palco2
listselect[645]=365;//InfoMusica1Banda3Palco2
listselect[648]=366;//InfoMusica2Banda3Palco2
listselect[651]=367;//InfoMusica3Banda3Palco2
listselect[654]=368;//InfoMusica1Banda1Palco3
listselect[657]=369;//InfoMusica2Banda1Palco3
listselect[660]=370;//InfoMusica3Banda1Palco3
listselect[663]=371;//InfoMusica1Banda2Palco3
listselect[666]=372;//InfoMusica2Banda2Palco3
listselect[669]=373;//InfoMusica3Banda2Palco3
listselect[672]=374;//InfoMusica1Banda3Palco3
listselect[675]=375;//InfoMusica2Banda3Palco3
listselect[678]=376;//InfoMusica3Banda3Palco3

//Localizaçao
listselect[61]=681;//Amigos
listselect[62]="";//ListadeAmigos
listselect[63]=64;//PontosDeInteresse
listselect[64]=377;//Palcos
listselect[65]=383;//Diversoes
listselect[66]=380;//Restaurantes
listselect[67]=386;//CentrosComerciais/Mercearias
listselect[68]="";//WC
listselect[98]=98;//Lista dos Palcos
listselect[99]=99;//Lista dos Diversoes
listselect[100]=100;//Lista dos Restaurantes
listselect[101]=101;//Lista dos CentrosComerciais


//Amigos Loc

//+APPS
listselect[69]=151;//Lanterna
listselect[151]=69;//Lanterna On
listselect[152]=69;//Lanterna Off
listselect[70]=93;//Luminosidade
listselect[92]=92;//LuminosidadeAlta
listselect[93]=93;//LuminosidadeMedia
listselect[94]=94;//LuminosidadeBaixa
listselect[71]=83;//ListaDeFavoritos
listselect[83]=500;//Lista de Amigos
listselect[84]=84;//Lista de Musicas
listselect[20]=80;//RemoverFavoritos
listselect[80]=80;//RemoverFavoritoNao
listselect[81]=81;//RemoverFavoritoSim
listselect[85]=85;//Removido com Sucesso

//Definiçoes
listselect[72]=97;//ConexaoSmartphone
listselect[95]=72;//ConectacaoNao
listselect[96]=97;//ConectacaoSim
listselect[97]=97;//Conectado com Sucesso
listselect[73]=86;//Perfil
listselect[86]=86;//MostraPerfil
listselect[74]=87;//Tutorial
listselect[87]=87;//Tutorial1
listselect[88]=88;//Tutorial2
listselect[89]=89;//Tutorial3
listselect[130]=130;//Tutorial4

listselect[200]=201;
listselect[201]=2;
listselect[202]=203;

//----------------------------------------------------------------------------------------------------------------------------------------------
//
//                                                                  Lista de posicoes botao Cima
//
//----------------------------------------------------------------------------------------------------------------------------------------------

var listcima=[];

//Saude
listcima[0]=0;
listcima[1]=0;
listcima[2]=6;//Menu principal opcao 1
listcima[3]=2;//Menu principal opcao 2
listcima[4]=3;//Menu principal opcao 3
listcima[5]=4;//Menu principal opcao 4
listcima[6]=5;//Menu principal opcao 5
listcima[7]=8;//Pressao Arterial e pulsacao
listcima[8]=7;//Glicose
listcima[9]=10;//Analise-7
listcima[10]=9;//Historial-7
listcima[11]=12;//Analise-8
listcima[12]=11;//Historial-8
listcima[13]=14;//Ecra de confirmacao Nao
listcima[14]=13//Ecra de confirmacao Sim
listcima[15]=16;//Ecra de confirmacao com aviso(glicose) Nao
listcima[16]=15;//Ecra de confirmacao com aviso(glicose) Sim
listcima[17]=17;//Loading Pulsacao
listcima[18]=18;//Valores Glicose


//Musica
listcima[19]=19;//AdicionarFavorito
listcima[78]=79;//AdicionarFavoritosNao
listcima[79]=78;//AdicionarFavoritosSim
listcima[91]=91;//Adicionado aos Favoritos
listcima[75]=75;//Partilha
listcima[76]=77;//PartilhaNao
listcima[77]=76;//PartilhaSim
listcima[90]=90;//Partilhado com Sucesso
listcima[21]=21;//InfoBandas
listcima[82]=82;//INFO
listcima[103]=105;//MusicasInfo
listcima[104]=103;//MusicasPartilha
listcima[105]=104;//MusicasAdicionar
listcima[22]=24;//Palco1
listcima[23]=22;//Palco2
listcima[24]=23;//Palco3
listcima[25]=27;//Banda1Palco1
listcima[26]=25;//Banda2Palco1
listcima[27]=26;//Banda3Palco1
listcima[28]=30;//Banda1Palco2
listcima[29]=28;//Banda2Palco2
listcima[30]=29;//Banda3Palco2
listcima[31]=33;//Banda1Palco3
listcima[32]=31;//Banda2Palco3
listcima[33]=32;//Banda3Palco3
listcima[34]=36;//Musica1Banda1Palco1
listcima[35]=34;//Musica2Banda1Palco1
listcima[36]=35;//Musica3Banda1Palco1
listcima[37]=39;//Musica1Banda2Palco1
listcima[38]=37;//Musica2Banda2Palco1
listcima[39]=38;//Musica3Banda2Palco1
listcima[40]=42;//Musica1Banda3Palco1
listcima[41]=40;//Musica2Banda3Palco1
listcima[42]=41;//Musica3Banda3Palco1
listcima[43]=45;//Musica1Banda1Palco2
listcima[44]=43;//Musica2Banda1Palco2
listcima[45]=44;//Musica3Banda1Palco2
listcima[46]=48;//Musica1Banda2Palco2
listcima[47]=46;//Musica2Banda2Palco2
listcima[48]=47;//Musica3Banda2Palco2
listcima[49]=51;//Musica1Banda3Palco2
listcima[50]=49;//Musica2Banda3Palco2
listcima[51]=50;//Musica3Banda3Palco2
listcima[52]=54;//Musica1Banda1Palco3
listcima[53]=52;//Musica2Banda1Palco3
listcima[54]=53;//Musica3Banda1Palco3
listcima[55]=57;//Musica1Banda2Palco3
listcima[56]=55;//Musica2Banda2Palco3
listcima[57]=56;//Musica3Banda2Palco3
listcima[58]=60;//Musica1Banda3Palco3
listcima[59]=58;//Musica2Banda3Palco3
listcima[60]=59;//Musica3Banda3Palco3


//Percorrem o menu de transicao das musicas (Info, share e add) 600-680
listcima[600]=602;
listcima[601]=600;
listcima[602]=601;

listcima[603]=605;
listcima[604]=603;
listcima[605]=604;

listcima[606]=608;
listcima[607]=606;
listcima[608]=607;

listcima[609]=611;
listcima[610]=609;
listcima[611]=610;

listcima[612]=614;
listcima[613]=612;
listcima[614]=613;

listcima[615]=617;
listcima[616]=615;
listcima[617]=616;

listcima[618]=620;
listcima[619]=618;
listcima[620]=619;

listcima[621]=623;
listcima[622]=621;
listcima[623]=622;

listcima[624]=626;
listcima[625]=624;
listcima[626]=625;

listcima[627]=629;
listcima[628]=627;
listcima[629]=628;

listcima[630]=632;
listcima[631]=630;
listcima[632]=631;

listcima[633]=635;
listcima[634]=633;
listcima[635]=634;

listcima[636]=638;
listcima[637]=636;
listcima[638]=637;

listcima[639]=641;
listcima[640]=639;
listcima[641]=640;

listcima[642]=644;
listcima[643]=642;
listcima[644]=643;

listcima[645]=647;
listcima[646]=645;
listcima[647]=646;

listcima[648]=650;
listcima[649]=648;
listcima[650]=649;

listcima[651]=653;
listcima[652]=651;
listcima[653]=652;

listcima[654]=656;
listcima[655]=654;
listcima[656]=655;

listcima[657]=659;
listcima[658]=657;
listcima[659]=658;

listcima[660]=662;
listcima[661]=660;
listcima[662]=661;

listcima[663]=665;
listcima[664]=663;
listcima[665]=664;

listcima[666]=668;
listcima[667]=666;
listcima[668]=667;

listcima[669]=671;
listcima[670]=669;
listcima[671]=670;

listcima[672]=674;
listcima[673]=672;
listcima[674]=673;

listcima[675]=677;
listcima[676]=675;
listcima[677]=676;

listcima[678]=680;
listcima[679]=678;
listcima[680]=679;


//Localizaçao
listcima[61]=63;//Amigos
listcima[62]=62;//ListadeAmigos
listcima[63]=61;//PontosDeInteresse
listcima[64]=68;//Palcos
listcima[65]=64;//Diversoes
listcima[66]=65;//Restaurantes
listcima[67]=66;//CentrosComerciais/Mercearias
listcima[68]=67;//WC
listcima[98]=102;//Lista dos Palcos
listcima[99]=98;//Lista dos Diversoes
listcima[100]=99;//Lista dos Restaurantes
listcima[101]=100;//Lista dos CentrosComerciais
listcima[102]=101;//Lista dos WC
//Amigos
listcima[681]=690;
listcima[682]=681;
listcima[683]=682;
listcima[684]=683;
listcima[685]=684;
listcima[686]=685;
listcima[687]=686;
listcima[688]=687;
listcima[689]=688;
listcima[690]=689;
//Palcos
listcima[377]=379;
listcima[378]=377;
listcima[379]=378;
//Restaurantes
listcima[380]=382;
listcima[381]=380;
listcima[382]=381;
//Divertimentos/
listcima[383]=385;
listcima[384]=383;
listcima[385]=384;
//Supermercados
listcima[386]=387;
listcima[387]=386;



//+APPS
listcima[69]=71;//Lanterna
listcima[151]=152;//Lanterna On
listcima[152]=151;//Lanterna Off

listcima[71]=69;//ListaDeFavoritos
listcima[83]=84;//Lista de Amigos
listcima[84]=83;//Lista de Locais
listcima[20]=71;//RemoverFavoritos
listcima[80]=81;//RemoverFavoritoNao
listcima[81]=80;//RemoverFavoritoSim
listcima[85]=85;//Removido com Sucesso

listcima[500]=502;
listcima[501]=500;
listcima[502]=501;

//Definiçoes
listcima[70]=74;//Luminosidade
listcima[92]=94;//LuminosidadeAlta
listcima[93]=92;//LuminosidadeMedia
listcima[94]=93;//LuminosidadeBaixa

listcima[72]=70;//ConexaoSmartphone
listcima[95]=96;//ConectacaoNao
listcima[96]=95;//ConectacaoSim
listcima[97]=97;//Conectado com Sucesso
listcima[73]=72;//Perfil
listcima[86]=86;//MostraPerfil
listcima[74]=73;//Tutorial
listcima[87]=130;//Tutorial1
listcima[88]=87;//Tutorial2
listcima[89]=88;//Tutorial3
listcima[130]=89;//Tutorial4


listcima[201]=202;
listcima[202]=201;

//----------------------------------------------------------------------------------------------------------------------------------------------
//
//                                                                  Lista de posicoes botao Baixo
//
//----------------------------------------------------------------------------------------------------------------------------------------------

var listbaixo=[];

//Saude
listbaixo[0]=0;
listbaixo[1]=1;
listbaixo[2]=3;//Menu principal opcao 1
listbaixo[3]=4;//Menu principal opcao 2
listbaixo[4]=5;//Menu principal opcao 3
listbaixo[5]=6;//Menu principal opcao 4
listbaixo[6]=2;//Menu principal opcao 5
listbaixo[7]=8;//Pressao Arterial e pulsacao
listbaixo[8]=7;//Glicose
listbaixo[9]=10;//Analise-7
listbaixo[10]=9;//Historial-7
listbaixo[11]=12;//Analise-8
listbaixo[12]=11;//Historial-8
listbaixo[13]=14;//Ecra de confirmacao Nao
listbaixo[14]=13;//Ecra de confirmacao Sim
listbaixo[15]=16;//Ecra de confirmacao com aviso(glicose) Nao
listbaixo[16]=15;//Ecra de confirmacao com aviso(glicose) Sim
listbaixo[17]=17;//Loading Pulsacao
listbaixo[18]=18;//Valores Glicose


//Musica
listbaixo[19]=0;//AdicionarFavorito
listbaixo[78]=19;//AdicionarFavoritosNao
listbaixo[79]=19;//AdicionarFavoritosSim
listbaixo[75]=4;//Partilha
listbaixo[76]=75;//PartilhaNao
listbaixo[77]=75;//PartilhaSim
listbaixo[21]=4;//InfoBandas
listbaixo[103]=104;//MusicasInfo
listbaixo[104]=105;//MusicasPartilha
listbaixo[105]=103;//MusicasAdicionar
listbaixo[22]=23;//Palco1
listbaixo[23]=24;//Palco2
listbaixo[24]=22;//Palco3
listbaixo[25]=26;//Banda1Palco1
listbaixo[26]=27;//Banda2Palco1
listbaixo[27]=25;//Banda3Palco1
listbaixo[28]=29;//Banda1Palco2
listbaixo[29]=30;//Banda2Palco2
listbaixo[30]=28;//Banda3Palco2
listbaixo[31]=32;//Banda1Palco3
listbaixo[32]=33;//Banda2Palco3
listbaixo[33]=31;//Banda3Palco3
listbaixo[34]=35;//Musica1Banda1Palco1
listbaixo[35]=36;//Musica2Banda1Palco1
listbaixo[36]=34;//Musica3Banda1Palco1
listbaixo[37]=38;//Musica1Banda2Palco1
listbaixo[38]=39;//Musica2Banda2Palco1
listbaixo[39]=37;//Musica3Banda2Palco1
listbaixo[40]=41;//Musica1Banda3Palco1
listbaixo[41]=42;//Musica2Banda3Palco1
listbaixo[42]=40;//Musica3Banda3Palco1
listbaixo[43]=44;//Musica1Banda1Palco2
listbaixo[44]=45;//Musica2Banda1Palco2
listbaixo[45]=43;//Musica3Banda1Palco2
listbaixo[46]=47;//Musica1Banda2Palco2
listbaixo[47]=48;//Musica2Banda2Palco2
listbaixo[48]=46;//Musica3Banda2Palco2
listbaixo[49]=50;//Musica1Banda3Palco2
listbaixo[50]=51;//Musica2Banda3Palco2
listbaixo[51]=49;//Musica3Banda3Palco2
listbaixo[52]=53;//Musica1Banda1Palco3
listbaixo[53]=54;//Musica2Banda1Palco3
listbaixo[54]=52;//Musica3Banda1Palco3
listbaixo[55]=56;//Musica1Banda2Palco3
listbaixo[56]=57;//Musica2Banda2Palco3
listbaixo[57]=55;//Musica3Banda2Palco3
listbaixo[58]=59;//Musica1Banda3Palco3
listbaixo[59]=60;//Musica2Banda3Palco3
listbaixo[60]=58;//Musica3Banda3Palco3


//Percorrem o menu de transicao das musicas (Info, share e add) 600-680
listbaixo[600]=601;
listbaixo[601]=602;
listbaixo[602]=600;

listbaixo[603]=604;
listbaixo[604]=605;
listbaixo[605]=603;

listbaixo[606]=607;
listbaixo[607]=608;
listbaixo[608]=606;

listbaixo[609]=610;
listbaixo[610]=611;
listbaixo[611]=609;

listbaixo[612]=613;
listbaixo[613]=614;
listbaixo[614]=612;

listbaixo[615]=616;
listbaixo[616]=617;
listbaixo[617]=615;

listbaixo[618]=619;
listbaixo[619]=620;
listbaixo[620]=618;

listbaixo[621]=622;
listbaixo[622]=623;
listbaixo[623]=621;

listbaixo[624]=625;
listbaixo[625]=626;
listbaixo[626]=624;

listbaixo[627]=628;
listbaixo[628]=629;
listbaixo[629]=627;

listbaixo[630]=631;
listbaixo[631]=632;
listbaixo[632]=630;

listbaixo[633]=634;
listbaixo[634]=635;
listbaixo[635]=633;

listbaixo[636]=637;
listbaixo[637]=638;
listbaixo[638]=636;

listbaixo[639]=640;
listbaixo[640]=641;
listbaixo[641]=639;

listbaixo[642]=643;
listbaixo[643]=644;
listbaixo[644]=642;

listbaixo[645]=646;
listbaixo[646]=647;
listbaixo[647]=645;

listbaixo[648]=649;
listbaixo[649]=650;
listbaixo[650]=648;

listbaixo[651]=652;
listbaixo[652]=653;
listbaixo[653]=651;

listbaixo[654]=655;
listbaixo[655]=656;
listbaixo[656]=654;

listbaixo[657]=658;
listbaixo[658]=659;
listbaixo[659]=657;

listbaixo[660]=661;
listbaixo[661]=662;
listbaixo[662]=660;

listbaixo[663]=664;
listbaixo[664]=665;
listbaixo[665]=663;

listbaixo[666]=667;
listbaixo[667]=668;
listbaixo[668]=666;

listbaixo[669]=670;
listbaixo[670]=672;
listbaixo[671]=669;

listbaixo[672]=673;
listbaixo[673]=674;
listbaixo[674]=672;

listbaixo[675]=676;
listbaixo[676]=677;
listbaixo[677]=675;

listbaixo[678]=679;
listbaixo[679]=680;
listbaixo[680]=678;

//Localizaçao
listbaixo[61]=63;//Amigos
listbaixo[62]=62;//ListadeAmigos
listbaixo[63]=61;//PontosDeInteresse
listbaixo[64]=65;//Palcos
listbaixo[65]=66;//Diversoes
listbaixo[66]=67;//Restaurantes
listbaixo[67]=68;//CentrosComerciais/Mercearias
listbaixo[68]=64;//WC
listbaixo[98]=99;//Lista dos Palcos
listbaixo[99]=100;//Lista dos Diversoes
listbaixo[100]=101;//Lista dos Restaurantes
listbaixo[101]=102;//Lista dos CentrosComerciais
listbaixo[102]=98;//Lista dos WC
//Amigos
listbaixo[681]=682;
listbaixo[682]=683;
listbaixo[683]=684;
listbaixo[684]=685;
listbaixo[685]=686;
listbaixo[686]=687;
listbaixo[687]=688;
listbaixo[688]=689;
listbaixo[689]=690;
listbaixo[690]=681;
//Palcos
listbaixo[377]=378;
listbaixo[378]=379;
listbaixo[379]=377;
//Restaurantes
listbaixo[380]=381;
listbaixo[381]=382;
listbaixo[382]=380;
//Diversoes
listbaixo[383]=384;
listbaixo[384]=385;
listbaixo[385]=383;
//Supermercados
listbaixo[386]=387;
listbaixo[387]=386;



//+APPS
listbaixo[69]=71;//Lanterna
listbaixo[151]=152;//Lanterna On
listbaixo[152]=151;//Lanterna Off

listbaixo[71]=69;//ListaDeFavoritos
listbaixo[83]=84;//Lista de Amigos
listbaixo[84]=83;//Lista de Locais
listbaixo[20]=20;//RemoverFavoritos
listbaixo[80]=81;//RemoverFavoritoNao
listbaixo[81]=80;//RemoverFavoritoSim
listbaixo[85]=85;//Removido com Sucesso

listbaixo[500]=501;
listbaixo[501]=502;
listbaixo[502]=500;

//Definiçoes
listbaixo[70]=72;//Luminosidade
listbaixo[92]=93;//LuminosidadeAlta
listbaixo[93]=94;//LuminosidadeMedia
listbaixo[94]=92;//LuminosidadeBaixa

listbaixo[72]=73;//ConexaoSmartphone
listbaixo[95]="";//ConectacaoNao
listbaixo[96]="";//ConectacaoSim
listbaixo[97]="";//Conectado com Sucesso
listbaixo[73]=74;//Perfil
listbaixo[86]="";//MostraPerfil
listbaixo[74]=70;//Tutorial
listbaixo[87]=88;//Tutorial1
listbaixo[88]=89;//Tutorial2
listbaixo[89]=130;//Tutorial3
listbaixo[130]=87;//Tutorial4


listbaixo[201]=202;
listbaixo[202]=201;

var ondeEstou= 0; //ecra atual

var ondeVou = 0; //ecra seguinte

var musicas=0;
var amigos=0;
var remover = 0;
var procurar = 0;

//========================Listas de transicao========================

//Musicas adicionadas aos favoritos
var listMusicasFavs=[753];

//Listas para localizacao
var listlocalizacaopalcos=[["Palco NOS", randomLoc(1,25)],["Palco Heineken", randomLoc(1,40)],["Palco Clubbing", randomLoc(1,37)]];//Lista de localizacao de palcos

//Lista de possiveis amigos
var listPossAmigos=[681,682,683,684,685,686,687,688,689,690];

//Lista amigos adicionados
var listAmigosAdd=[752];

//Lista Nomes amigos por ordem de imagem
var listAmigosNome=["Ana","Diogo","Gonçalo","Madalena","Maria","Nádia","Rafael","Ricardo","Rúben","Tiago"];

//Lista Nomes palcos por ordem de imagem
var listPalcosNome=["Palco NOS","Palco Heineken","Palco Clubbing"];

//Lista Nomes Restaurantes por ordem de imagem
var listRestaurantesNome=["Os Caracóis","O Barrigas","A Fresquinha"];

//Lista Nomes Diversoes por ordem de imagem
var listDiversoesNome=["Spiner","Montanha Arabe","Roda Colossal"];

//Lista Nomes supermercados por ordem de imagem
var listSupermercadosNome=["Maria Mercearias","Cantinho da Rosa"];

var indicemusicamostrar=0;
var indiceamigomostrar=0;
var musicaSelecionada;
var banda ;
var musica ;
var album ;
var data ;
var indice = 0 ;

var estounalistaamigos=0;
var estounalistamusica=0;

var ecraActual;

//funcao responsavel pela aleatoriadade
function randomLoc(x,y){
	var numero=Math.floor(Math.random()* (y - x +1) + x);
	return numero;
}

var partilha=[601, 604, 607, 610, 613, 616, 619, 622, 625, 628, 631, 634, 637, 640, 643, 646, 649, 652, 655, 658, 661, 664, 667, 670, 673, 676, 679]
var add=[602, 605, 608, 611, 614, 617, 620, 623, 626, 629, 632, 635, 638, 641, 644, 647, 650, 653, 656, 659, 662, 665, 668, 671, 674, 677, 680]

//Perfil
var Nome="Jéssica";
var Idade=21;
var Peso=56;


var MusicaEmQueEstou;

/*===========================================================================

				Listas de musicas nos favoritos

=============================================================================*/

//Funcao que adiciona as musicas a lista de favoritos
function VerificaMusica(){
	musicaSelecionada=listback[ecraActual];
	if (listMusicasFavs.indexOf(musicaSelecionada)==-1){
		if (listMusicasFavs.length==1 && listMusicasFavs[0]==753)
		{
			listMusicasFavs[0]=musicaSelecionada;
			ondeEstou=598;
		}
		else {
			listMusicasFavs.push(musicaSelecionada);
			ondeEstou=598;
		}
	}
	else {
		ondeEstou=597;
	}
}

//Funcao que partilha
function Partilha(){
	musicaSelecionada=listback[ecraActual];
	ondeEstou=599;
}

/*==============================================================================

				Funcoes que tratam das listas Favoritos

==============================================================================*/

//Funcao que entra na lista de musicas
function lista_musicas(){
	if (listMusicasFavs.length==1 && listMusicasFavs[0]==752){
		desactivarTudo();
		activarBack();
	}
	else{
		musicas=1;
		desactivarSeleccionar();
		
	}
	ondeVou=listMusicasFavs[0];
}

//Funcao que entra na lista de amigos
function lista_amigos(){
	amigos=1;
	if (listAmigosAdd.length==1){
		desactivarTudo();
		activarBack();
		ondeVou=listAmigosAdd[0];
	}
	else {		
		desactivarSeleccionar();
		ondeVou=listAmigosAdd[0];
	}
}

function add_to_lista(){
	if (listAmigosAdd.length<10){
		desactivarTudo();
		activarBack();
		var seraa = randomLoc(0,9)
		if (listAmigosAdd[0]==752){
			
			listAmigosAdd[0]=listPossAmigos[seraa];
			
			ondeVou=590;
		}
		else{
			var sera = listPossAmigos[seraa];
			
			if (listAmigosAdd.indexOf(sera)==-1){
				listAmigosAdd.push(sera);
				ondeVou=590;
			}
			else{
				ondeVou=591;
			}
			
		}
	}
	else {
		desactivarTudo();
		activarBack();
		ondeVou=591;
	}
}


function remove_from_lista(){
	if (listAmigosAdd.length>=1){
		desactivarTudo();
		activarBack();
		ondeVou = 751;
	
		listAmigosAdd[indiceamigomostrar]="" ; //limpar a lista de amigos para o gps
		listAmigosAdd.sort(); //ordernar essa lista 
		listAmigosAdd.shift(); //retira o ultimo elemento vazio
		if (listAmigosAdd.length==0){
			listAmigosAdd[0]=752;
		}
	}
	else{
		listAmigosAdd[0]=752;
	}
}


/*=========================================================================

		Funcoes de GPS

=========================================================================*/

// não esquecer de quando procurar algo ou alguem substituir gpsondevou
var distancia; //não mexer
var tempogps; // não mexer
var gpsondevou; // altera-se quando se quer procurar algo (aqui guardamos o que queremos procurar)
var normal = 1; // não mexer
var t; // não mexer
var on =0; // não mexer
var indiceimagem;
var imagemactual;

function iniciaGPS() {
    if (!on) {
        on = 1;
		distancia = Math.floor(Math.random()*(50-10+1)+10);
		indiceimagem = Math.floor(Math.random()*(5-1+1)+1);
        distanciagps();
    }
}

function paraGPS() {
    clearTimeout(tempogps);
	document.getElementById("chegou").innerHTML ="";
	document.getElementById("gps").innerHTML = "";
    on = 0;
	procurar=0;
}

function distanciagps() {
	if (distancia >1){
		imagemactual=300+indiceimagem;
		document.getElementById("imagens").src=listimg[imagemactual];
		if (indiceimagem!=3){
			if (indiceimagem > 3){
				distancia -=normal;
				indiceimagem -= 1;
			}
			else if (indiceimagem <3){
				distancia -=normal;
				indiceimagem += 1;
			}
		}
		else if (indiceimagem == 3){
			distancia -=normal;
			indiceimagem = 3;
		}
		imagemactual=300+indiceimagem;
		document.getElementById("imagens").src=listimg[imagemactual];
		document.getElementById("chegou").innerHTML = distancia+"m";
		tempogps = setTimeout(function(){ distanciagps() }, 1000);
	}
	else{
		paraGPS();
		ondeEstou=306;
		document.getElementById("imagens").src=listimg[306]; //imagem que diz chegou ao destino (gif)
		document.getElementById("chegou").innerHTML = "Chegou a<br>"+gpsondevou+"";
		document.getElementById("gps").innerHTML = "";
		desactivarTudo();
		activarBack();
	}
}

function GPS(){
	//imagens começam em 301 e vao até 306
	ondeEstou=301;
	document.getElementById("gps").innerHTML = gpsondevou;
	iniciaGPS();
}

/*=========================================================================

		Funcoes que vao por as cenas no ecra

=========================================================================*/

/*Funcao que imprime o perfil para o ecra*/
function mostrarPerfil(){
	document.getElementById("dados").innerHTML=("<br>Nome: "+Nome+"<br>Idade: "+Idade+"<br>Peso: "+Peso+"kg");
}

/* Funcao que desimprime o perfil do ecra*/
function apagarPerfil() {
	document.getElementById("dados").innerHTML=("");
}

/*Funcao que imprime a lista do palco 1 para o ecra*/
function listapalcoum() {
	document.getElementById("dados").innerHTML=(listbandas[0]);
}

/*Funcao que imprime a lista do palco 2 para o ecra*/
function listapalcodois() {
	document.getElementById("dados").innerHTML=(listbandas[1]);
}

/*Funcao que imprime a lista do palco 3 para o ecra*/
function listapalcotres() {
	document.getElementById("dados").innerHTML=(listbandas[2]);
}

/*=========================================================================

		Funcoes que vao por o tempo no ecra

=========================================================================*/

//Funcao que inicia o relogio
function iniciatempo(){
	myVar=setInterval(function(){tempo()},1000);
}

//Funcao que para o relogio
function paratempo(){
	clearInterval(myVar);
	document.getElementById("horas").innerHTML = '';
}

//imprime tempo para o ecra
function tempo() {
		var d = new Date();
		document.getElementById("horas").innerHTML = d.toLocaleTimeString();
}

/*=========================================================================

		Funcoes relativas a saude

=========================================================================*/

function AnalisePulso(){
	var pulso = Math.floor(Math.random()*(170-60+1)+60);
	var max = Math.floor(Math.random()*(140-90+1)+90);
	var min = Math.floor(Math.random()*(90-60+1)+60);
	listaHistorialPulso[(listaHistorialPulso.length)]=("Pulsação= "+pulso+"<br>Pressão arterial:<br>Max= "+max+"<br>Min= "+min);
	document.getElementById("dados").innerHTML = listaHistorialPulso[(listaHistorialPulso.length)-1];
}

function HistoricoPulso(){
	document.getElementById("dados").innerHTML = listaHistorialPulso[(listaHistorialPulso.length)-1];
}

function AnaliseGlicose(){
	var glicose = Math.floor(Math.random()*(140-70+1)+70);
	listaHistorialGlicose[(listaHistorialGlicose.length)]=("<br>Glicose= "+glicose+"mg/dl");
	document.getElementById("dados").innerHTML = listaHistorialGlicose[(listaHistorialGlicose.length)-1];
}

function HistoricoGlicose(){
	document.getElementById("dados").innerHTML = listaHistorialGlicose[(listaHistorialGlicose.length)-1];
}

/*Botão conjunto para emergencia*/
var tempodeimagem;

function Emergencia(){
	var tempo;
	if (ondeEstou == 1){
		var img = document.getElementById("imagens");
		img.style.visibility = 'visible';
		paratempo();
	}
	else if (ondeEstou==301){
		Back();
	}
	else if (ondeEstou == 17 || ondeEstou ==18 || ondeEstou == 86){
		var img = document.getElementById("imagens");
		img.style.visibility = 'visible';
		document.getElementById("dados").innerHTML = '';
		document.getElementById("gps").innerHTML = '';
		document.getElementById("horas").innerHTML = '';
	}
	else if (ondeEstou == 200){
		tempo = setTimeout(function(){Seleccionar()},2000);
		clearTimeout(tempo);
	}
	ondeEstou=200;
	document.getElementById("imagens").src=listimg[ondeEstou];
}

var start;
var end;

function iniciaalarme(){
	start = +new Date(); // get unix-timestamp in milliseconds
}

function terminaalarme(){
	end = +new Date();
	var diff = end - start; // time difference in milliseconds
	if (diff > 2500){
		activarTudo();
		Emergencia();
	}
}

/*=========================================================================

		Funcoes relativas ao desactivar e activar botoes

=========================================================================*/

var emergenciatempo;

function key(){
	ondeEstou=203;
	document.getElementById("imagens").src=listimg[ondeEstou];
	clearTimeout(emergenciatempo);
}

$(document).keydown(function(e) {
    switch(e.which) {
        case 81:
			if (ondeEstou==1){
				home();
			}
			desactivarTudo();
			activarBack();
			ondeEstou= 200;
			document.getElementById("imagens").src=listimg[200];
			emergenciatempo = setTimeout(key,500);
			break;
		case 112:
			window.open("./ManualdoUtilizador.pdf", 'pdf');
			break;
    }
});


function desactivarBack(){
	document.getElementById('Back').disabled=true;
}

function activarBack(){
	document.getElementById('Back').disabled=false;
}

function desactivarSeleccionar(){
	document.getElementById('Seleccionar').disabled=true;
}

function activarSeleccionar(){
	document.getElementById('Seleccionar').disabled=false;
}

function desactivarRodabaixo(){
	document.getElementById('Rodabaixo').disabled=true;
}

function activarRodabaixo(){
	document.getElementById('Rodabaixo').disabled=false;
}

function desactivarRodacima(){
	document.getElementById('Rodacima').disabled=true;
}

function activarRodacima(){
	document.getElementById('Rodacima').disabled=false;
}

function activarTudo(){
	activarRodacima();
	activarRodabaixo();
	activarSeleccionar();
	activarBack();
}

function desactivarTudo(){
	desactivarRodacima();
	desactivarRodabaixo();
	desactivarSeleccionar();
	desactivarBack();
}

/*=========================================================================

		Funcoes relativas aos botoes

=========================================================================*/

/*Funcao que faz as transicoes do botao home*/
function home(){
	remover = 0;
	musicas=0;
	amigos=0;
	procurar = 0;
	if (ondeEstou == 1){
		desactivarTudo();

		var img = document.getElementById("imagens");
		img.style.visibility = 'visible';
		paratempo();
		ondeEstou = 0;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if (ondeEstou ==17){
		desactivarTudo();
		activarSeleccionar();

		document.getElementById("dados").innerHTML = '';
		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';

		iniciatempo();
		ondeEstou = 1;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if(ondeEstou == 18){
		desactivarTudo();
		activarSeleccionar();

		document.getElementById("dados").innerHTML = '';
		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';

		iniciatempo();
		ondeEstou = 1;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if(ondeEstou == 86){
		desactivarTudo();
		activarSeleccionar();

		document.getElementById("dados").innerHTML = '';
		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';

		iniciatempo();
		ondeEstou = 1;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if (ondeEstou == 301){
		paraGPS();
		procurar = 0;

		desactivarTudo();
		activarSeleccionar();

		document.getElementById("horas").innerHTML = '';
		document.getElementById("chegou").innerHTML = '';
		document.getElementById("gps").innerHTML = '';
		document.getElementById("dados").innerHTML = '';

		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';

		iniciatempo();
		ondeEstou = 1;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if (ondeEstou == 306){
		desactivarTudo();
		activarSeleccionar();

		document.getElementById("chegou").innerHTML = '';
		document.getElementById("gps").innerHTML = '';
		document.getElementById("dados").innerHTML = '';

		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';

		iniciatempo();
		ondeEstou = 1;
		document.getElementById("imagens").src=listimg[ondeEstou];
	}
	else if (ondeEstou == 203){
		desactivarTudo();
		activarSeleccionar();

		iniciatempo();
		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';
		ondeEstou = 1;
	}
	else{
		desactivarTudo();
		activarSeleccionar();

		iniciatempo();
		var img = document.getElementById("imagens");
		img.style.visibility = 'hidden';
		ondeEstou = 1;
	}
}

/*Funcao que faz as transicoes do botao back*/
function Back(){
	if (musicas==1){
		musicas=0;
		ondeVou=84;
		desactivarTudo();
		activarTudo();
		document.getElementById("imagens").src=listimg[ondeVou];
	}
	else if (amigos==1){
		if (ondeEstou == 301){
			paraGPS();
			procurar = 0;
			amigos=0;
			remover = 0;
			activarTudo();
			document.getElementById("horas").innerHTML = '';
			document.getElementById("chegou").innerHTML = '';
			document.getElementById("gps").innerHTML = '';
			document.getElementById("dados").innerHTML = '';
			if (listAmigosNome.indexOf(gpsondevou) == -1){
				ondeVou = 63;
				document.getElementById("imagens").src=listimg[ondeVou];
			}
			else{
				ondeVou = 61;
				document.getElementById("imagens").src=listimg[ondeVou];
			}

		}
		else {
			if (ecraActual == 61){
				amigos=0;
				remover = 0;
				ecraActual = 0;
				procurar = 0;
				ondeVou=61;
				activarTudo();
				document.getElementById("imagens").src=listimg[ondeVou];
			}
			else if (ondeEstou == 591){
				ondeVou=83;
				desactivarTudo();
				activarTudo();
				document.getElementById("imagens").src=listimg[ondeVou];
			}
			else{
				amigos=0;
				remover = 0;
				procurar = 0;
				ondeVou=83;
				desactivarTudo();
				activarTudo();
				document.getElementById("imagens").src=listimg[ondeVou];
			}
		}
	}
	else {
		if (ondeEstou >=2 && ondeEstou<=6){
			desactivarTudo();
			activarSeleccionar();

			iniciatempo();
			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			ondeVou = listback[ondeEstou];
		}
		else if (ondeEstou>=350 && ondeEstou<=376){
			activarTudo();
			
			ondeVou =listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou==751){
			activarTudo();
			remover = 0;
			ondeVou = 83;
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou == 752){
			if (ecraActual == 61){
				ondeVou = 61;
				document.getElementById("imagens").src=listimg[ondeVou];
				ecraActual = 0;
			}
			else {
				ondeVou = listback[ondeEstou];
				document.getElementById("imagens").src=listimg[ondeVou];
			}
		}
		else if (ondeEstou>=34 && ondeEstou<=60 && ecraActual==84){
			desactivarTudo();
			activarTudo();

			ondeVou=ecraActual;
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou==597 ||ondeEstou==598 || ondeEstou==599){
			activarTudo();

			ondeVou = ecraActual;
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou>=92 && ondeEstou<=94) {
			desactivarTudo();
			activarTudo();
			ondeVou =listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou == 97){
			activarTudo();
			ondeVou= listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if ((ondeEstou >=87 && ondeEstou<=89) || ondeEstou==130){
			desactivarTudo();
			activarTudo();
			ondeVou=listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou == 86){
			activarTudo();
			apagarPerfil();
			var img = document.getElementById("imagens");
			img.style.visibility = 'visible';
			ondeVou = listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}

		else if (ondeEstou ==17){
			activarTudo();

			document.getElementById("dados").innerHTML = '';
			var img = document.getElementById("imagens");
			img.style.visibility = 'visible';
			ondeVou = listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if(ondeEstou == 18){
			activarTudo();

			document.getElementById("dados").innerHTML = '';
			var img = document.getElementById("imagens");
			img.style.visibility = 'visible';
			ondeVou = listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou == 301){
			paraGPS();
			procurar = 0;

			activarTudo();
			document.getElementById("horas").innerHTML = '';
			document.getElementById("chegou").innerHTML = '';
			document.getElementById("gps").innerHTML = '';
			document.getElementById("dados").innerHTML = '';
			if (listAmigosNome.indexOf(gpsondevou) == -1){
				ondeVou = 63;
				document.getElementById("imagens").src=listimg[ondeVou];
			}
			else{
				ondeVou = 61;
				document.getElementById("imagens").src=listimg[ondeVou];
			}

		}
		else if (ondeEstou == 590){
			activarTudo();
			ondeVou=listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou]
		}
		else if (ondeEstou == 306){
			activarTudo();
			procurar = 0;
			document.getElementById("chegou").innerHTML = '';
			document.getElementById("gps").innerHTML = '';
			document.getElementById("dados").innerHTML = '';
			if (listAmigosNome.indexOf(gpsondevou) == -1){
				ondeVou = 63;
				document.getElementById("imagens").src=listimg[ondeVou];
			}
			else{
				ondeVou = 61;
				document.getElementById("imagens").src=listimg[ondeVou];
			}
		}
		else if (ondeEstou == 591){
				ondeVou=83;
				desactivarTudo();
				activarTudo();
				document.getElementById("imagens").src=listimg[ondeVou];
		}
		else if (ondeEstou == 203){
			ondeVou=2;
			desactivarTudo();
			activarTudo();
			document.getElementById("imagens").src=listimg[ondeVou];
		}
		else{
			ondeVou = listback[ondeEstou];
			document.getElementById("imagens").src=listimg[ondeVou];
		}
	}
	ondeEstou=ondeVou;
}

/*Funcao que faz as transicoes do botao select*/
function Seleccionar(){
	ecraActual=0;
	if (remover == 1){
		if (listAmigosAdd[0]!= 752){
			remove_from_lista();
			ondeVou = 751;
		}
		else{ 
			ondeVou = 752;
		}
	}
	else if (remover == 0){
		if (ondeEstou == 1){
			activarTudo();

			paratempo();
			var img = document.getElementById("imagens");
			img.style.visibility = 'visible';
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 61 ){
			lista_amigos();
			activarSeleccionar();
			ecraActual= 61;
			procurar = 1;
		}
		else if (ondeEstou == 63){
			ondeVou = listselect[ondeEstou];
			procurar = 1;
		}
			
		else if (procurar == 1){
			if (ondeEstou == 68){ //seleccionar um wc para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= "WC";
				ondeVou=301;
				GPS();
			}
			else if (ondeEstou >= 681 && ondeEstou<=690){ //seleccionar um amigo para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= listAmigosNome[ondeEstou-681];
				ondeVou=301;
				GPS();
			}
			else if (ondeEstou >=377 && ondeEstou <= 379){ // seleccionar um palco para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= listPalcosNome[ondeEstou-377];
				ondeVou=301;
				GPS();
			}
			else if (ondeEstou >=380 && ondeEstou <= 382){ //seleccionar um restaurante para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= listRestaurantesNome[ondeEstou-380];
				ondeVou=301;
				GPS();
			}
			else if (ondeEstou >=383 && ondeEstou <= 385){ //seleccionar um diversao para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= listDiversoesNome[ondeEstou-383];
				ondeVou=301;
				GPS();
			}
			else if (ondeEstou >=386 && ondeEstou <= 387){ //seleccionar um Supermercado para encontrar
				desactivarTudo();
				activarBack();
				gpsondevou= listSupermercadosNome[ondeEstou-386];
				ondeVou=301;
				GPS();
			}
			else{
				ondeVou = listselect[ondeEstou];
			}
		}
		else if (ondeEstou==84){
		lista_musicas();
		desactivarSeleccionar();
		}
		else if (ondeEstou==500){
			lista_amigos();
			desactivarSeleccionar();
		}
		else if (ondeEstou==501){
			add_to_lista();
		}
		else if (ondeEstou==502){
			lista_amigos();
			activarSeleccionar();
			remover = 1;
		}
		else if (partilha.indexOf(ondeEstou)!=-1){
			desactivarTudo();
			activarBack();
			ecraActual=ondeEstou;
			Partilha();
			ondeVou=ondeEstou;
		}
		else if (add.indexOf(ondeEstou)!=-1){
			desactivarTudo();
			activarBack();
			ecraActual=ondeEstou;
			VerificaMusica();
			ondeVou=ondeEstou;
		}
		else if (ondeEstou == 70) {
			activarTudo();
			desactivarSeleccionar();
			ondeVou =listselect[ondeEstou];
		}
		else if (ondeEstou==72){
			desactivarTudo();
			activarBack();
			ondeVou =listselect[ondeEstou];
		}
		else if (ondeEstou == 73){
			activarTudo();
			desactivarTudo();
			activarBack();

			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			mostrarPerfil();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 14){
			desactivarTudo();
			activarBack();

			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			AnalisePulso();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 10){
			desactivarTudo();
			activarBack();

			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			HistoricoPulso();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 16){
			desactivarTudo();
			activarBack();

			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			AnaliseGlicose();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 12){
			desactivarTudo();
			activarBack();

			var img = document.getElementById("imagens");
			img.style.visibility = 'hidden';
			HistoricoGlicose();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou == 74){
			activarTudo();
			desactivarSeleccionar();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou==200){
			activarTudo();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou==202){
			desactivarTudo();
			ondeVou = listselect[ondeEstou];
		}
		else if (ondeEstou>=600 && ondeEstou<=680){
			desactivarTudo();
			activarBack();
			ondeVou = listselect[ondeEstou];
		}
		else{
			ondeVou = listselect[ondeEstou];
		}
	}
	
	document.getElementById("imagens").src=listimg[ondeVou];
	ondeEstou=ondeVou;
}

/*Funcao que faz as transicoes do botao rodacima*/
function Rodacima(){
	if (musicas==1){
		if (listMusicasFavs.indexOf(ondeEstou)==0){
			ondeVou=listMusicasFavs[listMusicasFavs.length-1];
		}
		else{
			ondeVou=listMusicasFavs[(listMusicasFavs.indexOf(ondeEstou))-1];
		}
	}
	else if (amigos==1){
		if (listAmigosAdd.indexOf(ondeEstou)==0){
			ondeVou=listAmigosAdd[listAmigosAdd.length-1];
			indiceamigomostrar = listAmigosAdd.length-1;
		}
		else{
			ondeVou=listAmigosAdd[listAmigosAdd.indexOf(ondeEstou)-1];
			indiceamigomostrar -=1;
		}
	}
	else {
		ondeVou = listcima[ondeEstou];
		
		
	}
	document.getElementById("imagens").src=listimg[ondeVou];
	ondeEstou=ondeVou;
}

//Funcao que faz as transicoes do botao rodabaixo
function Rodabaixo(){
	if (musicas==1){
		if (listMusicasFavs.indexOf(ondeEstou)==listMusicasFavs.length-1){
			ondeVou=listMusicasFavs[0];
		}
		else{
			ondeVou=listMusicasFavs[(listMusicasFavs.indexOf(ondeEstou))+1];
		}
	}
	else if (amigos==1){
		if (indiceamigomostrar==listAmigosAdd.length-1){
			ondeVou=listAmigosAdd[0];
			indiceamigomostrar = 0;
		}
		else{
			ondeVou=listAmigosAdd[(listAmigosAdd.indexOf(ondeEstou))+1];
			indiceamigomostrar +=1;
		}
	}
	else {
		ondeVou = listbaixo[ondeEstou];
		
	}
	document.getElementById("imagens").src=listimg[ondeVou];
	ondeEstou=ondeVou;
}