import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

/*une fonction qui retourne la liste de tous les artistes (page)*/
export async function Allartistes() {
    const artistes = await pb.collection('artiste').getFullList() ;
    return artistes;
    }

// une fonction qui retourne la liste de toutes les œuvres (page)
export async function Alloeuvres() {
    const oeuvres = await pb.collection('oeuvre').getFullList() ;
    return oeuvres;
    }


// une fonction qui retourne les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)
export async function OneArtisteIdOeuvres(id) {
    const artisteid = await pb.collection('artiste').getFullList({
        filter: `id = '${id}'`,
        expand: 'oeuvres',
    }) ;
    return artisteid;
   }

// une fonction qui retourne la liste des œuvres d'un artiste donné
export async function AllArtisteoeuvres(nom) {
    const artisteoeuvres = await pb.collection('artiste').getFullList({
        filter: `nom = '${nom}'`,
        expand: 'oeuvres',
    }) ;
    return artisteoeuvres;
   }


// une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
export async function Allartistesbydates() {
    const artistedate = await pb.collection('artiste').getFullList({
        sort:'naissance',
    }) ;
    return artistedate;
   }


// une fonction qui retourne la liste des œuvres triées par date (d'une manière chronologique) (frise)
export async function Alloeuvresbydates() {
    const oeuvredate = await pb.collection('oeuvre').getFullList({
        sort:'date',
    }) ;
    return oeuvredate;
   }

export async function artistesfavoris() {
    const favorisartistes = await pb.collection('artiste').getFullList({
        filter: `favoris = True`,

    });
    return favorisartistes;
}