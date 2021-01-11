import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPhonePage } from './add-phone.page';

describe('AddPhonePage', () => {
  let component: AddPhonePage;
  let fixture: ComponentFixture<AddPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
