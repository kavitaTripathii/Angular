import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolkComponent } from './folk.component';

describe('FolkComponent', () => {
  let component: FolkComponent;
  let fixture: ComponentFixture<FolkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
