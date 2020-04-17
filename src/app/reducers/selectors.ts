import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME } from '@ngrx/router-store';

export interface State {
  [DEFAULT_ROUTER_FEATURENAME]: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
  >(DEFAULT_ROUTER_FEATURENAME);

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectQueryName = selectQueryParam('name')
export const selectQuerySurname = selectQueryParam('surname')
export const selectCategoryIdRouterParam = selectRouteParam('categoryId')
export const selectAllRouterParams = createSelector(
  selectRouter,
  (state) => {
    const root = state.state.root
    let routerParams = {}
    let child = root.firstChild;
    while (child) {
      routerParams = {
        ...routerParams,
        ...child.params
      }
      child = child.firstChild;
    }
    return routerParams
  }
)
export const selectAllRouterParam = (param: string) => createSelector(
  selectAllRouterParams,
  params => params[param]
)
export const selectProductId = selectAllRouterParam('productId')
