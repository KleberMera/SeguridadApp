import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPieComponent } from './list-pie.component';

describe('ListPieComponent', () => {
  let component: ListPieComponent;
  let fixture: ComponentFixture<ListPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
