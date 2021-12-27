import {Component, OnInit} from '@angular/core';
import {LoaderService} from "./loader.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'st-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loading ?: boolean;

  constructor(private loaderService: LoaderService) {

    this.loaderService.isLoading.subscribe((v) => {

      this.loading = v;

    });

  }

  ngOnInit() {
  }

}
