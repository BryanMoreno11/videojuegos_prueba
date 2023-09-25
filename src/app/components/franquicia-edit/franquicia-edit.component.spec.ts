import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranquiciaEditComponent } from './franquicia-edit.component';

describe('FranquiciaEditComponent', () => {
  let component: FranquiciaEditComponent;
  let fixture: ComponentFixture<FranquiciaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FranquiciaEditComponent]
    });
    fixture = TestBed.createComponent(FranquiciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
