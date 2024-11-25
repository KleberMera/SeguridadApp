import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisBarComponent } from './lis-bar.component';

describe('LisBarComponent', () => {
  let component: LisBarComponent;
  let fixture: ComponentFixture<LisBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
