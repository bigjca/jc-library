import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcTextComponent } from './jc-text.component';

describe('JcTextComponent', () => {
  let component: JcTextComponent;
  let fixture: ComponentFixture<JcTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
