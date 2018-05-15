import { async } from '@angular/core/testing';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroSvc', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of(
      [
        {id: 0, name: 'Atta Boy'},
        {id: 1, name: 'Thatsmy Girl'},
      ]));

    // TestBed.configureTestingModule({
    //   imports: [RouterTestingModule],
    //   providers: [
    //     DashboardComponent,
    //     { provide: HeroService, useValue: svcSpy }
    //   ]
    // });
    component = new DashboardComponent(svcSpy);
  }));

  // beforeEach(() => {
  //   component = TestBed.get(DashboardComponent);
  // });

  it('should be created', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.heroes).toEqual([{id: 1, name: 'Thatsmy Girl'}]);
  });
});
