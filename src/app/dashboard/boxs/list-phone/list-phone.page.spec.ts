import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPhonePage } from './list-phone.page';

describe('ListPhonePage', () => {
  let component: ListPhonePage;
  let fixture: ComponentFixture<ListPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
