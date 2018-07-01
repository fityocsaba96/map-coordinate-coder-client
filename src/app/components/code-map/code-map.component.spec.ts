import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMapComponent } from './code-map.component';

describe('CodeMapComponent', () => {
  let component: CodeMapComponent;
  let fixture: ComponentFixture<CodeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
