import { Component, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import {
  TimelineMonthService, ResizeService, DragAndDropService, GroupModel, EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import { resourceData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TimelineMonthService, ResizeService, DragAndDropService]
})

export class AppComponent {
  title = 'schedule-ang8';
  public selectedDate: Date = new Date(2018, 3, 4);
  public group: GroupModel = {
    resources: ['Categories'], enableCompactView: false
  };
  public categoryDataSource: Object[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286', designation: "Cardioligst" },
    { text: 'Margaret', id: 2, groupId: 1, color: '#7fa900', designation: "Neurologist" },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57', designation: "Orthopedic Surgeon" },
    { text: 'Laura', id: 4, groupId: 2, color: '#5978ee', designation: "Dentist" }
  ];
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource: resourceData
  };
  private instance: Internationalization = new Internationalization();
  getTimeString(value: Date): string {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  }
}
