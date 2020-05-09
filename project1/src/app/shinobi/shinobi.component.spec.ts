import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinobiComponent } from './shinobi.component';

describe('Shinobi', () => {
  let component: ShinobiComponent;
  let fixture: ComponentFixture<ShinobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShinobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
