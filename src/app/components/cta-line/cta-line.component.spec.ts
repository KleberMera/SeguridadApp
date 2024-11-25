import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaLineComponent } from './cta-line.component';

describe('CtaLineComponent', () => {
  let component: CtaLineComponent;
  let fixture: ComponentFixture<CtaLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
