import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualMachineWizardComponent } from './virtual-machine-wizard.component';

describe('VirtualMachineWizardComponent', () => {
  let component: VirtualMachineWizardComponent;
  let fixture: ComponentFixture<VirtualMachineWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualMachineWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualMachineWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
