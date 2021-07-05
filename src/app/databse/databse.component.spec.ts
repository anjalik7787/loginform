import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabseComponent } from './databse.component';

describe('DatabseComponent', () => {
  let component: DatabseComponent;
  let fixture: ComponentFixture<DatabseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
