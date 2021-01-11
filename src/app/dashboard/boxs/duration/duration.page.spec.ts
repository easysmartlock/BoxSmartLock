import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DurationPage } from './duration.page';

describe('DurationPage', () => {
  let component: DurationPage;
  let fixture: ComponentFixture<DurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
