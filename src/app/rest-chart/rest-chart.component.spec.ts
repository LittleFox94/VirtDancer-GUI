import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestChartComponent } from './rest-chart.component';

describe('RestChartComponent', () => {
  let component: RestChartComponent;
  let fixture: ComponentFixture<RestChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
