import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'filter',
    loadChildren: () =>
      import('./pages/filter/filter.module').then((m) => m.FilterPageModule),
  },
  {
    path: 'planting-materials',
    loadChildren: () =>
      import('./pages/planting-materials/planting-materials.module').then(
        (m) => m.PlantingMaterialsPageModule
      ),
  },
  {
    path: 'fertilizers',
    loadChildren: () =>
      import('./pages/fertilizers/fertilizers.module').then(
        (m) => m.FertilizersPageModule
      ),
  },
  {
    path: 'agro-chemicals',
    loadChildren: () =>
      import('./pages/agro-chemicals/agro-chemicals.module').then(
        (m) => m.AgroChemicalsPageModule
      ),
  },
  {
    path: 'machineries',
    loadChildren: () =>
      import('./pages/machineries/machineries.module').then(
        (m) => m.MachineriesPageModule
      ),
  },
  {
    path: 'sell-rent',
    loadChildren: () =>
      import('./pages/sell-rent/sell-rent.module').then(
        (m) => m.SellRentPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
