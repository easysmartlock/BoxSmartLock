import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelPhonePage } from './del-phone.page';

describe('DelPhonePage', () => {
  let component: DelPhonePage;
  let fixture: ComponentFixture<DelPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
