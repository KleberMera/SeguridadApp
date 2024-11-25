import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonutComponent } from './list-donut.component';

describe('ListDonutComponent', () => {
  let component: ListDonutComponent;
  let fixture: ComponentFixture<ListDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDonutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
