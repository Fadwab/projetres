import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCollaborateurComponent } from './consult-collaborateur.component';

describe('ConsultCollaborateurComponent', () => {
  let component: ConsultCollaborateurComponent;
  let fixture: ComponentFixture<ConsultCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
