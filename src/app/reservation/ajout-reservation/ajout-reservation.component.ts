import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChangeDetectionStrategy, ViewChild,TemplateRef} from '@angular/core';
import {   EventEmitter} from '@angular/core';

import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';

import {SalleService} from './../../service/salle.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-ajout-reservation',
  templateUrl: './ajout-reservation.component.html',
  styleUrls: ['./ajout-reservation.component.css']
})
export class AjoutReservationComponent implements OnInit {
  salles: any[];
  recherche: any = {
    color: {},
  };
  visible: Boolean[] = [];

  onAdd = new EventEmitter();
 
 
  constructor(
    public dialogRef: MatDialogRef<AjoutReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private modal: NgbModal,
    public dialog: MatDialog,
    private salleService: SalleService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
 @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

   handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
     
    this.refresh.next();
  }

 onButtonClicked() {

  this.recherche.heure_deb.setFullYear(this.recherche.date.getFullYear());
    this.recherche.heure_deb.setMonth(this.recherche.date.getMonth());
    this.recherche.heure_deb.setDate(this.recherche.date.getDate());
    this.recherche.heure_fin.setFullYear(this.recherche.date.getFullYear());
    this.recherche.heure_fin.setMonth(this.recherche.date.getMonth());
    this.recherche.heure_fin.setDate(this.recherche.date.getDate());
   this.recherche.color = {
     primary: this.recherche.myColor,
     secondary: this.recherche.myColor,
   }
   console.log(this.recherche);
   this.recherche.statut = "validée";
   this.recherche.user = 1;
   this.recherche.salle = 1
    this.salleService.addReservation(this.recherche).subscribe(
     
     (item) => {

     
        this.onAdd.emit(item);
        this.dialogRef.close();
      },
     (error) => console.log(error)
);

 this.salleService.rechercheSalle(this.recherche).subscribe(
      (items: any[]) => { this.salles = items },
      (error) => { console.log(error) }
  );

  // window.location.reload();
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(AjoutReservationComponent, {
      width: '50%',
      height:'50%',
       
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }

  rechercher() {
    this.recherche.heure_deb.setFullYear(this.recherche.date.getFullYear());
    this.recherche.heure_deb.setMonth(this.recherche.date.getMonth());
    this.recherche.heure_deb.setDate(this.recherche.date.getDate());
    this.recherche.heure_fin.setFullYear(this.recherche.date.getFullYear());
    this.recherche.heure_fin.setMonth(this.recherche.date.getMonth());
    this.recherche.heure_fin.setDate(this.recherche.date.getDate());
    
    this.salleService.rechercheSalle(this.recherche).subscribe(
      (items: any[]) => { this.salles = items },
      (error) => { console.log(error) }
  );
     
    console.log(this.recherche);
  }


}
