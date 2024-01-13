import PocketBase from 'pocketbase' ;
import type { OeuvreResponse } from './pocketbase-types';
import type { ArtisteResponse } from './pocketbase-types';
// export const pb = new PocketBase('http://r203orient.marwa-nezzar.fr/') ;
export const pb = new PocketBase('http://localhost:5173/');

/*une fonction qui retourne la liste de tous les artistes (page)*/
export async function Allartistes() {
    const artistes = await pb.collection('artiste').getFullList<ArtisteResponse>() ;
    return artistes;
    }

// une fonction qui retourne la liste de toutes les œuvres (page)
export async function Alloeuvres() {
    const oeuvres = await pb.collection('oeuvre').getFullList<OeuvreResponse>() ;
    return oeuvres;
    }


// une fonction qui retourne les infos d'un artiste en donnant son id en paramètre avec liste de ses œuvres (page)
export async function OneArtisteIdOeuvres(id:string) {
    const artisteid = await pb.collection('artiste').getFullList({
        filter: `id = '${id}'`,
        expand: 'oeuvres',
    }) ;
    return artisteid;
   }

// une fonction qui retourne la liste des œuvres d'un artiste donné
export async function AllArtisteoeuvres(nom:string) {
    const artisteoeuvres = await pb.collection('artiste').getFullList({
        filter: `nom = '${nom}'`,
        expand: 'oeuvres',
    }) ;
    return artisteoeuvres;
   }


// une fonction qui retourne la liste des artistes triés par date (d'une manière chronologique) (frise)
export async function Allartistesbydates() {
    const artistedate = await pb.collection('artiste').getFullList<ArtisteResponse>({
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

// une oeuvre
export async function OneId(id:string) {
    const onerecord = await pb.collection('oeuvre').getOne(
        id,
        {expand: 'artistes'}
    );
    return onerecord;
}

export async function OneId2(id: string) {
    const onerecord2 = await pb.collection('artiste').getOne(
        id,
        { expand: 'oeuvres' }
    );
    return onerecord2;
}

export async function artistesfavoris() {
    const favorisartistes = await pb.collection('artiste').getFullList<ArtisteResponse>({
        filter: `favoris = True`,

    });
    return favorisartistes;
}

export async function oeuvresfavoris() {
    const favorisoeuvres = await pb.collection('oeuvre').getFullList<OeuvreResponse>({
        filter: `favoris = True`,

    });
    return favorisoeuvres;
}