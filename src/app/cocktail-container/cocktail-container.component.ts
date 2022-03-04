import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://img-3.journaldesfemmes.fr/pLfGkxdbk7uMy6krRNajyrDdjV0=/750x500/smart/8c86ef81e01a405cbeaf3a428927b3f6/recipe-jdf/10025184.jpg',
      description:
        'Mojito vient du mot d’origine africaine mojo - le sortilège, la légende. Ca, c’est sûr. tout le monde s’accorde aussi pour dire que son lieu de naissance est Cuba. Même chose pour les ingrédients originels : aguardiente (rhum non raffiné) ou rhum, sucre, citron vert et menthe. En revanche, pour la parternité, c’est plus compliqué. Car trois récits s’opposent et résonnent avec le nom de cette apéritif.',
    },
    {
      name: 'Pina Colada',
      img: 'https://www.cocktailmag.fr/media/k2/items/cache/63503204d18160dd6a733e989b70c404_XL.jpg',
      description:
        "Piña Colada » se traduit littéralement par « ananas pressé ». L'histoire de la Piña Colada remonte à 1954. Tout aurait commencé avec Ramon Monchito Marrero, barman de l'hôtel Hilton de San Juan, à Porto Rico. Ramon souhaitait restituer toutes les saveurs de Porto Rico en un seul verre.",
    },
    {
      name: 'Bloody Mary',
      img: 'https://www.bar-maison.com/wp-content/uploads/2021/01/bloody-mary.jpg',
      description:
        "Qui est Bloody Mary ? Selon certaines sources, il s'agirait de la fameuse reine d'Angleterre, Marie Tudor, dont le règne a été marqué par une grande cruauté et de nombreux opposants brûlés au bûcher. À cette époque, ses ennemis la surnommaient « Bloody Mary », que l'on peut traduire par « Marie la Sanglante ».",
    },
    {
      name: 'Cuba libre',
      img: 'https://media.istockphoto.com/photos/cuba-libre-with-brown-rum-cola-mint-and-lime-cuba-libre-or-long-iced-picture-id1204451013?k=20&m=1204451013&s=612x612&w=0&h=8tD6uDq7sSLo1vhdkRJBVGMejHwtdNVUlddfWLAAUh0=',
      description:
        "Selon la légende, cette appellation viendrait d'un soldat américain qui, commandant ce cocktail, porta un toast « Por Cuba libre ! » (Pour Cuba libre ! en espagnol) qui était le leitmotiv des troupes américaines durant la guerre.",
    },
    {
      name: 'Cosmopolitan',
      img: 'https://assets.afcdn.com/recipe/20180705/80274_w1024h1024c1cx2378cy1278.webp',
      description:
        "Il aurait été créé en 1958 et portait le nom, à ses débuts, de « Stealth Martini ». Il a en tout cas été nommé ainsi dans l'ouvrage « The Martini », de Barnaby Conrad II, rendant hommage au Dry Martini. C'est dans les années 70 que le Cosmo devient réellement le Cosmo, sous l'impulsion de la barmaid « Cheryl Cook ",
    },
  ];

  public selectedCocktail: Cocktail = this.cocktails[0];

  constructor() {}

  ngOnInit(): void {}
}
