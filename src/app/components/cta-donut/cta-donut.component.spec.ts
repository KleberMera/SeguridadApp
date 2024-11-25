import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaDonutComponent } from './cta-donut.component';

describe('CtaDonutComponent', () => {
  let component: CtaDonutComponent;
  let fixture: ComponentFixture<CtaDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaDonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
