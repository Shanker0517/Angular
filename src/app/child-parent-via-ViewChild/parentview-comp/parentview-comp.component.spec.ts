import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentviewCompComponent } from './parentview-comp.component';

describe('ParentviewCompComponent', () => {
  let component: ParentviewCompComponent;
  let fixture: ComponentFixture<ParentviewCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentviewCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentviewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
