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
  {
    path: 'pesticides',
    loadChildren: () =>
      import('./pages/pesticides/pesticides.module').then(
        (m) => m.PesticidesPageModule
      ),
  },
  {
    path: 'plant-growth-regulators',
    loadChildren: () =>
      import(
        './pages/plant-growth-regulators/plant-growth-regulators.module'
      ).then((m) => m.PlantGrowthRegulatorsPageModule),
  },
  {
    path: 'other',
    loadChildren: () =>
      import('./pages/other/other.module').then((m) => m.OtherPageModule),
  },
  {
    path: 'organic',
    loadChildren: () =>
      import('./pages/organic/organic.module').then((m) => m.OrganicPageModule),
  },

  {
    path: 'inorganic',
    loadChildren: () =>
      import('./pages/inorganic/inorganic.module').then(
        (m) => m.InorganicPageModule
      ),
  },
  {
    path: 'seeds',
    loadChildren: () =>
      import('./pages/seeds/seeds.module').then((m) => m.SeedsPageModule),
  },
  {
    path: 'seedlings',
    loadChildren: () =>
      import('./pages/seedlings/seedlings.module').then(
        (m) => m.SeedlingsPageModule
      ),
  },
  {
    path: 'tubers',
    loadChildren: () =>
      import('./pages/tubers/tubers.module').then((m) => m.TubersPageModule),
  },
  {
    path: 'tractors',
    loadChildren: () =>
      import('./pages/tractors/tractors.module').then(
        (m) => m.TractorsPageModule
      ),
  },
  {
    path: 'tillage',
    loadChildren: () =>
      import('./pages/tillage/tillage.module').then((m) => m.TillagePageModule),
  },
  {
    path: 'irrigation-systems',
    loadChildren: () =>
      import('./pages/irrigation-systems/irrigation-systems.module').then(
        (m) => m.IrrigationSystemsPageModule
      ),
  },
  {
    path: 'sprayers',
    loadChildren: () =>
      import('./pages/sprayers/sprayers.module').then(
        (m) => m.SprayersPageModule
      ),
  },
  {
    path: 'dryers',
    loadChildren: () =>
      import('./pages/dryers/dryers.module').then((m) => m.DryersPageModule),
  },
  {
    path: 'harvesting-equipments',
    loadChildren: () =>
      import('./pages/harvesting-equipments/harvesting-equipments.module').then(
        (m) => m.HarvestingEquipmentsPageModule
      ),
  },
  {
    path: 'planting-equipments',
    loadChildren: () =>
      import('./pages/planting-equipments/planting-equipments.module').then(
        (m) => m.PlantingEquipmentsPageModule
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
