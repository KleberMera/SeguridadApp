import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaVerticalComponent } from './cta-vertical.component';

describe('CtaVerticalComponent', () => {
  let component: CtaVerticalComponent;
  let fixture: ComponentFixture<CtaVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
