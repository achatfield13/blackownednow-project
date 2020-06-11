import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.scss']
})
export class JoinusComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialRef = this.dialog.open(BlackOwnedNowDialogComponent, {
      width: '250px',
    });

    dialRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  ngOnInit(): void {
  }

}

interface bizTypes{
  value: string,
  viewValue: string
}

interface States {
name: string,
  abbreviation: string
}



@Component({
  selector: 'black-owned-now-add-dialog',
  templateUrl: 'black-owned-now-add-dialog.html'
})

export class BlackOwnedNowDialogComponent {

  businessTypes: bizTypes[] = [
    {value: 'accessories', viewValue: 'Accessories'},
    {value: 'apparel', viewValue:'Apparel'},
    {value: 'attorney', viewValue:'Attorney'},
    {value: 'author', viewValue:'Author'},
    {value: 'auto', viewValue:'Auto'},
    {value: 'barbershop', viewValue:'Barbershop'},
    {value: 'beauty', viewValue:'Beauty'},
    {value: 'catering', viewValue:'Catering'},
    {value: 'cleaning', viewValue:'Cleaning'},
    {value: 'consulting', viewValue:'Consulting'},
    {value: 'education', viewValue:'Education'},
    {value: 'event planner', viewValue:'Event Planner'},
    {value: 'fitness', viewValue:'Fitness'},
    {value: 'graphic designer', viewValue:'Graphic Designer'},
    {value: 'haircare', viewValue:'Haircare'},
    {value: 'handyman', viewValue:'Handyman'},
    {value: 'hospitality', viewValue:'Hospitality'},
    {value: 'marketing', viewValue:'Marketing'},
    {value: 'media', viewValue:'Media'},
    {value: 'medical', viewValue:'Medical'},
    {value: 'non-profit', viewValue:'Non-profit'},
    {value: 'online', viewValue:'Online'},
    {value: 'organization', viewValue:'Organization'},
    {value: 'photography', viewValue:'Photography'},
    {value: 'professionals', viewValue:'Professionals'},
    {value: 'real estate', viewValue:'Real Estate'},
    {value: 'restaurant', viewValue:'Restaurant'},
    {value: 'retail', viewValue:'Retail'},
    {value: 'salons', viewValue:'Salons'},
    {value: 'skin care', viewValue:'Skin Care'},
    {value: 'sports', viewValue:'Sports'},
    {value: 'stores', viewValue:'Stores'},
    {value: 'tax services', viewValue:'Tax Services'},
    {value: 'travel', viewValue:'Travel'},
    {value: 'wholesale', viewValue:'Wholesale'},
    {value: 'other', viewValue:'Other'},
  ]

  states: States[] = [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
]

  constructor (public dialogRef: MatDialogRef<BlackOwnedNowDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data) {}

    newBusinessForm = new FormGroup({
      businessName: new FormControl('',Validators.required),
      businessCategory: new FormControl(''),
      businessCategoryOther: new FormControl(''),
      businessCity: new FormControl(''),
      businessState: new FormControl(''),
      businessWebsite: new FormControl(''),
      businessDescription: new FormControl(''),
      facebookHandle: new FormControl(''),
      instagramHandle: new FormControl('',Validators.required)
    })

    getFormData(){
      console.log(this.newBusinessForm.value)
    }




  onNoClick(): void {
    this.dialogRef.close();
  }
}


