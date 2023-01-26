import { Component, Output, EventEmitter } from '@angular/core';
import { topics} from '../topics';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent {
  topics = topics
  @Output() notify = new EventEmitter();
  resultNotify(resultTitle: string, resultExpandedDescription: string) {
    this.notify.emit({
      title: resultTitle,
      expandedDescription: resultExpandedDescription,
    });
  }
}
