import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersListComponent } from '@src/app/villagers/villagers-list/villagers-list.component';

describe('VillagersListComponent', () => {
  let component: VillagersListComponent;
  let fixture: ComponentFixture<VillagersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
