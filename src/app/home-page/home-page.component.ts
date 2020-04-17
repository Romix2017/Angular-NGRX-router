import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers'
import { selectCurrentRoute, selectQueryParams, selectRouteParams, selectRouteData, selectQueryName, selectRouter, selectAllRouterParams, selectProductId } from '../reducers/selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public currentRoute$ = this.store$.pipe(select(selectCurrentRoute))
  public queryParams$ = this.store$.pipe(select(selectQueryParams))
  public selectRouteParams$ = this.store$.pipe(select(selectRouteParams))
  public selectRouteData$ = this.store$.pipe(select(selectRouteData))
  public selectQueryName$ = this.store$.pipe(select(selectQueryName))
  public selectRouter$ = this.store$.pipe(select(selectRouter))
  public selectAllRouterParams$ = this.store$.pipe(select(selectAllRouterParams))
  public selectProductId$ = this.store$.pipe(select(selectProductId))
  constructor(private store$: Store<State>) { }

  ngOnInit(): void {
  }

}
