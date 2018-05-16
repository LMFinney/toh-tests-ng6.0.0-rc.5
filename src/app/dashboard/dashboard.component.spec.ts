import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // beforeEach(async(() => {
  //   const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
  //   svcSpy.getHeroes.and.returnValue(of([
  //     {id: 0, name: 'Atta Boy'},
  //     {id: 1, name: 'Thatsmy Girl'},
  //   ]));

  //   TestBed.configureTestingModule({
  //     providers: [
  //       DashboardComponent,
  //       { provide: HeroService, useValue: svcSpy }
  //     ]
  //   });
  // }));

  beforeEach(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([
      {id: 0, name: 'Atta Boy'},
      {id: 1, name: 'Thatsmy Girl'},
    ]));

    // fixture = TestBed.createComponent(DashboardComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    // component = TestBed.get(DashboardComponent);

    component = new DashboardComponent(svcSpy);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.heroes).toEqual([{id: 1, name: 'Thatsmy Girl'}]);
  });
});
