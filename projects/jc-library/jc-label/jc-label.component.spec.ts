import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcLabelComponent } from './jc-label.component';

describe('JcLabelComponent', () => {
  let component: JcLabelComponent;
  let fixture: ComponentFixture<JcLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
