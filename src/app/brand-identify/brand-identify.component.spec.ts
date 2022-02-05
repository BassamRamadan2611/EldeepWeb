import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIdentifyComponent } from './brand-identify.component';

describe('BrandIdentifyComponent', () => {
  let component: BrandIdentifyComponent;
  let fixture: ComponentFixture<BrandIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandIdentifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
