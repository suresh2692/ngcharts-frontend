import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayreceiveComponent } from './payreceive.component';

describe('PayreceiveComponent', () => {
  let component: PayreceiveComponent;
  let fixture: ComponentFixture<PayreceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayreceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
