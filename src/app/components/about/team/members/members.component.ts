import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  members : any=[
    {
      name : 'c0ntrol zer0',
      image : 'assets/media/images/members/control-zero.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'luisqsm',
      image : 'assets/media/images/members/luisqsm.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'Chocoboknigh1',
      image : 'assets/media/images/members/chocoboknight1.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'Jack',
      image : 'assets/media/images/members/jack.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'Rick',
      image : 'assets/media/images/members/rick.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'CryptoHunter',
      image : 'assets/media/images/members/cryptohunter.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'Spaghetti House',
      image : 'assets/media/images/members/spaghetti-house.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    },
    {
      name : 'Smack',
      image : 'assets/media/images/members/smack.jpg',
      title : 'Title',
      about : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
