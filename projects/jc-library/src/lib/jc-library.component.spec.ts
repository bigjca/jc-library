import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JcLibraryComponent } from './jc-library.component';

describe('JcLibraryComponent', () => {
  let component: JcLibraryComponent;
  let fixture: ComponentFixture<JcLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JcLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
