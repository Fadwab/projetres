import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalleComponent } from './delete-salle.component';

describe('DeleteSalleComponent', () => {
  let component: DeleteSalleComponent;
  let fixture: ComponentFixture<DeleteSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
