import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewCompComponent } from './childview-comp.component';

describe('ChildviewCompComponent', () => {
  let component: ChildviewCompComponent;
  let fixture: ComponentFixture<ChildviewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildviewCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
