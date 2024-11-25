import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetsComponent } from './paquets.component';

describe('PaquetsComponent', () => {
  let component: PaquetsComponent;
  let fixture: ComponentFixture<PaquetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaquetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaquetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
