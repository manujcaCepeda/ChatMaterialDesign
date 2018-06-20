import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public photosVideos = [
    {
        'name' : 'June 2015',
        'info' : '5 Photos',
        'media': [
            {
                'type'   : 'photo',
                'title'  : 'Mountain Sunset',
                'preview': 'assets/img/etc/mountain-sunset.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Lake',
                'preview': 'assets/img/etc/mountain-lake.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Hot air balloons',
                'preview': 'assets/img/etc/air-balloons.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Cactus',
                'preview': 'assets/img/etc/cactus.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Road Trip',
                'preview': 'assets/img/etc/road-trip.jpg'
            }
        ]
    },
    {
        'name' : 'May 2015',
        'info' : '7 Photos, 3 Videos',
        'media': [
            {
                'type'   : 'photo',
                'title'  : 'Mountain Sunset',
                'preview': 'assets/img/etc/mountain-sunset.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Lake',
                'preview': 'assets/img/etc/mountain-lake.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Hot air balloons',
                'preview': 'assets/img/etc/air-balloons.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Cactus',
                'preview': 'assets/img/etc/cactus.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Road Trip',
                'preview': 'assets/img/etc/road-trip.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Sunset',
                'preview': 'assets/img/etc/mountain-sunset.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Lake',
                'preview': 'assets/img/etc/mountain-lake.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Hot air balloons',
                'preview': 'assets/img/etc/air-balloons.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Cactus',
                'preview': 'assets/img/etc/cactus.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Road Trip',
                'preview': 'assets/img/etc/road-trip.jpg'
            }
        ]
    },
    {
        'name' : 'April 2015',
        'info' : '5 Photos',
        'media': [
            {
                'type'   : 'photo',
                'title'  : 'Mountain Sunset',
                'preview': 'assets/img/etc/mountain-sunset.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Lake',
                'preview': 'assets/img/etc/mountain-lake.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Hot air balloons',
                'preview': 'assets/img/etc/air-balloons.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Cactus',
                'preview': 'assets/img/etc/cactus.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Road Trip',
                'preview': 'assets/img/etc/road-trip.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Sunset',
                'preview': 'assets/img/etc/mountain-sunset.jpg'
            },
            {
                'type'   : 'photo',
                'title'  : 'Mountain Lake',
                'preview': 'assets/img/etc/mountain-lake.jpg'
            }
        ]
    }
];

  constructor() { }

  ngOnInit() {
  }

}
