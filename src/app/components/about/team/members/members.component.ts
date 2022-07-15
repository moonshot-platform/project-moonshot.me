import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  loadMoreCount: number = 8;

  members: any = [
    {
      name: 'c0ntrol zer0',
      image: 'assets/media/images/members/c0ntrolzer0.webp',
      title: 'Main Developer',
      about: 'Software Engineer and guardian of the keys.'
    },
    {
      name: 'luisqsm',
      image: 'assets/media/images/members/luisqsm.webp',
      title: 'Design & Brand Manager',
      about: 'Architect, 3D artist, digital designer & crypto enthusiast.',
      social: [
        {
          link: 'https://twitter.com/luisqsm2',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        }
      ]
    },
    {
      name: 'Smack',
      image: 'assets/media/images/members/smack.webp',
      title: 'Positivity Guru',
      about: 'Connecting the people, the dots, to one piece of art.',
      social: [
        {
          link: 'https://twitter.com/smack_tm',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        },
        {
          link: 'https://t.me/Bornlucky89',
          icon: 'assets/media/icons/social/telegram-yellow-round-icon.svg',
          alt: 'telegram-icon'
        }
      ]
    },
    {
      name: 'Winnie',
      image: 'assets/media/images/members/winnie.webp',
      title: 'Moderator/Contributor',
      about: 'Running MoonSquad merchandise.'
    },
    {
      name: 'Furkan',
      image: 'assets/media/images/members/furkanksl.jpeg',
      title: 'Frontend Developer',
      about: 'A person who likes to produce something and learn quickly.',
      social: [
        {
          link: 'https://github.com/furkanksl',
          icon: 'assets/media/icons/social/github-yellow-round-icon.svg',
          alt: 'github-icon'
        },
      ]
    },
    {
      name: 'CryptoKam',
      image: 'assets/media/images/members/cryptokam.webp',
      title: 'Moderator/Contributor',
      about: 'Marketing advisor.<br>Creative ideas support.<br>Shill trooper.<br>'
    },
    {
      name: 'Sonic',
      image: 'assets/media/images/members/sonic.webp',
      title: 'Solidity Developer',
      about: 'Experienced backend engineer turned solidity developer. Enthusiast of blockchain and smart contract.'

    },
    {
      name: 'Borris Stain',
      image: 'assets/media/images/members/borris.webp',
      title: 'Lead Developer',
      about: 'Blockchain developer (MoonSea / MoonBoxes). Passionate about Blockchain Technology and Crypto',
      social: [{        
        link: 'https://t.me/borrisDapp',
        icon: 'assets/media/icons/social/telegram-yellow-round-icon.svg',
        alt: 'telegram-icon'
      },]
    },
    {
      name: 'Rony Tesla',
      image: 'assets/media/images/members/rony.webp',
      title: 'Senior Blockchain Developer',
      about: 'Software Engineer & Genius in Blockchain Development'
    },
    {
      name: 'Sawata Akhade',
      image: 'assets/media/images/members/sawata.webp',
      title: 'Team Manager',
      about: 'Supervises and coordinates with the development team to create bold, functional user experiences.'  
    },
    {
      name: 'Shubham Survase',
      image: 'assets/media/images/members/shubham.webp',
      title: 'Software Developer',
      about: 'Experienced backend developer proficient in several programming languages with in-depth knowledge of API design and DB architecture.'
    },
    {
      name: 'Prajkta Navlakhe',
      image: 'assets/media/images/members/prajkta.webp',
      title: 'Software Developer',
      about: 'Responsible for the server side code and APIs of our web applications'
    },
    {
      name: 'CryptoSeas',
      image: 'assets/media/images/members/cryptoseas.webp',
      title: 'Moderator/Contributor',
      about: 'The voice of Moonshot.<br>Legacy Mod since day 1.',
      social: [
        {
          link: 'https://twitter.com/TheVoiceOfCryp1',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        }
      ]
    },
    {
      name: 'Moon Squad',
      image: 'assets/media/images/members/moonsquad.webp',
      title: 'Moderator/Marketeer ',
      about: 'Social Media Director & Digital Marketing - SMO.',
      social: [
        {
          link: 'https://twitter.com/Mo0NsQuadguys',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        }
      ]
    },
    {
      name: 'Chocoboknight1',
      image: 'assets/media/images/members/chocoboknight1.webp',
      title: 'Community Manager',
      about: 'With 10 years of team leading experience, working to grow the project\'s presence on Reddit and other media platforms.',

    },
    {
      name: 'Meenu',
      image: 'assets/media/images/members/shef.webp',
      title: 'Moderator/Contributor',
      about: 'Monitoring, tracking and engaging with contents in the community and responding their queries in a timely manner.',
      social: [
        {
          link: 'https://twitter.com/meenubeniwal',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        }
      ]
    }   
  ];


  otherMembers: any = [

   
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onLoadMoreClick() {
    //this.loadMoreCount = this.members.length;
    this.members.push(...this.otherMembers);
  }

}
