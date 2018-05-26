import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContenuComponent } from './app-contenu.component';

describe('AppContenuComponent', () => {
  let component: AppContenuComponent;
  let fixture: ComponentFixture<AppContenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
