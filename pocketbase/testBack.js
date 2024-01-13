import { Allartistes } from "./backend.mjs";
import { Alloeuvres } from "./backend.mjs";
import { OneArtisteIdOeuvres } from "./backend.mjs";
import { AllArtisteoeuvres } from "./backend.mjs";
import { Allartistesbydates } from "./backend.mjs";
import { Alloeuvresbydates } from "./backend.mjs";
import { artistesfavoris } from "./backend.mjs";

// une fonction qui retourne la liste de tous les artistes (page)
/*try {
    const artistes = await Allartistes() ;
    console.log(JSON.stringify(artistes, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }*/


// // une fonction qui retourne la liste de toutes les œuvres (page)
 /*try {
     const oeuvres = await Alloeuvres() ;
     console.log(JSON.stringify(oeuvres, null, 2)) ;
     } catch (e) {
     console.error(e) ;
     }*/


// // une fonction qui retourne les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)
/* try {
      const artisteid = await OneArtisteIdOeuvres('gzli2qbto02a0c1') ;
       console.log(JSON.stringify(artisteid, null, 2)) ;
      } catch (e) {
         console.error(e) ;
      }*/


// // une fonction qui retourne la liste des œuvres d'un artiste donné
 /*try {
      const artisteoeuvres = await AllArtisteoeuvres('Belly') ;
       console.log(JSON.stringify(artisteoeuvres, null, 2)) ;
      } catch (e) {
      console.error(e) ;
      }*/


// // une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
 /*try {
     const artistedate = await Allartistesbydates() ;
      console.log(JSON.stringify(artistedate, null, 2)) ;
     } catch (e) {
     console.error(e) ;
     }/*


/*une fonction qui retourne la liste des œuvres triées par date (d'une manière chronologique) (frise)*/
/*try {
    const oeuvredate = await Alloeuvresbydates() ;
     console.log(JSON.stringify(oeuvredate, null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }*/

// try {
//     const favorisoeuvres = await artistesfavoris();
//     console.log(JSON.stringify(favorisoeuvres, null, 2));
// } catch (e) {
//     console.error(e);
// }
