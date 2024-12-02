import { Component, Input } from '@angular/core';
import { Job } from '../models/job.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-item',
  imports: [CommonModule],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  @Input() job!: Job;
}
