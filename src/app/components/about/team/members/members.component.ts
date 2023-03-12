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
      title: 'Blockchain Developer',
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
      about: 'Experienced backend developer proficient in several programming languages.'
    },
    {
      name: 'Prajkta Navlakhe',
      image: 'assets/media/images/members/prajkta.webp',
      title: 'Software Developer',
      about: 'Responsible for the server side code and APIs of our web applications'
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
    },
    {
      name: 'zer0',
      image: 'assets/media/images/members/zer0.webp',
      title: 'Developer',
      about: 'Advisor / Developer'
    }, 
    {
      name: 'Dandy Banger',
      image: 'assets/media/images/members/dandybanger.webp',
      title: 'Visioneer',
      about: 'Concept Designer',
      social: [
        {
          link: 'https://twitter.com/Ra8bitsNFT',
          icon: 'assets/media/icons/social/twitter-yellow-round-icon.svg',
          alt: 'twitter-icon'
        }
      ]
    },
    {
      name: 'Pixel8it', 
      image: 'assets/media/images/members/pixel8it.webp',
      title: 'Art Director',
      about: 'Creative Designer',
      social: [
        {
          link: 'https://twitter.com/Ra8bitsNFT',
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
