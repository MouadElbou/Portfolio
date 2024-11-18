import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDownloadComponentComponent } from './cv-download-component.component';

describe('CvDownloadComponentComponent', () => {
  let component: CvDownloadComponentComponent;
  let fixture: ComponentFixture<CvDownloadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvDownloadComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDownloadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
