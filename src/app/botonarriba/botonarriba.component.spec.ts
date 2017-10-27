import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonarribaComponent } from './botonarriba.component';

describe('BotonarribaComponent', () => {
  let component: BotonarribaComponent;
  let fixture: ComponentFixture<BotonarribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonarribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonarribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
